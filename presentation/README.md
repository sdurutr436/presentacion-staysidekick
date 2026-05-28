# Presentación TFG — Stay-Sidekick

Presentación de **5 minutos** del TFG _Stay-Sidekick_ (CFGS DAW · Sergio Durán), construida con [reveal.js](https://revealjs.com) **vía CDN** (sin instalación local).

- `index.html` — presentación completa (20 slides, CSS y JS embebidos o vía CDN).
- `OUTLINE.md` — guion editorial: slide-a-slide, pilares cubiertos, tiempos.

> **Duración estimada:** ~5 minutos a ritmo de ~15-18 s por slide. Las _speaker notes_ (visibles con `S`) totalizan ~700 palabras.

## Ver la presentación en local

Como `index.html` referencia CDNs, basta con servirla desde cualquier servidor estático (no funciona con `file://` por las reglas CORS de los scripts).

### Opción A — Python (recomendado, viene preinstalado)

```bash
cd presentation
python -m http.server 8000
```

Y abrir [http://localhost:8000](http://localhost:8000).

### Opción B — Node (si tienes `npx` disponible)

```bash
cd presentation
npx --yes http-server -p 8000 -c-1
```

### Opción C — Extensión _Live Server_ de VS Code

Clic derecho sobre `index.html` → _Open with Live Server_.

## Atajos de teclado útiles

| Tecla | Acción |
|------|--------|
| `→` / `Space` | Siguiente slide |
| `←` | Slide anterior |
| `S` | Abre la ventana de _speaker notes_ (guion) |
| `F` | Pantalla completa |
| `O` / `ESC` | Vista general (grid de todos los slides) |
| `B` | Pantalla en negro (pausa visual) |
| `?` | Lista completa de atajos |

La barra de progreso inferior y el contador `c/t` están activados.

## Desplegar en GitHub Pages

1. **Empujar la rama** (ya hecho si has clonado este repo):
   ```bash
   git push -u origin feat/tfg-presentation
   ```
2. **Fusionar a `main`** (o configurar Pages contra cualquier rama).
3. En GitHub → _Settings_ → _Pages_:
   - **Source:** `Deploy from a branch`.
   - **Branch:** `main` (o la rama deseada) · **Folder:** `/ (root)`.
4. Tras el primer despliegue, la presentación queda disponible en:
   ```
   https://<usuario>.github.io/<repo>/presentation/
   ```
   Para este repositorio: `https://sdurutr436.github.io/presentacion-staysidekick/presentation/`.

> Si prefieres servir la presentación en la raíz del sitio en lugar de `/presentation/`, mueve `index.html` un nivel arriba o configura un `index.html` en la raíz que redirija a `/presentation/`.

### Despliegue alternativo en Netlify / Vercel / Cloudflare Pages

Cualquier servicio de _static hosting_ sirve. Apunta la raíz de publicación a la carpeta `presentation/`.

## Estructura

```
presentation/
├── index.html      # Presentación (HTML + CSS embebido + reveal.js vía CDN)
├── OUTLINE.md      # Guion: orden de slides, pilares, tiempos
└── README.md       # Este fichero
```

## Notas técnicas

- **reveal.js 5.1.0** servido desde `cdn.jsdelivr.net`.
- Plugins activos: `RevealHighlight` (resaltado de código con Monokai) y `RevealNotes` (vista de presentador con `S`).
- Tipografía **Archivo** (la misma del producto real) cargada desde Google Fonts.
- Tema oscuro personalizado sobre `night.css` con el acento ámbar de Stay-Sidekick.
- **Sin** `localStorage`: cumple el requisito de portabilidad en entornos restringidos.
