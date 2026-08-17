# Google Fonts — On-Demand CDN + Categorized Popover Picker

## Goal
Let users pick from a curated set of Google Fonts, grouped by category, with a
popover picker where each font name renders in its own typeface. Fonts load
on-demand from Google's CDN (no binaries in the repo). Existing self-hosted
fonts keep working unchanged.

## Key insight (why this is clean)
`renderTextBlock()` already sets `g.font = "<weight> <size>px '<family>'"` and
the canvas resolves `<family>` against `document.fonts`. So a Google font only
needs to be **registered into `document.fonts` under its family name** and the
entire render/export pipeline works untouched. The feature = registry + lazy
loader + picker UI.

## Decisions (locked)
- **Source:** on-demand from Google Fonts CSS API (`fonts.googleapis.com/css2`),
  loaded lazily. Requires internet at runtime.
- **UI:** popover picker replacing the `font-family` `<select>`. Category tabs
  (Sans / Serif / Display / Handwriting / Monospace) + scrollable list, each
  item rendered in its own typeface (lazy via IntersectionObserver).

## Data model
Add a parallel `GOOGLE_FONT_REGISTRY` (metadata only, no files):
```
{ family: 'Inter', category: 'sans', weights: [100..900], variable: true }
{ family: 'Playfair Display', category: 'serif', weights: [400,500,..,900] }
```
- `category` ∈ sans | serif | display | handwriting | monospace.
- `weights` = the weights Google serves for that family (drives the weight
  `<select>` so we never request a weight that 404s).
- Keep existing `FONT_REGISTRY` (self-hosted) as its own "Local" group shown
  first in the picker.

## Lazy loading
`ensureGoogleFont(family, weight, style)`:
- Build a css2 URL: `https://fonts.googleapis.com/css2?family=<enc>:ital,wght@<...>&display=swap`.
- Inject a `<link>` once per family (track in a `Set`). Then `document.fonts.load()`
  the specific face and await it before re-rendering.
- Cache loaded families so repeat selects are instant.
- On select: `await ensureGoogleFont(...)`, then `updateTextBlock()` + `renderCurrent()`.

## Picker UI
- Replace `<select id="font-family">` with a button showing the current family
  name (rendered in that font). Clicking opens `#font-picker` popover anchored
  to the Font section.
- Popover: category tab bar + list. Each list row = family name styled
  `font-family: '<name>'`. IntersectionObserver loads a row's font only when it
  scrolls into view (so we don't fetch 100 fonts up front).
- Clicking a row: set family, rebuild weight select from that family's
  `weights`, close popover, apply.
- Keep `font-weight` and `font-style` selects; populate weights from the
  chosen family's `weights` array (Google) or `variants` (local).

## Persistence / back-compat
- `tb.fontFamily` already stores the family string — Google families serialize
  the same way. On project load, if a family isn't in the local registry, treat
  it as Google and `ensureGoogleFont` it before first render.
- Guard old saves with `?? default` as per AGENTS.md.

## Files touched
- `js/app.js`: `GOOGLE_FONT_REGISTRY`, `ensureGoogleFont()`, picker open/close/
  render/observers, rework `onFontFamilyChange`/`buildFontWeightSelect` to read
  from either registry, hook into `init()` and project-load path.
- `index.html`: swap the family `<select>` for a picker trigger button + add
  `#font-picker` popover markup.
- `css/style.css`: popover, category tabs, list rows, active states (use CSS
  vars; add DOS-skin override).

## Risks / mitigations
- **Offline:** Google fonts won't load → fall back to `sans-serif` render and a
  console warning; local fonts unaffected. (Accepted per decision.)
- **Weight 404s:** only request weights listed in the family's `weights` array.
- **First-render flash:** await the face before `renderCurrent()` on select and
  on project load.
- **Export:** exporters call `renderSlideToSize()` which uses the same
  `document.fonts` — as long as the face is loaded before export, PNG/GIF/MP4
  render correctly. Ensure export awaits any pending font loads.

## Verification
- Pick a Google font per category; confirm canvas + thumbnails update.
- Weight/italic selects reflect the chosen family.
- Reload (localStorage) and re-import JSON with a Google font → renders after
  lazy load.
- Export PNG/GIF/MP4 with a Google font applied.
- Local fonts still work; undo/redo unaffected.
