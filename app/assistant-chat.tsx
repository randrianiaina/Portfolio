"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Locale } from "./translations";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

type ConversationMessage = Pick<ChatMessage, "role" | "text">;

type AssistantChatProps = {
  locale: Locale;
  labels: {
    open: string;
    close: string;
    title: string;
    introduction: string;
    privacy: string;
    placeholder: string;
    send: string;
    thinking: string;
    error: string;
    contact: string;
    whatsapp: string;
    email: string;
  };
};

export default function AssistantChat({
  locale,
  labels,
}: AssistantChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const nextMessageId = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => launcherRef.current?.focus());
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  function closeChat() {
    setIsOpen(false);
    window.requestAnimationFrame(() => launcherRef.current?.focus());
  }

  function getRecentConversation(): ConversationMessage[] {
    const lastCompleteReply = messages.findLastIndex(
      (message) => message.role === "assistant",
    );
    if (lastCompleteReply < 0) return [];

    const recent = messages.slice(Math.max(0, lastCompleteReply - 5), lastCompleteReply + 1);
    return recent[0]?.role === "assistant" ? recent.slice(1) : recent;
  }

  async function sendQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = question.trim();
    if (!message || isSending) return;

    setHasError(false);
    setIsSending(true);
    setQuestion("");
    setMessages((current) => [
      ...current,
      { id: nextMessageId.current++, role: "user", text: message },
    ]);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          locale,
          history: getRecentConversation(),
        }),
      });
      const result: unknown = await response.json();
      const reply =
        typeof result === "object" &&
        result !== null &&
        "reply" in result &&
        typeof result.reply === "string"
          ? result.reply
          : null;
      if (
        !response.ok ||
        reply === null
      ) {
        throw new Error(`Assistant request failed (${response.status}).`);
      }
      setMessages((current) => [
        ...current,
        {
          id: nextMessageId.current++,
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error("Unable to get a portfolio assistant reply.", error);
      setHasError(true);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="assistant-chat">
      {isOpen && (
        <section
          aria-label={labels.title}
          className="assistant-panel"
          id="portfolio-assistant"
          role="dialog"
        >
          <div className="assistant-header">
            <div>
              <p>{labels.title}</p>
              <span>{locale === "fr" ? "Herizo · Assistant IA" : "Herizo · AI assistant"}</span>
            </div>
            <button
              aria-label={labels.close}
              className="assistant-close"
              onClick={closeChat}
              type="button"
            >
              ×
            </button>
          </div>
          <div aria-live="polite" className="assistant-messages" role="log">
            <p className="assistant-message assistant-reply">
              {labels.introduction}
            </p>
            <p className="assistant-privacy">{labels.privacy}</p>
            {messages.map((message) => (
              <p
                className={`assistant-message assistant-${message.role}`}
                key={message.id}
              >
                {message.text}
              </p>
            ))}
            {isSending && (
              <p className="assistant-message assistant-reply" role="status">
                {labels.thinking}
              </p>
            )}
            {hasError && (
              <p className="assistant-error" role="alert">
                {labels.error}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="assistant-form" onSubmit={sendQuestion}>
            <label className="visually-hidden" htmlFor="assistant-question">
              {labels.placeholder}
            </label>
            <textarea
              autoFocus
              id="assistant-question"
              maxLength={1000}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder={labels.placeholder}
              required
              rows={2}
              value={question}
            />
            <button
              disabled={isSending || !question.trim()}
              type="submit"
            >
              {isSending ? labels.thinking : labels.send}
            </button>
          </form>
          <div className="assistant-contact">
            <span>{labels.contact}</span>
            <a
              href="https://wa.me/261326844949"
              rel="noopener noreferrer"
              target="_blank"
            >
              {labels.whatsapp}
            </a>
            <a href="mailto:menja.herizo@gmail.com">{labels.email}</a>
          </div>
        </section>
      )}
      <button
        aria-controls="portfolio-assistant"
        aria-expanded={isOpen}
        className="assistant-launcher"
        onClick={() => (isOpen ? closeChat() : setIsOpen(true))}
        ref={launcherRef}
        type="button"
      >
        {isOpen ? labels.close : labels.open}
      </button>
    </div>
  );
}
