# Text Slide Maker

A browser-based tool for designing text slides and exporting them as PNG (ZIP), animated GIF, or MP4 — built for social media formats (Instagram post, portrait, story).

No build step, no framework, no backend. Open `index.html` and it works.

## Features

- **Multi-slide editor** — add, duplicate, reorder (drag), and delete slides
- **Text blocks** — multiple per slide, drag to position; per-block font / weight / style / size / color / opacity / alignment / line-height / letter-spacing, uppercase toggle, and adjustable text-box width
- **Backgrounds** — solid color (with an eyedropper that samples straight from the canvas), two-color gradient (with presets and angle control), or one or more image layers (pan / zoom / corner- and edge-resize; cover / contain / fill / tile fit modes)
- **Multi-select** — select and drag multiple text blocks and image layers together as a group
- **Text effects** — drop shadow and outline stroke, per block
- **Fonts** — self-hosted families (Alaska Beta, Apfel Grotezk, IBM Plex Mono/Sans, Neue Haas Display, Proxima Nova) plus a curated Google Fonts catalog loaded on-demand from Google's CDN, browsable through a categorized popover picker (Sans / Serif / Display / Handwriting / Mono)
- **Undo / redo** — 50-step history (Ctrl/Cmd+Z, Ctrl/Cmd+Shift+Z)
- **Auto-save** — project persists to `localStorage`; explicit JSON save/load too
- **Bulk import** — paste text separated by `---` lines to generate slides
- **Animation preview** — preview slide transitions in-browser
- **Export** — PNG ZIP (via JSZip), animated GIF (custom encoder), MP4 (WebCodecs + custom muxer)
- **Formats** — square 1080×1080, portrait 1080×1350, story 1080×1920
- **Skins & themes** — Modern or DOS-86 interface skin, each available in dark or light mode

## Running locally

Fonts are loaded via the [FontFace API](https://developer.mozilla.org/en-US/docs/Web/API/FontFace), which requires a network fetch — so opening the file directly with `file://` won't load them. Use a local server instead:

```sh
# any static server works, e.g.
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:8000 (or whatever port the server reports).

> **Note:** Self-hosted fonts work offline once cached, but Google Fonts require an internet connection at runtime. If a Google font can't load, the text falls back to `sans-serif` and a warning is logged; local fonts are unaffected.

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
│   └── style.css     # All styles (skins + dark/light themes via CSS variables)
├── js/
│   └── app.js        # All application logic (no dependencies except JSZip CDN)
├── fonts/            # Self-hosted font files referenced by FONT_REGISTRY
├── plans/            # Design/planning notes for features (e.g. Google Fonts picker)
├── design.md         # Original build spec (historical reference)
└── AGENTS.md         # Technical reference for AI agents / future development
```

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl/Cmd+Z` | Undo |
| `Ctrl/Cmd+Shift+Z` | Redo |
| `Delete` / `Backspace` | Delete selected item(s), or the current slide if nothing is selected |
| `←` / `↑` | Previous slide |
| `→` / `↓` | Next slide |
| `D` | Duplicate current slide |
| `N` | Add a new slide |
| `Escape` | Deselect / close modal / cancel eyedropper |

## Data

- Projects auto-save to `localStorage` under the key `slideMakerProject`
- Interface skin is stored under `sm-skin`; dark/light mode under `sm-theme`
- Save/Load buttons export/import the full project as JSON
