"""Fine-tuning LoRA de Mistral-7B pour l'extraction structurée de CV.

Compatible entrypoint SageMaker (lit SM_CHANNEL_TRAIN / SM_MODEL_DIR) et exécution locale :
    python train/finetune_lora.py --train data/extraction_train.jsonl --out out/lora
Chaque ligne JSONL : {"cv": "<texte pseudonymisé>", "target": {...json attendu...}}
"""
import argparse
import json
import os

import torch
from datasets import load_dataset
from peft import LoraConfig, get_peft_model
from transformers import (AutoModelForCausalLM, AutoTokenizer, DataCollatorForLanguageModeling, Trainer,
                          TrainingArguments)

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from talentmatch.extract import PROMPT  # noqa: E402  même prompt à l'entraînement et en production


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--model", default="mistralai/Mistral-7B-Instruct-v0.3")
    p.add_argument("--train", default=os.path.join(os.environ.get("SM_CHANNEL_TRAIN", "data"), "extraction_train.jsonl"))
    p.add_argument("--out", default=os.environ.get("SM_MODEL_DIR", "out/lora"))
    p.add_argument("--epochs", type=float, default=2)
    p.add_argument("--lr", type=float, default=2e-4)
    args = p.parse_args()

    tok = AutoTokenizer.from_pretrained(args.model)
    tok.pad_token = tok.eos_token
    model = AutoModelForCausalLM.from_pretrained(args.model, torch_dtype=torch.bfloat16, device_map="auto")
    model = get_peft_model(model, LoraConfig(r=16, lora_alpha=32, lora_dropout=0.05, task_type="CAUSAL_LM",
                                             target_modules=["q_proj", "k_proj", "v_proj", "o_proj"]))
    model.print_trainable_parameters()

    def encode(row):
        text = PROMPT.format(cv=row["cv"]) + "\n" + json.dumps(row["target"], ensure_ascii=False) + tok.eos_token
        return tok(text, truncation=True, max_length=2048)

    ds = load_dataset("json", data_files=args.train)["train"].map(encode, remove_columns=["cv", "target"])
    split = ds.train_test_split(test_size=0.1, seed=42)

    Trainer(
        model=model,
        args=TrainingArguments(output_dir=args.out, num_train_epochs=args.epochs, learning_rate=args.lr,
                               per_device_train_batch_size=2, gradient_accumulation_steps=8, bf16=True,
                               eval_strategy="epoch", logging_steps=10, save_strategy="epoch", report_to=[]),
        train_dataset=split["train"],
        eval_dataset=split["test"],
        data_collator=DataCollatorForLanguageModeling(tok, mlm=False),
    ).train()
    model.save_pretrained(args.out)
    tok.save_pretrained(args.out)


if __name__ == "__main__":
    main()
