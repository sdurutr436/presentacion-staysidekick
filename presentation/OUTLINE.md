# Outline — Presentación TFG Stay-Sidekick

Duración objetivo: **5 min** · Ritmo: ~15-18 s por slide · Total palabras habladas ≈ 700.
Cobertura obligatoria: (1) Origen, (2) Frontend, (3) Diseño UI, (4) Backend, (5) DevOps.

| # | Slide | Contenido clave | Pilar | Tiempo |
|---|-------|-----------------|-------|--------|
| 1 | Portada | Stay-Sidekick · TFG DAW · Sergio Durán | — | 10 s |
| 2 | ¿Por qué Stay-Sidekick? | 2 a 5 m de recepcionista · fricción diaria PMS+Excel+Google | 1 | 25 s |
| 3 | Evolución del proyecto | JavaFX → MERN (en producción real) → Stay-Sidekick | 1 | 20 s |
| 4 | Capa satélite | NO sustituye al PMS · multi-tenant · stay-sidekick.com | 1 | 15 s |
| 5 | Stack en una pantalla | 11ty / Angular 21 / Flask / Postgres / Nginx | — | 15 s |
| 6 | Frontend dual: por qué Angular + 11ty | SPA privada vs. landing estática · cada herramienta a lo suyo | 2 | 25 s |
| 7 | SCSS compartido | ITCSS + BEM, una fuente de verdad entre Angular y 11ty | 2 | 15 s |
| 8 | El theme switch (1/2) | Signal Angular · clase `.dark` + `data-theme` | 2 | 20 s |
| 9 | El theme switch (2/2) | Sincronización Angular ↔ 11ty vía evento `storage` | 2 | 20 s |
| 10 | Diseño UI — sistema acromático | gris + acento ámbar · paneles densos · Archivo variable | 3 | 20 s |
| 11 | Diseño UI — accesibilidad | WCAG 2.1 AA · WAVE + Lighthouse · grid 4 px | 3 | 15 s |
| 12 | Backend Flask | blueprints modulares · multi-tenant por `empresa_id` | 4 | 20 s |
| 13 | El "patrón DTO" en Flask | Marshmallow Schemas con `@pre_load` · sanitiza ANTES de validar | 4 | 25 s |
| 14 | Curiosidad backend | API keys cifradas Fernet · huéspedes NUNCA persisten (RGPD) | 4 | 20 s |
| 15 | DevOps — arquitectura Docker | diagrama ASCII · una sola puerta (80) · red `app-net` | 5 | 20 s |
| 16 | DevOps — los dos Nginx | proxy externo + nginx interno en cada contenedor estático | 5 | 25 s |
| 17 | DevOps — CSP estricta con 11ty | hashes `sha256-...` de scripts inline · debugging real | 5 | 25 s |
| 18 | DevOps — Railway | resolver IPv6 TTL 1 s · TLS en el edge | 5 | 15 s |
| 19 | Calidad | 92 tests pytest · 297 tests Vitest · cobertura ≥90 % · CI 6 workflows | — | 15 s |
| 20 | Cierre | Recap + gracias + URL pública | — | 10 s |

Total: **5 min** clavados.
