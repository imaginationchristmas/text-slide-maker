# Text Slide Maker

A browser-based tool for designing text slides and exporting them as PNG (ZIP), animated GIF, or MP4 — built for social media formats (Instagram post, portrait, story).

No build step, no framework, no backend. Open `index.html` and it works.

## Features

- **Multi-slide editor** — add, duplicate, reorder (drag), and delete slides
- **Text blocks** — multiple per slide, drag to position, per-block font / size / weight / color / alignment / line-height / letter-spacing
- **Backgrounds** — solid color, two-color gradient (with presets), or image (pan / zoom / corner-resize, cover / contain / fill / tile modes)
- **Text effects** — drop shadow and outline stroke, per block
- **Self-hosted fonts** — Alaska Beta, Apfel Grotezk, IBM Plex Mono/Sans, Neue Haas Display, Proxima Nova
- **Undo / redo** — 50-step history (Ctrl/Cmd+Z, Ctrl/Cmd+Shift+Z)
- **Auto-save** — project persists to `localStorage`; explicit JSON save/load too
- **Bulk import** — paste text separated by `---` lines to generate slides
- **Animation preview** — preview slide transitions in-browser
- **Export** — PNG ZIP (via JSZip), animated GIF (custom encoder), MP4 (WebCodecs + custom muxer)
- **Formats** — square 1080×1080, portrait 1080×1350, story 1080×1920
- **Dark / light theme**

## Running locally

Because fonts are loaded via `fetch`, you need a local server (opening the file directly with `file://` won't load fonts):

```sh
# any static server works, e.g.
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:8000 (or whatever port the server reports).

## Deployment (Cloudflare Pages)

This repo is structured for Cloudflare Pages, which serves static files from the repository root:

- **Build command:** *(none)*
- **Build output directory:** `/`

`index.html` at the root is the entry point.

## Project structure

```
text-slide-maker/
├── index.html        # App markup; loads css/style.css and js/app.js
├── css/
│   └── style.css     # All styles (dark/light themes via CSS variables)
├── js/
│   └── app.js        # All application logic (no dependencies except JSZip CDN)
├── fonts/            # Self-hosted font files referenced by FONT_REGISTRY
├── icons/            # (reserved)
├── design.md         # Original build spec (historical reference)
└── AGENTS.md         # Technical reference for AI agents / future development
```

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl/Cmd+Z` | Undo |
| `Ctrl/Cmd+Shift+Z` | Redo |
| `Delete` / `Backspace` | Delete selected text block |
| Arrow keys | Nudge selected text block (Shift = ×10) |
| `Escape` | Deselect / close modal |

## Data

- Projects auto-save to `localStorage` under the key `slideMakerProject`
- Theme preference is stored under `sm-theme`
- Save/Load buttons export/import the full project as JSON
