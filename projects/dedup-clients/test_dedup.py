import csv
import os
import tempfile
import unittest

from dedup import group, main, normalize, siren_valid


class Dedup(unittest.TestCase):
    def test_siren_luhn(self):
        self.assertTrue(siren_valid("732 829 320"))
        self.assertTrue(siren_valid("73282932000074"))  # SIRET
        self.assertFalse(siren_valid("732829321"))
        self.assertFalse(siren_valid("1234"))

    def test_normalize_drops_accents_and_legal_forms(self):
        self.assertEqual(normalize("SARL Électricité Dupont & Fils"), "electricite dupont fils")

    def test_grouping(self):
        rows = [
            {"nom": "Boulangerie Rakoto SARL", "siren": "732829320", "code_postal": "101"},
            {"nom": "BOULANGERIE RAKOTO", "siren": "732 829 320", "code_postal": "102"},  # même SIREN
            {"nom": "Boulangerie Rakotto", "siren": "", "code_postal": "101"},  # nom proche, même CP
            {"nom": "Boulangerie Rakotto", "siren": "", "code_postal": "999"},  # autre CP : distinct
            {"nom": "Boulangerie Rakoto", "siren": "552100554", "code_postal": "101"},  # autre SIREN valide
            {"nom": "SAS Electricite Dupont", "siren": "", "code_postal": "75011"},
            {"nom": "Électricité Dupont & Fils", "siren": "", "code_postal": "75011"},  # forme juridique en plus
        ]
        r = group(rows)
        self.assertEqual([x["group_id"] for x in r], [1, 1, 1, 2, 3, 4, 4])
        self.assertEqual([x["match"] for x in r], ["", "siren", "nom", "", "", "", "nom"])
        self.assertEqual(len(r), len(rows))  # rien n'est supprimé

    def test_cli_semicolon_file(self):
        with tempfile.TemporaryDirectory() as d:
            src, dst = os.path.join(d, "in.csv"), os.path.join(d, "out.csv")
            with open(src, "w", encoding="utf-8-sig", newline="") as f:
                f.write("nom;siren;code_postal\nSAS Alpha;732829320;75001\nAlpha;732829320;75001\n")
            main([src, "-o", dst])
            with open(dst, encoding="utf-8") as f:
                out = list(csv.DictReader(f, delimiter=";"))
            self.assertEqual({r["group_id"] for r in out}, {"1"})


if __name__ == "__main__":
    unittest.main()
