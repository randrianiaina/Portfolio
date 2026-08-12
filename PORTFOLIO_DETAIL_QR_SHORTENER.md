# Fiche Technique : Générateur QR Code & URL Court — Service Stateless Privacy-First (Node.js / Go)

## Le Challenge Technique
Fournir un service **gratuit, sans tracking, sans compte utilisateur** pour générer des QR codes personnalisables et raccourcir des URLs, avec une architecture **stateless** scalable à coût quasi-nul. Réponse aux enjeux RGPD : aucune donnée personnelle stockée, pas de cookies, pas d'analytics tiers.

## Stack Technique
*   **API Core** : **Go 1.22+** (performance, concurrence native, binaire unique ~15MB) ou **Node.js 20+** (Fastify) pour développement rapide.
*   **Cache / Stockage Court Terme** : **Redis** (TTL configurable, éviction LRU, cluster mode pour HA).
*   **Génération QR** : Bibliothèque **go-qrcode** / **qrcode** (Node) — support : Logo central, couleurs personnalisées, gradient, niveau de correction (L/M/Q/H), tailles 128px–2048px, formats PNG/SVG/WebP.
*   **Raccourcissement URL** : Algorithme **Base62** (clé courte 6-8 chars, collision-resistant), expiration optionnelle (1h → 1an / jamais), redirection 301/302.
*   **Déploiement** : **Docker** (multi-stage build, distroless), **Fly.io / Railway / Cloudflare Workers** (edge, latence <50ms global), **GitHub Actions** CI/CD.
*   **Observabilité** : **Prometheus** metrics (req/s, latency p50/p99, cache hit ratio), **Grafana** dashboards.

## Fonctionnalités
| Fonction | Détail |
|----------|--------|
| **QR Code** | Data: URL, Texte, vCard, WiFi, Email, SMS, Geo, Bitcoin. Personnalisation: Logo (upload/URL), Couleurs (dégradé radial/linéaire), "Quiet zone", Eyes style (carré, arrondi, point). |
| **URL Court** | Slug auto (base62) ou custom (vérif dispo), TTL paramétrable, redirection 301 (SEO) ou 302, preview page optionnelle (meta og:title, og:image). |
| **API REST** | `POST /api/qr`, `POST /api/shorten`, `GET /:slug` (redirect), `GET /api/stats/:slug` (compteur hits anonymisé, last access). Rate limiting par IP (token bucket). |
| **Privacy** | **Zéro log IP** (ou hashé + sel journalier), **zéro cookie**, **zéro tracker**. Conforme RGPD Art. 25 (Privacy by Design). |

## Impact Métier / Technique
*   **Coût infra** : < 5€/mois pour 100k requêtes/jour (Fly.io free tier + Redis managé).
*   **Latence** : P99 < 30ms (edge), génération QR < 10ms (Go) / < 50ms (Node).
*   **Disponibilité** : 99.99% (stateless = redémarrage instantané, pas de migration DB).
*   **Adoption** : Utilisé en interne pour campagnes marketing, documentation technique, badges conférence, cartes de visite numériques.