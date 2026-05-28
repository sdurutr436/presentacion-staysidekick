# Outline — Presentación TFG Stay-Sidekick

Duración objetivo: **5 min** · Ritmo: ~15-18 s por slide · Speaker notes ≈ 700 palabras.
Cobertura obligatoria: (1) Origen, (2) Frontend, (3) Diseño UI, (4) Backend, (5) DevOps + transición a demo.

## Estructura — navegación 2D

Los **pilares** son stacks verticales: la flecha derecha (`→`) avanza al siguiente pilar; la flecha abajo (`↓`) recorre las sub-diapositivas del pilar actual. El kicker de cada slide indica su posición (`Frontend · 2/4 ↓`).

| # | Pilar / Slide | Navegación | Contenido clave | Tiempo |
|---|---------------|:----------:|-----------------|:------:|
| 1 | Portada | — | Stay-Sidekick · TFG DAW · Sergio Durán | 10 s |
| 2 | **Origen** 1/3 | ↓ | 2 a 5 m de recepcionista · fricción diaria | 25 s |
| 3 | Origen 2/3 | ↓ | JavaFX → MERN (en producción real) → Stay-Sidekick | 20 s |
| 4 | Origen 3/3 | → | Capa satélite · NO sustituye al PMS · multi-tenant | 15 s |
| 5 | Stack | → | **Diagrama mermaid** de los 5 contenedores (mismo del README) | 20 s |
| 6 | **Frontend** 1/4 | ↓ | Angular para `/menu` · 11ty para `/` · justificación | 25 s |
| 7 | Frontend 2/4 | ↓ | SCSS compartido · ITCSS + BEM | 15 s |
| 8 | Frontend 3/4 | ↓ | Theme switch · signal Angular + clase `.dark` | 20 s |
| 9 | Frontend 4/4 | → | Sincronización Angular ↔ 11ty vía evento `storage` | 20 s |
| 10 | **Diseño UI** 1/2 | ↓ | Sistema acromático + acento ámbar · Archivo variable | 20 s |
| 11 | Diseño UI 2/2 | → | WCAG 2.1 AA · WAVE + Lighthouse · grid 4 px | 15 s |
| 12 | **Backend** 1/3 | ↓ | Flask blueprints · multi-tenant por `empresa_id` | 20 s |
| 13 | Backend 2/3 | ↓ | "DTO" con Marshmallow + `@pre_load` (sanitiza antes de validar) | 25 s |
| 14 | Backend 3/3 | → | Huéspedes en memoria · Fernet para API keys · RGPD by design | 20 s |
| 15 | **DevOps** 1/3 | ↓ | Los **dos** Nginx: proxy externo + nginx interno por contenedor | 25 s |
| 16 | DevOps 2/3 | ↓ | CSP estricta con hashes `sha256-...` para scripts inline del 11ty | 25 s |
| 17 | DevOps 3/3 | → | Railway: resolver IPv6 TTL 1 s · TLS en el edge | 15 s |
| 18 | Calidad | → | 92 tests pytest · 297 tests Vitest · ≥90 % cobertura · 6 workflows | 15 s |
| 19 | **Pasamos a la demo técnica** | — | Login · theme switch en vivo · mapa de calor · vault IA | 15 s |

Total: **5 min** clavados.

## Notas

- **Paleta**: importada literalmente de `frontend/src/styles/settings/_css-variables.scss` (modo oscuro · `#2B2B2B` / `#333333` / `#212121` / borde `#4F4F4F` / acento ámbar fijo `#EFE3BC` con foreground `#5D423A`).
- **Mermaid**: temizado para usar el mismo acento ámbar como nodo destacado (Nginx, el "hub").
- El slide 19 marca explícitamente la transición a la **demo técnica en vivo** sobre stay-sidekick.com; no se cierra con "Gracias" porque eso queda para después de la demo.
