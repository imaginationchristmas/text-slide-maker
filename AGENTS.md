# AGENTS.md — Technical Reference for Text Slide Maker

This file is the canonical reference for AI agents (and humans) working on this codebase. Read this before making changes.

## 1. Architecture Overview

**Zero-build, zero-framework static web app.** Everything runs client-side in the browser. There is no bundler, transpiler, package.json, or backend.

| Layer | File | Notes |
|---|---|---|
| Markup | `index.html` | All HTML. Loads JSZip from CDN in `<head>`, `css/style.css` in `<head>`, `js/app.js` at end of `<body>`. |
| Styles | `css/style.css` | All CSS. Theming via CSS custom properties on `:root` (dark) and `[data-theme="light"]`. |
| Logic | `js/app.js` | All JavaScript (~2,600 lines). Plain ES2020+, no modules, no imports. Everything is global. |
| Fonts | `fonts/` | Self-hosted font binaries, loaded at runtime via the FontFace API. |

**External dependency (only one):** JSZip 3.10.1 via cdnjs `<script>` tag in `index.html`. Used only for PNG ZIP export. GIF and MP4 export are implemented from scratch in `js/app.js`.

**Event wiring:** HTML uses inline `onclick` / `onchange` / `oninput` handlers that call global functions defined in `js/app.js`. When adding a UI control, follow this existing pattern (do not introduce `addEventListener` frameworks or modules).

## 2. File Map

```
index.html          Entry point. Contains: loading screen, toolbar, slides panel,
                    canvas area, controls panel, bulk-import modal, animation
                    overlay, export modal.
css/style.css       Reset, theme variables, all component styles. Class naming is
                    ad-hoc but consistent (e.g. .tb-btn, .ctrl-section, .ctrl-row).
js/app.js           Single script. Sections (top to bottom):
                      1. FONT_REGISTRY + font loading
                      2. Constants (CANVAS_SIZE, EXPORT_FORMATS, UNDO_LIMIT)
                      3. Global state
                      4. Slide/text-block factories
                      5. Rendering (canvas)
                      6. Slide management + thumbnails
                      7. UI sync (loadSlideToUI, text block CRUD)
                      8. Background controls
                      9. Canvas interaction (drag, hit-testing, bg image handles)
                     10. Undo/redo
                     11. Persistence (localStorage, JSON export/import)
                     12. Bulk import
                     13. Animation preview
                     14. Export: PNG ZIP, GIF encoder, MP4 muxer
                     15. Theme, keyboard shortcuts, init()
fonts/              One subdirectory per family. Paths are referenced relative to
                    the project root (e.g. "fonts/Alaska/AlaskaBeta-CondensedLight.otf").
design.md           Original build prompt. HISTORICAL — describes an older feature
                    set (Google Fonts, no image backgrounds, no undo/GIF/MP4).
                    Do not treat as current spec; this file (AGENTS.md) is current.
```

## 3. Data Model

All state lives in globals in `js/app.js`. The persisted project shape:

```js
// Slide
{
  bgType: 'solid' | 'gradient' | 'image',
  bg: '#5d27bf',                    // solid color
  gradFrom: '#...', gradTo: '#...', gradAngle: 135,
  bgImage: dataURL | null,          // image background as data URL
  bgImageFit: 'cover' | 'contain' | 'fill' | 'tile',
  bgImageX: 0, bgImageY: 0,         // pan offset (design px)
  bgImageScale: 100,                // percent
  texts: [TextBlock, ...]
}

// TextBlock
{
  text: 'multi\nline\nstring',
  x: 540, y: 540,                   // center position in 1080×1080 design space
  fontFamily: 'Neue Haas Display',  // key into FONT_REGISTRY
  fontWeight: '55',                 // registry weight key (string)
  fontSize: 80,                     // design px
  color: '#ffffff',
  align: 'left' | 'center' | 'right',
  lineHeight: 1.2,
  letterSpacing: 0,                 // design px
  shadow: { on: false, color: '#000000', blur: 20, x: 0, y: 4 },
  stroke: { on: false, color: '#000000', width: 2 }
}
```

**Key globals:** `slides[]`, `currentSlideIdx`, `selectedTextIdx`, `previewSize` ('square'|'portrait'|'story'), `selectedFmt` (export format), `scale` (canvas display scale), `undoStack[]` / `redoStack[]`.

**Coordinate system:** Everything is authored in a fixed 1080×1080 "design space" (`CANVAS_SIZE = 1080`). Rendering to other aspect ratios (portrait 1080×1350, story 1080×1920) re-anchors content — see `renderSlideToSize()`. Screen↔design conversion goes through `screenToDesign()`.

## 4. Key Functions (in `js/app.js`)

| Function | Purpose |
|---|---|
| `makeSlide()` / `makeTextBlock()` | Factories with defaults. Use these — never hand-construct objects. |
| `loadFonts()` | Loads every face in `FONT_REGISTRY` via FontFace API; hides loading screen when done. |
| `renderSlideToSize(slide, w, h)` | Core renderer. Draws a slide to any canvas size. Used by preview, thumbnails, and all exporters. |
| `renderTextBlock(g, tb)` | Draws one text block onto a 2D context `g`. Handles wrapping, alignment, shadow, stroke. |
| `wrapText()` | Word-wrap helper respecting explicit `\n`. |
| `renderCurrent()` | Re-renders the main canvas + schedules thumbnail update. Call after any state change. |
| `setPreviewSize(key)` | Switches square/portrait/story. |
| `pushUndo()` / `pushUndoDebounced()` | Snapshot state (JSON) before a mutation. Use the debounced variant for slider drags. |
| `restoreSnapshot()` | Undo/redo implementation. |
| `scheduleSave()` / `loadFromLocal()` | Debounced localStorage persistence (key `slideMakerProject`). |
| `exportProject()` / `importProject()` | JSON file save/load. |
| `doExport()` | PNG ZIP export (uses global `JSZip`). |
| `encodeGif()` / `doExportGif()` | Custom GIF89a encoder: median-cut palette, Floyd–Steinberg dithering, LZW. |
| `Mp4Muxer` / `doExportMp4()` | Custom ISO-BMFF (MP4) muxer + WebCodecs `VideoEncoder` (H.264). |
| `init()` | Boot: loads fonts, restores localStorage or creates default 3-slide sample, wires events. |

**Rule:** after mutating `slides` or any block, call `pushUndo()` (before the mutation), then `renderCurrent()` and `scheduleSave()` (after). Most existing update functions already follow this — copy their pattern.

## 5. Conventions & Gotchas

- **No modules.** `js/app.js` is a classic script; all functions are globals referenced by inline handlers in `index.html`. Keep it that way unless doing a deliberate, full migration.
- **Font paths** in `FONT_REGISTRY` are relative to the project root (`fonts/...`). Moving `index.html` breaks them.
- **Fonts require http(s).** `file://` blocks FontFace loads — always test via a local server.
- **Theme** is `data-theme="dark"|"light"` on `<html>`, persisted under localStorage key `sm-theme`. All colors must come from CSS variables — never hardcode hex in new CSS.
- **Undo limit** is 50 snapshots (`UNDO_LIMIT`). Snapshots are full JSON state — fine at this scale; don't add per-keystroke pushes without debouncing.
- **MP4 export** requires a browser with WebCodecs (Chrome/Edge/ Safari 16.4+). Feature-detect before enabling.
- **GIF export** is CPU-bound and synchronous-ish; keep the progress UI updates when modifying it.
- **Thumbnails** render at reduced scale on a debounce — don't call `updateThumbs()` in tight loops.
- **`.DS_Store`** and editor files are gitignored; don't commit them.

## 6. Deployment

Cloudflare Pages, served from repo root. No build command; output directory `/`. `index.html` at root is the entry point. Anything referenced must use root-relative or relative paths that resolve from root.

## 7. When Adding Features

1. State change? → add fields to `makeSlide()`/`makeTextBlock()` defaults so old saved projects deserialize safely (guard with `?? default` when reading possibly-missing fields from old saves).
2. UI control? → add markup in `index.html` with an inline handler calling a new global function in `js/app.js`; style with existing classes/CSS variables in `css/style.css`.
3. New font? → drop files under `fonts/<Family>/` and add an entry to `FONT_REGISTRY` with root-relative paths.
4. Always verify: undo/redo works, localStorage round-trips, and all three exporters still render correctly.
