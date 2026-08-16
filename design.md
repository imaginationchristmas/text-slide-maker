# Slide Maker — Agent Build Prompt

Build a self-contained single-file HTML application called **Slide Maker** — a text-based slide creation tool optimised for Instagram content. No frameworks, no build step, no dependencies beyond Google Fonts. Everything lives in one `.html` file.

---

## Visual Design

- Dark theme throughout. Background `#0f0f0f`, panels `#161616`, secondary panels `#1c1c1c`.
- Accent colour: `#c8ff00` (yellow-green). Secondary accent: `#7c4dff` (purple).
- Text: `#e8e8e8` primary, `#888` secondary, `#555` tertiary.
- Borders: `rgba(255,255,255,0.08)` default, `rgba(255,255,255,0.14)` emphasis.
- Font: `DM Sans` for UI chrome. `Syne` (weight 800) for the app logo/title only.
- The canvas area background uses a repeating checkerboard pattern (`repeating-conic-gradient`) to show transparency.

---

## Layout

Three-column layout filling the full viewport height with no scroll:

```
[ Toolbar — full width, 52px tall ]
[ Slides Panel | Canvas Area | Controls Panel ]
```

- **Slides panel** (left): 280px wide, fixed. Scrollable slide thumbnail list.
- **Canvas area** (centre): flex-grows to fill remaining space.
- **Controls panel** (right): 280px wide, fixed. Scrollable.

---

## Toolbar

Horizontally laid out, 52px tall, dark panel background. Contains left to right:

- App title: `SLIDES` in Syne 800, accent colour
- Separator (1px vertical line)
- `+ New Slide` button
- `Duplicate` button
- `✍ Write Slides` button (purple-tinted border, purple text) — opens the Bulk Import modal
- Separator
- `▶ Preview` button — opens the Animation Preview overlay
- `↓ Export PNGs` button — primary style (accent background, black text) — opens Export modal
- Slide count label, pushed to the far right via `margin-left: auto`

---

## Slides Panel (Left)

- Header row with "SLIDES" label (uppercase, muted) and a `+` button to add a slide.
- Scrollable list of slide thumbnails below.
- Each thumbnail is a square `<canvas>` element rendered at full 1080×1080 resolution, scaled down via CSS.
- Active slide has an accent-coloured border.
- On hover, a small `✕` delete button appears top-right of the thumbnail.
- Clicking a thumbnail selects that slide and updates the main canvas and controls.
- Slide number badge shows bottom-left of each thumbnail.

---

## Canvas Area (Centre)

### Size Switcher Bar

Sits above the canvas. Three toggle buttons side by side:

| Button | Ratio | Dimensions |
|--------|-------|------------|
| Square | 1:1 | 1080 × 1080 |
| Portrait | 4:5 | 1080 × 1350 |
| Story | 9:16 | 1080 × 1920 |

Each button shows a small aspect-ratio rectangle icon, the format name, and the pixel dimensions. The active button gets an accent border and background tint.

Switching size:
- Resizes the `<canvas>` element's `width` and `height` attributes to the new dimensions.
- Recalculates `scale` so the canvas fits within the available area.
- Re-renders the current slide using the size-aware renderer (see Rendering section).
- Updates the Animation Preview to match.
- Pre-selects the matching format in the Export modal.

### Canvas Element

- Internal resolution matches the selected format (1080×1080, 1080×1350, or 1080×1920).
- Displayed size is scaled down to fit the available canvas area (padding 20px sides, accounting for the size bar ~46px and label ~28px).
- A transparent `<div id="canvas-overlay">` sits absolutely on top and handles mouse events (drag/click) so the canvas itself is not directly interactive.
- A small label below the canvas shows the current pixel dimensions and format name.

### Text Block Dragging

- Clicking on the canvas overlay hit-tests all text blocks (reverse order, topmost first).
- Hit area for each block: `x - 10` to `x + width + 10` horizontally, `y - 10` to `y + estimated_height` vertically.
- On hit: select that text block, enter drag mode. Track offset from block origin to click point.
- On `mousemove` (window-level): update `tb.x` and `tb.y`, update position inputs in the controls panel, re-render.
- On `mouseup` (window-level): end drag.
- **Coordinate conversion**: mouse position must be converted from screen pixels → canvas display pixels (divide by `scale`) → design space (1080×1080). For non-square formats, account for the vertical offset added by the size-aware renderer.

---

## Controls Panel (Right)

Scrollable. Divided into collapsible-style sections separated by borders.

### Background Section

Two tabs: **Solid** and **Gradient**.

**Solid mode:**
- `<input type="color">` colour picker.
- Grid of 12 preset colour swatches (blacks, whites, deep navies, dark reds, dark greens, etc.). Clicking a swatch sets the background colour immediately.

**Gradient mode:**
- Two colour pickers side by side: "From" and "To".
- Angle range slider (0–360°) with a live readout label.
- 8 gradient preset swatches (rendered as actual CSS gradients): Night Rose, Deep Blue, Gold Dust, Obsidian, Ocean, Violet, Sunrise, Sunset.

**Apply to all:** a full-width button that copies the current slide's background settings to every other slide.

---

### Text Blocks Section

- List of text block items for the current slide. Each item shows the block number and a truncated text preview. Clicking selects it. A `✕` button deletes it.
- `+ Add Text Block` button (dashed border style) creates a new block with defaults.

---

### Text Content Section *(visible only when a text block is selected)*

- `<textarea>` for the block's text content. Multiline. Updates live on `input`.

---

### Font Section *(visible only when a text block is selected)*

- **Font family** `<select>` with 12 options loaded from Google Fonts:
  - Playfair Display, DM Serif Display, Cormorant Garamond, Fraunces, Bodoni Moda, Libre Baskerville (serif)
  - Bebas Neue, Josefin Sans, Space Grotesk, Syne, Outfit, DM Sans (sans-serif)
- **Size**: range slider (10–200) with a synced number input beside it.
- **Weight**: select — Thin 200, Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700.
- **Style**: select — Normal, Italic.
- **Leading** (line height): range slider (0.8–2.5, step 0.05) with live decimal readout.
- **Tracking** (letter spacing): range slider (-10 to 40, step 0.5) with live decimal readout.

All controls update the text block and re-render on every `input`/`change`.

---

### Text Color Section *(visible only when a text block is selected)*

- `<input type="color">` picker.
- Opacity range slider (0–100%) with live percentage readout.
- Grid of 12 preset text colour swatches (white, cream, black, charcoal, accent yellow-green, gold, coral, teal, mint, pink, lavender, cyan).

---

### Alignment Section *(visible only when a text block is selected)*

Three toggle buttons: **L** (left), **C** (centre), **R** (right). Active button gets accent styling.

---

### Position Section *(visible only when a text block is selected)*

- Two-column grid of number inputs: X, Y, Width (all in 1080-space pixels).
- Six snap buttons in a wrapping flex row:
  - `⟵ Left` — snap x to left margin (80px)
  - `↔ H Center` — horizontally centre the block
  - `Right ⟶` — snap to right margin
  - `↑ Top` — snap y to top margin (80px)
  - `↕ V Center` — vertically centre the block
  - `↓ Bottom` — snap to bottom margin
- **Apply text format to all slides**: copies font, size, weight, style, colour, opacity, line height, letter spacing, alignment, x, y, width from the selected block to the matching text block (by index) on every other slide.

---

## Data Model

### Slide object

```js
{
  bgType: 'solid' | 'gradient',
  bgColor: '#rrggbb',
  gradC1: '#rrggbb',
  gradC2: '#rrggbb',
  gradAngle: 135,         // degrees
  textBlocks: [ ...TextBlock ]
}
```

### TextBlock object

```js
{
  text: 'string',
  fontFamily: "'Font Name', category",
  fontSize: 80,           // in 1080-space pixels
  fontWeight: '400',
  fontStyle: 'normal' | 'italic',
  color: '#rrggbb',
  opacity: 100,           // 0–100
  align: 'left' | 'center' | 'right',
  lineHeight: 1.2,        // multiplier
  letterSpacing: 0,       // pixels in 1080-space
  x: 80,                  // 1080-space pixels from left
  y: 400,                 // 1080-space pixels from top
  width: 920              // text wrap width in 1080-space pixels
}
```

All coordinates and sizes are stored in the base **1080×1080 design space** regardless of which preview format is active. The renderer scales them at draw time.

---

## Rendering

### `renderSlideToSize(slide, targetW, targetH)`

The core renderer. Creates an offscreen `<canvas>` at `targetW × targetH`, then:

1. Draws the background (solid fill or linear gradient). For gradients, compute start/end points from the angle using the full diagonal of the target canvas.
2. For each text block, compute scaled versions of all positional properties:
   - `scaleX = targetW / 1080`
   - `scaleY = targetH / 1080`
   - `scaledX = tb.x * scaleX`
   - `scaledFontSize = tb.fontSize * scaleX`  *(scale font by X only for consistent type size)*
   - `scaledWidth = tb.width * scaleX`
   - For non-square formats (targetH > targetW after scaling), add a vertical offset to centre the 1080-tall design area within the taller canvas: `vOffset = (targetH - 1080 * scaleY) / 2`, then `scaledY = tb.y * scaleY + vOffset`
3. Call `renderTextBlock(g, scaledTb)` with the scaled block.

### `renderTextBlock(g, tb)`

1. Set `globalAlpha` from opacity.
2. Set font string: `"[italic] [weight] [size]px [family]"`.
3. Set `textAlign` and `textBaseline = 'top'`.
4. Word-wrap the text to fit `tb.width`: split on spaces, accumulate words until `measureText` exceeds width, then break to new line. Respect explicit `\n` newlines as hard breaks.
5. For each line, compute the x anchor (left edge / right edge / centre depending on alignment) and draw at `y + lineIndex * fontSize * lineHeight`.
6. If `letterSpacing !== 0`: draw character by character, advancing by `measureText(char).width + letterSpacing` after each character. Compute total width first to honour alignment.

### `renderCurrent()`

Called whenever state changes. Gets the current format from `EXPORT_FORMATS[previewSize]`, calls `renderSlideToSize`, draws the result onto the main canvas with `drawImage`, then calls `updateThumbs()`.

### Thumbnails

`updateThumbs()` iterates the slide thumb `<canvas>` elements in the sidebar and re-renders each slide at 1080×1080 (always square for the thumbnail strip) using `renderSlide()`.

---

## Bulk Import Modal (`✍ Write Slides`)

Full-screen overlay (dark backdrop). Contains:

- Title: **Write Slides**
- Description: use `---` on its own line to break to the next slide.
- An example hint block showing the format (monospace, subtle tinted background).
- A `<textarea>` for input.
- A live preview strip below the textarea: numbered chips, one per detected slide section, showing a truncated text preview. Updates on every keystroke.
- Two checkboxes:
  - **Append to existing slides** — if unchecked, replaces all slides; if checked, adds to the end.
  - **Inherit current style** — if checked, copies the font family, size, weight, style, colour, opacity, line height, letter spacing, alignment, x, y, width, and background from the currently selected slide to all generated slides.
- **Generate Slides** primary button and **Cancel** button.

### Parsing logic

```js
function parseBulkText(raw) {
  return raw
    .split(/^---+$/m)   // split on lines that are only dashes
    .map(s => s.trim())
    .filter(s => s.length > 0);
}
```

Each section becomes one slide with one text block. Background and text block style are either inherited or defaulted.

Close on backdrop click or Cancel.

---

## Animation Preview Overlay

Full-screen dark overlay. Contains:

- A `<canvas id="anim-canvas">` sized to fit the current preview format at max 540px wide (height calculated from aspect ratio).
- Control buttons: `‹ Prev`, `▶ Play / ⏸ Pause`, `Next ›`, `✕ Close`.
- Info label: `Slide N / Total · WIDTHxHEIGHT`

Play mode auto-advances slides every 2 seconds using `setInterval`. Renders using `renderSlideToSize` at the current preview format's dimensions.

Close on backdrop click or Close button.

---

## Export Modal

Triggered by `↓ Export PNGs`. Pre-selects whatever format is active in the canvas size switcher.

### Format picker

Three clickable cards in a 3-column grid. Each card shows:
- An aspect-ratio rectangle (CSS `aspect-ratio`) as a visual icon
- Format name (Square / Portrait / Story)
- Pixel dimensions

Clicking a card selects it for export **and** switches the canvas preview to that format.

### Export options

- Text input for filename prefix (default: `slide`).
- Progress bar and status text (hidden until export starts).
- `Export All PNGs` (primary) and `Cancel` buttons.

### Export process (`doExport`)

For each slide:
1. Call `renderSlideToSize(slide, fmt.w, fmt.h)` to get an offscreen canvas.
2. Convert to PNG with `toDataURL('image/png')`.
3. Trigger download via a temporary `<a>` element with `download` attribute.
4. Filename: `{prefix}-{zero-padded-index}-{formatKey}.png` e.g. `my-post-01-story.png`.
5. Wait ~120ms between downloads to avoid browser blocking.
6. Update progress bar after each slide.
7. Show "Done!" message, then auto-close after 2 seconds.

---

## Initialisation

On load, create 3 example slides to demonstrate the tool:

1. **Gradient slide** (Deep Blue → Purple, 135°) with large italic serif text, centred.
2. **Solid black slide** with large Bebas Neue text, left-aligned, accent colour.
3. **Gradient slide** (Dark Red → Gold, 145°) with italic quote text in Cormorant Garamond, centred.

Call `initPresets()` to populate colour swatches, `updateCanvasScale()` to set initial canvas sizing, `refreshSlidePicker()`, `loadSlideToUI()`, `renderCurrent()`.

---

## Key Implementation Notes

- **All coordinates stored in 1080-space.** Never store scaled values in the slide data.
- **`renderSlideToSize` is the single source of truth** for all rendering — used for main canvas preview, animation preview, export, and thumbnails (thumbnails use 1080×1080).
- **Canvas element dimensions change** when switching preview size (`.width` and `.height` attributes). CSS display size is always scaled to fit.
- **Drag coordinate conversion** must invert the full transform chain: screen px → divide by `scale` → subtract `vOffset` → divide by `scaleY` (for Y), divide by `scaleX` (for X) → 1080-space.
- **No external JS dependencies.** Canvas 2D API only for rendering.
- **Google Fonts** loaded via a single `<link>` tag with all 12 font families in one request.
- **Letter spacing** requires character-by-character rendering since the Canvas 2D API's `fillText` does not support letter spacing natively.
- **Word wrap** must handle both soft wraps (space-split) and hard breaks (`\n` in the text content).
- The **export modal format selector** and the **canvas size bar** are kept in sync — switching one updates the other.