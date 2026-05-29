# Stay-Sidekick — Presentación TFG

Repositorio de la **presentación de defensa del TFG** de _Stay-Sidekick_ (CFGS DAW · Sergio Durán · 2026), construida con [reveal.js](https://revealjs.com). El producto en sí vive en un repositorio aparte; este resumen lo contextualiza y la carpeta [`presentation/`](presentation/) contiene la presentación.

- 📊 **Presentación:** [`presentation/`](presentation/) — ver su propio [README](presentation/README.md) para arrancarla.
- 🌐 **Producto en producción:** [stay-sidekick.com](https://stay-sidekick.com) · espejo en [stay-sidekick.up.railway.app](https://stay-sidekick.up.railway.app)

---

## Resumen del proyecto Stay-Sidekick

**Stay-Sidekick** es una plataforma web full-stack **multiempresa** para equipos de alojamiento turístico que funciona como **capa satélite** sobre los PMS existentes (Smoobu, Beds24, KrossBooking…). No sustituye al PMS: cubre las tareas operativas del día a día que estos no resuelven de forma suficiente, y se adapta a la operativa concreta de cada empresa.

Reúne en un mismo stack tres capas servidas por un único Nginx:

- una **landing pública** en 11ty (`/`),
- un **panel privado** en Angular 21 (`/menu`),
- y una **API REST** en Flask (`/api`).

### Origen

El proyecto nace de **2 años y 5 meses** como recepcionista en una gestora de pisos turísticos: el inicio y el final de cada jornada se consumían saltando entre el PMS, Google y Excel. De ese diagnóstico salieron primero un prototipo en **JavaFX** y luego una versión **MERN** (aún en uso real en la empresa). Stay-Sidekick es la tercera iteración, ya como sistema serio y multi-tenant.

### Funcionalidades clave

- **Maestro de apartamentos** — CRUD del inventario por empresa.
- **Mapa de calor operativo** — vista del día a partir de un XLSX, sin persistir datos de huéspedes.
- **Notificaciones de check-in tardío.**
- **Sincronizador de contactos con Google.**
- **Vault de comunicaciones** asistido por IA (plantillas de mensajes).
- **Multiempresa, usuarios y roles** con aislamiento por `empresa_id`.

### Stack técnico

| Área | Tecnología |
|------|------------|
| Sitio público | 11ty + Nunjucks + Sass |
| Aplicación | Angular 21 (signals, guards, tipado fuerte) |
| Backend | Flask + Gunicorn + PostgreSQL 16 |
| Infraestructura | Docker Compose · Railway · Nginx |
| Calidad | GitHub Actions · Ruff · Pytest · Vitest · Trivy |

Los estilos SCSS son **compartidos** entre `web/` y `frontend/`: ambos compilan desde `frontend/src/styles/` con arquitectura **ITCSS** + nomenclatura **BEM** (la misma que reutiliza esta presentación).

### Arquitectura

Cinco contenedores en una red Docker privada (`app-net`); solo Nginx expone el `:80` al host:

```
Cliente ──HTTP :80──▶ nginx ──/api/*──▶ backend (Flask+Gunicorn) ──SQL──▶ postgres (PG16)
                         ├──/menu/*──▶ frontend (Angular + nginx interno)
                         └──/*──────▶ web (11ty + nginx interno)
```

En **Railway** se usa una variante de la config de Nginx que resuelve los hostnames internos `.railway.internal` con TTL bajo para evitar IPs caducadas tras redespliegues; TLS lo termina Railway en el _edge_.

### Seguridad y calidad

- Arquitectura **multi-tenant** real con aislamiento por `empresa_id` en todas las queries.
- Seguridad por capas: **JWT HS256**, **CSRF double-submit cookie**, BCrypt, rate limiting, CORS por orígenes.
- **RGPD por diseño**: los datos de huéspedes se procesan en memoria y nunca se persisten; las API keys se guardan cifradas con **Fernet**.
- Validación/sanitización de entrada con **Marshmallow** + `nh3` (sanitiza antes de validar).
- **92 tests** de backend (pytest) · **297 tests** de frontend (Vitest) · umbral ≥ 90 % de cobertura en la SPA.
- CI/CD con **6 workflows** de GitHub Actions (lint, tests, build, publicación condicional en Docker Hub) + auditoría **Trivy** semanal.
- Cumplimiento: **WCAG 2.1 AA**, RGPD, LSSI-CE.

> Este resumen es una síntesis para la defensa; el README completo, exhaustivo, vive en el repositorio del producto.
