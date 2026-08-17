// ─── FONT REGISTRY ────────────────────────────────────────────────────────────
// Maps font families to their file variants. Weights: 100-900. Style: normal|italic.
// Files are relative to the project root.

const FONT_REGISTRY = [
  {
    family: 'Alaska Beta',
    category: 'sans-serif',
    variants: [
      { file: 'fonts/Alaska/AlaskaBeta-CondensedLight.otf',    weight: 300, style: 'normal', label: 'Condensed Light' },
      { file: 'fonts/Alaska/AlaskaBeta-CondExtLtContrast.otf', weight: 200, style: 'normal', label: 'Ext Light Contrast' },
      { file: 'fonts/Alaska/AlaskaBeta-CondLightContrast.otf', weight: 300, style: 'normal', label: 'Light Contrast' },
    ]
  },
  {
    family: 'Apfel Grotezk',
    category: 'sans-serif',
    variants: [
      { file: 'fonts/Apfel/ApfelGrotezk-Regular.otf', weight: 400, style: 'normal', label: 'Regular' },
    ]
  },
  {
    family: 'IBM Plex Mono',
    category: 'monospace',
    variants: [
      { file: 'fonts/IBM/IBMPlexMono-Regular.ttf', weight: 400, style: 'normal', label: 'Regular' },
    ]
  },
  {
    family: 'IBM Plex Sans',
    category: 'sans-serif',
    variants: [
      { file: 'fonts/IBM/IBMPlexSans-ExtraLight.ttf', weight: 200, style: 'normal', label: 'ExtraLight' },
      { file: 'fonts/IBM/IBMPlexSans-Light.ttf',      weight: 300, style: 'normal', label: 'Light' },
      { file: 'fonts/IBM/IBMPlexSans-Medium.ttf',     weight: 500, style: 'normal', label: 'Medium' },
      { file: 'fonts/IBM/IBMPlexSans-SemiBold.ttf',   weight: 600, style: 'normal', label: 'SemiBold' },
    ]
  },
  {
    family: 'Neue Haas Display',
    category: 'sans-serif',
    variants: [
      { file: 'fonts/NeueHaas/55Rg.ttf', weight: 400, style: 'normal', label: 'Regular' },
      { file: 'fonts/NeueHaas/65Md.ttf', weight: 500, style: 'normal', label: 'Medium' },
      { file: 'fonts/NeueHaas/75Bd.ttf', weight: 700, style: 'normal', label: 'Bold' },
    ]
  },
  {
    family: 'Proxima Nova',
    category: 'sans-serif',
    variants: [
      { file: 'fonts/ProximaNova/ProximaNova Light.otf',    weight: 300, style: 'normal', label: 'Light' },
      { file: 'fonts/ProximaNova/ProximaNova Regular.otf',  weight: 400, style: 'normal', label: 'Regular' },
      { file: 'fonts/ProximaNova/ProximaNova Semibold.otf', weight: 600, style: 'normal', label: 'Semibold' },
      { file: 'fonts/ProximaNova/ProximaNova Bold.otf',     weight: 700, style: 'normal', label: 'Bold' },
    ]
  },
];

// ─── GOOGLE FONT REGISTRY ─────────────────────────────────────────────────────
// Curated, categorized metadata only — no files in the repo. Fonts are loaded
// on-demand from the Google Fonts CSS API (fonts.googleapis.com/css2) the first
// time one is previewed or chosen. `weights` lists the weights Google serves
// for that family so we never request a weight that would 404. `variable: true`
// means the family is served as a variable font covering the full range.
// category ∈ sans | serif | display | handwriting | monospace.

const GOOGLE_FONT_REGISTRY = [
  // ── Sans ──────────────────────────────────────────────────────────────────
  { family: 'Inter',             category: 'sans', weights: [100,200,300,400,500,600,700,800,900], variable: true },
  { family: 'Roboto',            category: 'sans', weights: [100,300,400,500,700,900] },
  { family: 'Open Sans',         category: 'sans', weights: [300,400,500,600,700,800], variable: true },
  { family: 'Lato',              category: 'sans', weights: [100,300,400,700,900] },
  { family: 'Montserrat',        category: 'sans', weights: [100,200,300,400,500,600,700,800,900], variable: true },
  { family: 'Poppins',           category: 'sans', weights: [100,200,300,400,500,600,700,800,900] },
  { family: 'Nunito',            category: 'sans', weights: [200,300,400,500,600,700,800,900], variable: true },
  { family: 'Work Sans',         category: 'sans', weights: [100,200,300,400,500,600,700,800,900], variable: true },
  { family: 'Oswald',            category: 'sans', weights: [200,300,400,500,600,700], variable: true },
  { family: 'Raleway',           category: 'sans', weights: [100,200,300,400,500,600,700,800,900], variable: true },
  { family: 'Bebas Neue',        category: 'sans', weights: [400] },
  { family: 'Anton',             category: 'sans', weights: [400] },
  { family: 'Archivo Black',     category: 'sans', weights: [400] },

  // ── Serif ─────────────────────────────────────────────────────────────────
  { family: 'Playfair Display',  category: 'serif', weights: [400,500,600,700,800,900], variable: true },
  { family: 'Merriweather',      category: 'serif', weights: [300,400,700,900] },
  { family: 'Lora',              category: 'serif', weights: [400,500,600,700], variable: true },
  { family: 'Georgia',           category: 'serif', weights: [400,700] },
  { family: 'EB Garamond',       category: 'serif', weights: [400,500,600,700,800], variable: true },
  { family: 'Libre Baskerville', category: 'serif', weights: [400,700] },
  { family: 'Cormorant Garamond',category: 'serif', weights: [300,400,500,600,700] },
  { family: 'Crimson Text',      category: 'serif', weights: [400,600,700] },

  // ── Display ───────────────────────────────────────────────────────────────
  { family: 'Lobster',           category: 'display', weights: [400] },
  { family: 'Pacifico',          category: 'display', weights: [400] },
  { family: 'Righteous',         category: 'display', weights: [400] },
  { family: 'Abril Fatface',     category: 'display', weights: [400] },
  { family: 'Alfa Slab One',     category: 'display', weights: [400] },
  { family: 'Fredoka One',       category: 'display', weights: [400] },
  { family: 'Bungee',            category: 'display', weights: [400] },
  { family: 'Monoton',           category: 'display', weights: [400] },

  // ── Handwriting ───────────────────────────────────────────────────────────
  { family: 'Dancing Script',    category: 'handwriting', weights: [400,500,600,700], variable: true },
  { family: 'Caveat',            category: 'handwriting', weights: [400,500,600,700], variable: true },
  { family: 'Satisfy',           category: 'handwriting', weights: [400] },
  { family: 'Great Vibes',       category: 'handwriting', weights: [400] },
  { family: 'Kalam',             category: 'handwriting', weights: [300,400,700] },
  { family: 'Permanent Marker',  category: 'handwriting', weights: [400] },
  { family: 'Shadows Into Light',category: 'handwriting', weights: [400] },

  // ── Monospace ─────────────────────────────────────────────────────────────
  { family: 'Roboto Mono',       category: 'monospace', weights: [100,200,300,400,500,600,700], variable: true },
  { family: 'Source Code Pro',   category: 'monospace', weights: [200,300,400,500,600,700,800,900], variable: true },
  { family: 'Space Mono',        category: 'monospace', weights: [400,700] },
  { family: 'Fira Code',         category: 'monospace', weights: [300,400,500,600,700], variable: true },
  { family: 'Inconsolata',       category: 'monospace', weights: [200,300,400,500,600,700,800,900], variable: true },
];

// Category metadata for the picker tabs (order matters).
const FONT_CATEGORIES = [
  { key: 'local',       label: 'Local' },
  { key: 'sans',        label: 'Sans' },
  { key: 'serif',       label: 'Serif' },
  { key: 'display',     label: 'Display' },
  { key: 'handwriting', label: 'Handwriting' },
  { key: 'monospace',   label: 'Mono' },
];

// Lookup: family name → Google registry entry (undefined for local fonts).
const GOOGLE_FONT_MAP = new Map(GOOGLE_FONT_REGISTRY.map(f => [f.family, f]));

// Tracks which Google families have had their css2 <link> injected, and which
// specific faces have finished loading, so we never fetch twice.
const googleFontLinksInjected = new Set();
const googleFontFacesLoaded = new Set();
// family → Promise that resolves once the injected css2 <link> has loaded,
// so document.fonts.load() sees the @font-face rules. Shared across calls.
const googleFontLinkPromises = new Map();

// ─── EXPORT FORMATS ───────────────────────────────────────────────────────────

const CANVAS_SIZE = 1080;

const EXPORT_FORMATS = {
  square:   { w: 1080, h: 1080,  label: '1080×1080', name: 'Square' },
  portrait: { w: 1080, h: 1350,  label: '1080×1350', name: 'Portrait' },
  story:    { w: 1080, h: 1920,  label: '1080×1920', name: 'Story' },
};

// ─── STATE ────────────────────────────────────────────────────────────────────

let slides = [];
let currentSlideIdx = 0;
let selectedTextIdx = null;
let bgType = 'solid';
let previewSize = 'square';
let selectedFmt = 'square';
let scale = 1;

// Drag state
let dragging = false;
let dragOffX = 0, dragOffY = 0;
// Pending drag: set on mousedown over a text block; becomes a real drag
// once the pointer moves beyond DRAG_THRESHOLD_PX (keeps plain clicks as selection).
let dragPending = false;
let dragStartClientX = 0, dragStartClientY = 0;
const DRAG_THRESHOLD_PX = 4;
// Text-box width resize drag state
let draggingTextWidth = false;
let textWidthGrabOffset = 0; // design-px offset from pointer to the box's right edge at grab
// Background image drag (pan) state
let draggingBg = false;
let bgDragStartX = 0, bgDragStartY = 0;
let bgDragOriginX = 0, bgDragOriginY = 0;
// Group drag (multi-select move) state. On drag start we snapshot every
// selected item's position, then apply the shared mouse delta to each.
let draggingGroup = false;
let groupDragStartX = 0, groupDragStartY = 0; // client coords at drag start
let groupDragOrigins = []; // [{ type, idx, x, y }] positions at drag start
// Background image selection + resize state
let bgSelected = false;
let draggingBgResize = null; // corner 'tl'|'tr'|'bl'|'br', edge 't'|'b'|'l'|'r', or null
// Anchor point in canvas-pixel space. For corners this is the opposite corner
// (stays fixed); for edges it's the image center (stays fixed).
let bgResizeAnchorX = 0, bgResizeAnchorY = 0;
// Original image rect at drag start (canvas-pixel space)
let bgResizeStartRect = null; // {dx,dy,dw,dh}
// Base image dimensions at scale=100 for the current fit mode
let bgResizeBaseW = 0, bgResizeBaseH = 0;

// Animation state
let animIdx = 0;
let animPlaying = false;
let animTimer = null;

// Undo/Redo state
let undoStack = [];
let redoStack = [];
let saveTimer = null;

// ─── SLIDE & TEXT BLOCK FACTORIES ─────────────────────────────────────────────

function makeSlide() {
  return {
    bgType: 'solid',
    bgColor: '#1a1a2e',
    gradC1: '#1a1a2e',
    gradC2: '#4a0072',
    gradAngle: 135,
    // Multiple background images, drawn in order (index 0 = bottom layer).
    // Each: { url, fit, x, y, scale }
    bgImages: [],
    textBlocks: []
  };
}

// Factory for one background image layer.
function makeBgImage(url) {
  return { url: url, fit: 'cover', x: 0, y: 0, scale: 100 };
}

// Normalize a slide's images into the bgImages[] array, migrating the legacy
// single-image fields (bgImage/bgImageFit/bgImageX/bgImageY/bgImageScale) on
// the fly so old saved projects keep working.
function getBgImages(slide) {
  if (!slide) return [];
  if (!Array.isArray(slide.bgImages)) {
    slide.bgImages = [];
    if (slide.bgImage) {
      slide.bgImages.push({
        url: slide.bgImage,
        fit: slide.bgImageFit || 'cover',
        x: slide.bgImageX || 0,
        y: slide.bgImageY || 0,
        scale: slide.bgImageScale != null ? slide.bgImageScale : 100
      });
    }
  }
  return slide.bgImages;
}

// The image layer currently targeted by the fit/offset controls + canvas drag.
// Max |layer.y| (design units) for a bg image, based on the active canvas
// height. The image is vertically centered on the canvas, so reaching the
// top/bottom edge of a taller format (portrait/story) needs a proportionally
// larger offset. fmt.w is always 1080, so design units == canvas px here.
function bgImageYLimit() {
  const fmt = EXPORT_FORMATS[previewSize] || EXPORT_FORMATS.square;
  return Math.round(fmt.h / 2);
}

let selectedBgImageIdx = 0;

// ─── UNIFIED MULTI-SELECT ─────────────────────────────────────────────────────
// Ordered list of selected canvas items, each { type: 'text'|'image', idx }.
// The last entry is the "primary" (most recently clicked) item. When exactly
// one item is selected, the legacy single-item globals (selectedTextIdx /
// selectedBgImageIdx / bgSelected) are kept in sync so the existing controls
// panel and single-item logic keep working unchanged. When more than one item
// is selected, the single-item panels are hidden and drags move the whole group.
let selectedItems = [];

function itemKey(type, idx) { return type + ':' + idx; }

function isItemSelected(type, idx) {
  return selectedItems.some(it => it.type === type && it.idx === idx);
}

function primaryItem() {
  return selectedItems.length ? selectedItems[selectedItems.length - 1] : null;
}

// Sync the legacy single-item globals from the current selection. Only a
// single-item selection maps onto them; multi-select clears them so the
// single-item panels hide.
function syncLegacySelection() {
  if (selectedItems.length === 1) {
    const it = selectedItems[0];
    if (it.type === 'text') {
      selectedTextIdx = it.idx;
      bgSelected = false;
    } else {
      selectedBgImageIdx = it.idx;
      bgSelected = true;
      selectedTextIdx = null;
    }
  } else {
    selectedTextIdx = null;
    bgSelected = false;
  }
}

function clearSelection() {
  selectedItems = [];
  syncLegacySelection();
}

function selectSingleItem(type, idx) {
  selectedItems = [{ type, idx }];
  syncLegacySelection();
}

function toggleItemInSelection(type, idx) {
  const k = itemKey(type, idx);
  const at = selectedItems.findIndex(it => itemKey(it.type, it.idx) === k);
  if (at >= 0) selectedItems.splice(at, 1);
  else selectedItems.push({ type, idx });
  syncLegacySelection();
}

function getSelectedBgImage(slide) {
  const arr = getBgImages(slide);
  if (!arr.length) return null;
  if (selectedBgImageIdx < 0 || selectedBgImageIdx >= arr.length) selectedBgImageIdx = arr.length - 1;
  return arr[selectedBgImageIdx];
}

// Cache of loaded Image elements keyed by dataURL (for sync rendering)
const bgImageCache = new Map();

function ensureBgImageCached(dataURL) {
  if (!dataURL || bgImageCache.has(dataURL)) return;
  const img = new Image();
  img.src = dataURL;
  bgImageCache.set(dataURL, img);
}

function makeTextBlock() {
  // Use the first available font family as default
  const defaultFamily = FONT_REGISTRY.length > 0 ? FONT_REGISTRY[0].family : 'sans-serif';
  const defaultVariant = FONT_REGISTRY.length > 0 ? FONT_REGISTRY[0].variants[0] : { weight: 400, style: 'normal' };
  return {
    text: 'Your text here',
    fontFamily: defaultFamily,
    fontSize: 80,
    fontWeight: String(defaultVariant.weight),
    fontStyle: defaultVariant.style,
    uppercase: false,
    color: '#ffffff',
    opacity: 100,
    align: 'center',
    lineHeight: 1.2,
    letterSpacing: 0,
    x: 80,
    y: 400,
    width: 920,
    // Effects
    shadowOn: false,
    shadowColor: '#000000',
    shadowOpacity: 60,
    shadowX: 4,
    shadowY: 4,
    shadowBlur: 8,
    strokeOn: false,
    strokeColor: '#000000',
    strokeWidth: 2,
  };
}

// ─── FONT LOADING ─────────────────────────────────────────────────────────────

async function loadFonts() {
  const promises = [];
  for (const family of FONT_REGISTRY) {
    for (const v of family.variants) {
      const face = new FontFace(family.family, `url('${v.file}')`, {
        weight: String(v.weight),
        style: v.style
      });
      promises.push(
        face.load().then(loaded => {
          document.fonts.add(loaded);
        }).catch(err => {
          console.warn(`Failed to load font: ${family.family} ${v.label}`, err);
        })
      );
    }
  }
  await Promise.allSettled(promises);
}

// ─── GOOGLE FONT LOADER ───────────────────────────────────────────────────────
// Lazily loads a Google family from the css2 API. Injects one <link> per family
// (tracked in googleFontLinksInjected) and awaits the specific weight/style face
// via document.fonts.load (tracked in googleFontFacesLoaded). Safe to call
// repeatedly — already-loaded faces resolve immediately. Returns true on success,
// false if the family is unknown or the load failed (e.g. offline).

function googleFontCssUrl(entry) {
  const fam = encodeURIComponent(entry.family).replace(/%20/g, '+');
  // Request every weight in both normal + italic so the picker/italic toggle work.
  const ital = entry.weights.map(w => `0,${w}`).concat(entry.weights.map(w => `1,${w}`));
  return `https://fonts.googleapis.com/css2?family=${fam}:ital,wght@${ital.join(';')}&display=swap`;
}

async function ensureGoogleFont(familyName, weight, style) {
  const entry = GOOGLE_FONT_MAP.get(familyName);
  if (!entry) return false;
  const w = String(weight || 400);
  const st = style || 'normal';
  const faceKey = `${familyName}|${w}|${st}`;
  if (googleFontFacesLoaded.has(faceKey)) return true;

  // Inject the family stylesheet once, and await its load so the @font-face
  // rules are registered before we call document.fonts.load(). Without this,
  // load() finds no matching face and resolves empty (the bug we hit).
  if (!googleFontLinksInjected.has(familyName)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = googleFontCssUrl(entry);
    const p = new Promise(res => { link.onload = res; link.onerror = res; });
    document.head.appendChild(link);
    googleFontLinksInjected.add(familyName);
    googleFontLinkPromises.set(familyName, p);
  }
  // Wait for the stylesheet (if we injected it) before probing for the face.
  if (googleFontLinkPromises.has(familyName)) {
    await googleFontLinkPromises.get(familyName);
  }

  try {
    const fontSpec = `${st === 'italic' ? 'italic ' : ''}${w} 32px "${familyName}"`;
    const loaded = await document.fonts.load(fontSpec);
    // document.fonts.load resolves even on failure (empty array) — verify.
    const ok = loaded.length > 0 && document.fonts.check(fontSpec);
    if (ok) {
      googleFontFacesLoaded.add(faceKey);
      return true;
    }
    console.warn(`Google font not usable after load: ${familyName} ${w} ${st}`);
    return false;
  } catch (err) {
    console.warn(`Failed to load Google font: ${familyName} ${w} ${st}`, err);
    return false;
  }
}

function buildFontFamilySelect() {
  const sel = document.getElementById('font-family');
  sel.innerHTML = '';
  FONT_REGISTRY.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.family;
    opt.textContent = f.family;
    sel.appendChild(opt);
  });
  // Google families must also exist as options: setting select.value to a value
  // with no matching <option> silently fails (value becomes ''), which previously
  // corrupted tb.fontFamily to '' and made the canvas fall back to sans-serif.
  GOOGLE_FONT_REGISTRY.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.family;
    opt.textContent = f.family;
    sel.appendChild(opt);
  });
}

function buildFontWeightSelect(familyName) {
  const sel = document.getElementById('font-weight');
  sel.innerHTML = '';
  const google = GOOGLE_FONT_MAP.get(familyName);
  if (google) {
    google.weights.forEach(w => {
      const opt = document.createElement('option');
      opt.value = String(w);
      opt.textContent = weightLabel(w);
      sel.appendChild(opt);
    });
    return;
  }
  const family = FONT_REGISTRY.find(f => f.family === familyName);
  if (!family) return;
  // Deduplicate by weight (show each weight once)
  const seen = new Set();
  family.variants.forEach(v => {
    const key = v.weight;
    if (!seen.has(key)) {
      seen.add(key);
      const opt = document.createElement('option');
      opt.value = String(v.weight);
      opt.textContent = v.label || weightLabel(v.weight);
      sel.appendChild(opt);
    }
  });
}

function weightLabel(w) {
  const map = { 100:'Thin', 200:'ExtraLight', 300:'Light', 400:'Regular',
                500:'Medium', 600:'SemiBold', 700:'Bold', 800:'ExtraBold', 900:'Black' };
  return (map[w] || String(w)) + ' ' + w;
}

function onFontFamilyChange() {
  const family = document.getElementById('font-family').value;
  applyFontFamilySelection(family);
}

// Sets the family on the selected text block, rebuilds the weight list, picks a
// sensible default weight, loads the font if it's a Google family, then applies.
async function applyFontFamilySelection(family) {
  buildFontWeightSelect(family);
  const weightSel = document.getElementById('font-weight');
  const google = GOOGLE_FONT_MAP.get(family);
  if (google) {
    // Default to 400 if offered, else first weight.
    const def = google.weights.includes(400) ? 400 : google.weights[0];
    weightSel.value = String(def);
  } else {
    const familyDef = FONT_REGISTRY.find(f => f.family === family);
    if (familyDef && familyDef.variants.length > 0) {
      weightSel.value = String(familyDef.variants[0].weight);
    }
  }
  // Sync the hidden select + trigger label so updateTextBlock reads the family.
  // Guard: if the option is somehow missing (e.g. a family from an imported
  // project not in either registry), append it so .value sticks.
  const famSel = document.getElementById('font-family');
  if (![...famSel.options].some(o => o.value === family)) {
    const opt = document.createElement('option');
    opt.value = family;
    opt.textContent = family;
    famSel.appendChild(opt);
  }
  famSel.value = family;
  updateFontPickerCurrent(family);
  updateTextBlock();
  // Load the face, then re-render so the canvas swaps to the real typeface.
  if (google) {
    const style = document.getElementById('font-style').value;
    await ensureGoogleFont(family, weightSel.value, style);
    renderCurrent();
    refreshTextList();
  }
}

// ─── FONT PICKER ──────────────────────────────────────────────────────────────

let fontPickerCategory = 'local';
let fontPickerObserver = null;

function toggleFontPicker(e) {
  if (e) e.stopPropagation();
  const panel = document.getElementById('font-picker');
  const open = panel.style.display !== 'none';
  if (open) { closeFontPicker(); return; }
  panel.style.display = '';
  buildFontPickerTabs();
  renderFontPickerList();
  // Close when clicking anywhere outside the picker or trigger.
  setTimeout(() => document.addEventListener('mousedown', fontPickerOutside), 0);
}

function closeFontPicker() {
  document.getElementById('font-picker').style.display = 'none';
  document.removeEventListener('mousedown', fontPickerOutside);
  if (fontPickerObserver) { fontPickerObserver.disconnect(); fontPickerObserver = null; }
}

function fontPickerOutside(e) {
  const panel = document.getElementById('font-picker');
  const trigger = document.getElementById('font-picker-trigger');
  if (!panel.contains(e.target) && !trigger.contains(e.target)) closeFontPicker();
}

function updateFontPickerCurrent(family) {
  const el = document.getElementById('font-picker-current');
  if (el) el.textContent = family;
}

function buildFontPickerTabs() {
  const tabs = document.getElementById('font-picker-tabs');
  tabs.innerHTML = '';
  FONT_CATEGORIES.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'font-picker-tab' + (cat.key === fontPickerCategory ? ' active' : '');
    b.textContent = cat.label;
    b.onclick = () => { fontPickerCategory = cat.key; buildFontPickerTabs(); renderFontPickerList(); };
    tabs.appendChild(b);
  });
}

function renderFontPickerList() {
  const list = document.getElementById('font-picker-list');
  list.innerHTML = '';
  if (fontPickerObserver) { fontPickerObserver.disconnect(); fontPickerObserver = null; }

  const currentFamily = document.getElementById('font-family').value;
  let entries;
  if (fontPickerCategory === 'local') {
    entries = FONT_REGISTRY.map(f => ({ family: f.family, cat: 'Local', google: false }));
  } else {
    entries = GOOGLE_FONT_REGISTRY
      .filter(f => f.category === fontPickerCategory)
      .map(f => ({ family: f.family, cat: FONT_CATEGORIES.find(c => c.key === f.category).label, google: true }));
  }

  // Lazy-load each Google row's font when it scrolls into view.
  if (fontPickerCategory !== 'local' && 'IntersectionObserver' in window) {
    fontPickerObserver = new IntersectionObserver((obs) => {
      obs.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        fontPickerObserver.unobserve(el);
        const fam = el.dataset.family;
        ensureGoogleFont(fam, 400, 'normal').then(() => {
          el.querySelector('.font-picker-name').style.fontFamily = `'${fam}', sans-serif`;
        });
      });
    }, { root: list, rootMargin: '40px' });
  }

  entries.forEach(ent => {
    const row = document.createElement('button');
    row.className = 'font-picker-row' + (ent.family === currentFamily ? ' active' : '');
    row.dataset.family = ent.family;
    const name = document.createElement('span');
    name.className = 'font-picker-name';
    name.textContent = ent.family;
    if (!ent.google) {
      // Local fonts are already loaded — render in their own typeface now.
      name.style.fontFamily = `'${ent.family}', sans-serif`;
    }
    const cat = document.createElement('span');
    cat.className = 'font-picker-cat';
    cat.textContent = ent.cat;
    row.appendChild(name);
    row.appendChild(cat);
    row.onclick = () => { selectFontFromPicker(ent.family); };
    list.appendChild(row);
    if (ent.google && fontPickerObserver) fontPickerObserver.observe(row);
  });
}

function selectFontFromPicker(family) {
  applyFontFamilySelection(family);
  // Re-render list so the active highlight moves; keep picker open for browsing.
  renderFontPickerList();
}

// ─── RENDERING ────────────────────────────────────────────────────────────────

const mainCanvas = document.getElementById('main-canvas');
const ctx = mainCanvas.getContext('2d');

function renderSlideToSize(slide, targetW, targetH) {
  const off = document.createElement('canvas');
  off.width = targetW;
  off.height = targetH;
  const g = off.getContext('2d');

  const scaleX = targetW / CANVAS_SIZE;
  const scaleY = targetH / CANVAS_SIZE;

  // Background — the image is an independent layer drawn ON TOP of a backdrop.
  // bgType selects the backdrop ('solid' | 'gradient'); the image (if present)
  // always renders above it, so switching solid<->gradient never removes it.
  if (slide.bgType === 'gradient') {
    const rad = (slide.gradAngle - 90) * Math.PI / 180;
    const cx = targetW / 2, cy = targetH / 2;
    const d = Math.sqrt(targetW * targetW + targetH * targetH) / 2;
    const grd = g.createLinearGradient(
      cx - Math.cos(rad) * d, cy - Math.sin(rad) * d,
      cx + Math.cos(rad) * d, cy + Math.sin(rad) * d
    );
    grd.addColorStop(0, slide.gradC1);
    grd.addColorStop(1, slide.gradC2);
    g.fillStyle = grd;
    g.fillRect(0, 0, targetW, targetH);
  } else {
    // solid backdrop (also the fill behind/around an image)
    g.fillStyle = slide.bgColor;
    g.fillRect(0, 0, targetW, targetH);
  }
  // Image layers on top, drawn in order (index 0 = bottom). Multiple images
  // can be stacked on one slide.
  // Images are treated as placed design elements: size/position are computed
  // in the 1080×1080 design space, then scaled uniformly by the width ratio
  // (like text). This keeps the same relative size & position across formats.
  const bgImages = getBgImages(slide);
  const designScale = targetW / CANVAS_SIZE;
  bgImages.forEach(layer => {
    const img = bgImageCache.get(layer.url);
    if (img && img.complete && img.naturalWidth) {
      const fit = layer.fit || 'cover';
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const userScale = (layer.scale != null ? layer.scale : 100) / 100;
      let dw, dh;
      if (fit === 'cover') {
        const s = Math.max(CANVAS_SIZE / iw, CANVAS_SIZE / ih) * userScale;
        dw = iw * s; dh = ih * s;
      } else if (fit === 'contain') {
        const s = Math.min(CANVAS_SIZE / iw, CANVAS_SIZE / ih) * userScale;
        dw = iw * s; dh = ih * s;
      } else {
        // stretch — scale still applies
        dw = CANVAS_SIZE * userScale; dh = CANVAS_SIZE * userScale;
      }
      const dx = ((CANVAS_SIZE - dw) / 2 + (layer.x || 0)) * designScale;
      // Anchor vertically to the ACTUAL canvas center (targetH/2), not the
      // 1080 design center. On taller formats (portrait/story) this keeps
      // layer.y=0 centered and lets ±(targetH/2) reach the top/bottom edges.
      // designScale is 1 (width is always 1080), so design units == canvas px.
      const dy = (targetH - dh * designScale) / 2 + (layer.y || 0) * designScale;
      g.drawImage(img, dx, dy, dw * designScale, dh * designScale);
    }
  });

  // Text blocks — X scales with canvas width; Y is absolute (same pixel position across formats)
  slide.textBlocks.forEach(tb => {
    const scaled = {
      ...tb,
      x: tb.x * scaleX,
      y: tb.y,           // absolute Y — no vertical scaling
      width: tb.width * scaleX,
      fontSize: tb.fontSize * scaleX,
    };
    renderTextBlock(g, scaled);
  });

  return off;
}

function renderTextBlock(g, tb) {
  g.save();
  g.globalAlpha = tb.opacity / 100;

  const italic = tb.fontStyle === 'italic' ? 'italic ' : '';
  g.font = `${italic}${tb.fontWeight} ${tb.fontSize}px '${tb.fontFamily}', sans-serif`;
  g.textAlign = tb.align;
  g.textBaseline = 'top';

  // Apply shadow
  if (tb.shadowOn) {
    const op = (tb.shadowOpacity ?? 60) / 100;
    const sc = tb.shadowColor || '#000000';
    const r = parseInt(sc.slice(1,3),16);
    const gv = parseInt(sc.slice(3,5),16);
    const b = parseInt(sc.slice(5,7),16);
    g.shadowColor = `rgba(${r},${gv},${b},${op})`;
    g.shadowOffsetX = tb.shadowX ?? 4;
    g.shadowOffsetY = tb.shadowY ?? 4;
    g.shadowBlur    = tb.shadowBlur ?? 8;
  }

  // Resolve text (uppercase toggle)
  const tbWithCase = { ...tb, text: tb.uppercase ? tb.text.toUpperCase() : tb.text };
  const lines = wrapText(g, tbWithCase);
  const lh = tb.fontSize * tb.lineHeight;

  lines.forEach((line, li) => {
    const y = tb.y + li * lh;
    let x;
    if (tb.align === 'left') x = tb.x;
    else if (tb.align === 'right') x = tb.x + tb.width;
    else x = tb.x + tb.width / 2;

    // Stroke pass (drawn first, behind fill)
    if (tb.strokeOn) {
      g.shadowColor = 'transparent'; // no shadow on stroke
      g.strokeStyle = tb.strokeColor || '#000000';
      g.lineWidth   = (tb.strokeWidth ?? 2) * 2; // stroke is centered; *2 so half shows outside
      g.lineJoin    = 'round';
      if (tb.letterSpacing !== 0) {
        strokeWithSpacing(g, line, x, y, tb.align, tb.letterSpacing);
      } else {
        g.strokeText(line, x, y);
      }
      // Restore shadow for fill
      if (tb.shadowOn) {
        const op = (tb.shadowOpacity ?? 60) / 100;
        const sc = tb.shadowColor || '#000000';
        const r = parseInt(sc.slice(1,3),16);
        const gv = parseInt(sc.slice(3,5),16);
        const b = parseInt(sc.slice(5,7),16);
        g.shadowColor = `rgba(${r},${gv},${b},${op})`;
        g.shadowOffsetX = tb.shadowX ?? 4;
        g.shadowOffsetY = tb.shadowY ?? 4;
        g.shadowBlur    = tb.shadowBlur ?? 8;
      }
    }

    // Fill pass
    g.fillStyle = tb.color;
    if (tb.letterSpacing !== 0) {
      drawWithSpacing(g, line, x, y, tb.align, tb.letterSpacing);
    } else {
      g.fillText(line, x, y);
    }
  });

  g.restore();
}

function strokeWithSpacing(g, text, x, y, align, spacing) {
  const chars = [...text];
  if (!chars.length) return;
  let total = 0;
  chars.forEach(ch => { total += g.measureText(ch).width; });
  total += spacing * (chars.length - 1);
  let cx;
  if (align === 'left') cx = x;
  else if (align === 'right') cx = x - total;
  else cx = x - total / 2;
  const savedAlign = g.textAlign;
  g.textAlign = 'left';
  chars.forEach(ch => {
    g.strokeText(ch, cx, y);
    cx += g.measureText(ch).width + spacing;
  });
  g.textAlign = savedAlign;
}

function drawWithSpacing(g, text, x, y, align, spacing) {
  const chars = [...text];
  if (!chars.length) return;
  // Measure total width (spacing between chars, not after last)
  let total = 0;
  chars.forEach(ch => { total += g.measureText(ch).width; });
  total += spacing * (chars.length - 1);
  // Compute left-edge start position based on alignment anchor
  let cx;
  if (align === 'left') cx = x;
  else if (align === 'right') cx = x - total;
  else cx = x - total / 2; // center
  // Draw char-by-char with textAlign='left' so each char is placed exactly
  const savedAlign = g.textAlign;
  g.textAlign = 'left';
  chars.forEach(ch => {
    g.fillText(ch, cx, y);
    cx += g.measureText(ch).width + spacing;
  });
  g.textAlign = savedAlign;
}

function wrapText(g, tb) {
  const lines = [];
  tb.text.split('\n').forEach(para => {
    const words = para.split(' ');
    let line = '';
    words.forEach(w => {
      const test = line ? line + ' ' + w : w;
      if (g.measureText(test).width > tb.width && line) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
      // Break a single word that is wider than the box (no spaces to wrap on).
      // Greedily split it into the largest chunks that fit, like CSS
      // overflow-wrap: break-word, so text never escapes the box width.
      while (g.measureText(line).width > tb.width && line.length > 1) {
        let lo = 1, hi = line.length - 1, fit = 1;
        while (lo <= hi) {
          const mid = (lo + hi) >> 1;
          if (g.measureText(line.slice(0, mid)).width <= tb.width) { fit = mid; lo = mid + 1; }
          else hi = mid - 1;
        }
        lines.push(line.slice(0, fit));
        line = line.slice(fit);
      }
    });
    lines.push(line);
  });
  return lines;
}

function wrapTextSimple(tb) {
  return tb.text.split('\n');
}

// Shared measuring context so snap/position math uses the exact same
// word-wrap logic and font metrics as the renderer (renderTextBlock).
const _measureCtx = document.createElement('canvas').getContext('2d');

// Returns the number of *visual* lines a text block occupies after wrapping,
// matching what renderTextBlock() actually draws (incl. uppercase toggle).
function wrappedLineCount(tb) {
  const italic = tb.fontStyle === 'italic' ? 'italic ' : '';
  _measureCtx.font = `${italic}${tb.fontWeight} ${tb.fontSize}px '${tb.fontFamily}', sans-serif`;
  const tbWithCase = { ...tb, text: tb.uppercase ? tb.text.toUpperCase() : tb.text };
  return wrapText(_measureCtx, tbWithCase).length;
}

// Pixel height of a text block as rendered (top baseline to bottom of last line).
function textBlockHeight(tb) {
  return wrappedLineCount(tb) * tb.fontSize * tb.lineHeight;
}

// Width of the widest *rendered* line (design px). This is the actual inked
// extent, which is usually narrower than tb.width (the wrap boundary) because
// words wrap before reaching the edge. Accounts for letter-spacing like
// drawWithSpacing() does. Used to size the selection box to the visible text.
function textBlockWidth(tb) {
  const italic = tb.fontStyle === 'italic' ? 'italic ' : '';
  _measureCtx.font = `${italic}${tb.fontWeight} ${tb.fontSize}px '${tb.fontFamily}', sans-serif`;
  const tbWithCase = { ...tb, text: tb.uppercase ? tb.text.toUpperCase() : tb.text };
  const lines = wrapText(_measureCtx, tbWithCase);
  const spacing = tb.letterSpacing || 0;
  let max = 0;
  lines.forEach(line => {
    let w = _measureCtx.measureText(line).width;
    if (spacing !== 0 && line.length > 1) w += spacing * (line.length - 1);
    if (w > max) max = w;
  });
  return max;
}

function renderCurrent() {
  if (!slides.length) {
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    updateBgSelectionBox();
    updateTextSelectionBox();
    return;
  }
  const fmt = EXPORT_FORMATS[previewSize];
  const off = renderSlideToSize(slides[currentSlideIdx], fmt.w, fmt.h);
  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  ctx.drawImage(off, 0, 0);
  updateThumbs();
  updateBgSelectionBox();
  updateTextSelectionBox();
}

// Compute the rendered rect (canvas-pixel space) for one image layer.
// `layer` is one entry from slide.bgImages. Returns {dx, dy, dw, dh} or null.
function getBgImageLayerRect(slide, layer) {
  if (!slide || !layer) return null;
  const img = bgImageCache.get(layer.url);
  if (!img || !img.complete || !img.naturalWidth) return null;
  const fmt = EXPORT_FORMATS[previewSize];
  const iw = img.naturalWidth, ih = img.naturalHeight;
  const fit = layer.fit || 'cover';
  const userScale = (layer.scale != null ? layer.scale : 100) / 100;
  const designScale = fmt.w / CANVAS_SIZE;
  let dw, dh;
  if (fit === 'cover') {
    const s = Math.max(CANVAS_SIZE / iw, CANVAS_SIZE / ih) * userScale;
    dw = iw * s; dh = ih * s;
  } else if (fit === 'contain') {
    const s = Math.min(CANVAS_SIZE / iw, CANVAS_SIZE / ih) * userScale;
    dw = iw * s; dh = ih * s;
  } else {
    dw = CANVAS_SIZE * userScale; dh = CANVAS_SIZE * userScale;
  }
  const dx = ((CANVAS_SIZE - dw) / 2 + (layer.x || 0)) * designScale;
  // Match renderSlideToSize: anchor vertically to the actual canvas center.
  const dy = (fmt.h - dh * designScale) / 2 + (layer.y || 0) * designScale;
  return { dx, dy, dw: dw * designScale, dh: dh * designScale };
}

// Rect for the currently-selected image layer (drives the selection box).
function getBgImageRect(slide) {
  return getBgImageLayerRect(slide, getSelectedBgImage(slide));
}

// Hit-test image layers at a design-space point, topmost (last drawn) first.
// Returns the layer index, or -1 if none hit.
function hitTestBgImages(slide, mx, my) {
  const arr = getBgImages(slide);
  const fmt = EXPORT_FORMATS[previewSize];
  // mx is design-space X (scaled by width); my is already canvas-pixel Y
  // (screenToDesign does not scale Y). The layer rect from getBgImageLayerRect
  // is in canvas-pixel space, so convert only X and use my as-is. The previous
  // code scaled Y by fmt.h/CANVAS_SIZE a second time, which threw the hit-test
  // vertically off on portrait/story (on square it's ×1 so it went unnoticed).
  const px = mx * (fmt.w / CANVAS_SIZE);
  const py = my;
  for (let i = arr.length - 1; i >= 0; i--) {
    const r = getBgImageLayerRect(slide, arr[i]);
    if (r && px >= r.dx && px <= r.dx + r.dw && py >= r.dy && py <= r.dy + r.dh) return i;
  }
  return -1;
}

// Position the selection box overlay to match the rendered bg image rect.
function updateBgSelectionBox() {
  const box = document.getElementById('bg-selection-box');
  // During multi-select the per-item outlines take over the visuals.
  if (selectedItems.length > 1) { box.style.display = 'none'; updateMultiSelectionBoxes(); return; }
  if (!slides.length || !bgSelected) { box.style.display = 'none'; updateMultiSelectionBoxes(); return; }
  const slide = slides[currentSlideIdx];
  const rect = getBgImageRect(slide);
  if (!rect) { box.style.display = 'none'; return; }
  const { dx, dy, dw, dh } = rect;
  box.style.display = 'block';
  box.style.left   = (dx * scale) + 'px';
  box.style.top    = (dy * scale) + 'px';
  box.style.width  = (dw * scale) + 'px';
  box.style.height = (dh * scale) + 'px';
}

// Position the dashed text-box overlay over the selected text block.
// The box hugs the *actual rendered text extent* (widest line × wrapped height),
// not the wrap boundary tb.width, so the border matches where the words reach.
// Horizontal placement respects the block's text alignment. Design coords are
// converted to canvas px (scaleX) then screen px (scale); Y design == canvas px.
function updateTextSelectionBox() {
  const box = document.getElementById('text-selection-box');
  if (!box) return;
  // During multi-select the per-item outlines take over the visuals.
  if (selectedItems.length > 1) { box.style.display = 'none'; updateMultiSelectionBoxes(); return; }
  const tb = (slides.length && selectedTextIdx !== null)
    ? slides[currentSlideIdx].textBlocks[selectedTextIdx] : null;
  if (!tb) { box.style.display = 'none'; updateMultiSelectionBoxes(); return; }
  const fmt = EXPORT_FORMATS[previewSize];
  const scaleX = fmt.w / CANVAS_SIZE;
  const h = textBlockHeight(tb);
  let leftX, boxW;
  if (draggingTextWidth) {
    // While resizing, show the actual wrap boundary (tb.width) so the box and
    // handle track the cursor 1:1 instead of snapping to the re-wrapped text.
    leftX = tb.x;
    boxW  = tb.width;
  } else {
    // At rest, hug the actual rendered text extent (widest line).
    const textW = textBlockWidth(tb);
    leftX = tb.x;
    if (tb.align === 'right')       leftX = tb.x + tb.width - textW;
    else if (tb.align === 'center') leftX = tb.x + (tb.width - textW) / 2;
    boxW = textW;
  }
  box.style.display = 'block';
  box.style.left   = (leftX * scaleX * scale) + 'px';
  box.style.top    = (tb.y * scale) + 'px';
  box.style.width  = (boxW * scaleX * scale) + 'px';
  box.style.height = (h * scale) + 'px';
  // The width handle is a CSS-positioned child at the box's right edge.
}

// Compute a text block's rendered rect in canvas-pixel space (same math as
// updateTextSelectionBox, minus the resize special-case). Returns null if the
// block index is invalid.
function getTextBlockRect(slide, idx) {
  const tb = slide && slide.textBlocks[idx];
  if (!tb) return null;
  const fmt = EXPORT_FORMATS[previewSize];
  const scaleX = fmt.w / CANVAS_SIZE;
  const h = textBlockHeight(tb);
  const textW = textBlockWidth(tb);
  let leftX = tb.x;
  if (tb.align === 'right')       leftX = tb.x + tb.width - textW;
  else if (tb.align === 'center') leftX = tb.x + (tb.width - textW) / 2;
  return { dx: leftX * scaleX, dy: tb.y, dw: textW * scaleX, dh: h };
}

// Render one dashed outline per selected item when multi-selecting. With a
// single selection the legacy single-item boxes handle the visuals instead.
function updateMultiSelectionBoxes() {
  const layer = document.getElementById('multi-select-layer');
  if (!layer) return;
  layer.innerHTML = '';
  if (!slides.length || selectedItems.length < 2) return;
  const slide = slides[currentSlideIdx];
  selectedItems.forEach(it => {
    const rect = it.type === 'text'
      ? getTextBlockRect(slide, it.idx)
      : getBgImageLayerRect(slide, getBgImages(slide)[it.idx]);
    if (!rect) return;
    const div = document.createElement('div');
    div.className = 'multi-select-box';
    div.style.left   = (rect.dx * scale) + 'px';
    div.style.top    = (rect.dy * scale) + 'px';
    div.style.width  = (rect.dw * scale) + 'px';
    div.style.height = (rect.dh * scale) + 'px';
    layer.appendChild(div);
  });
}

// ─── PREVIEW SIZE ─────────────────────────────────────────────────────────────

function setPreviewSize(key) {
  previewSize = key;
  selectedFmt = key;
  Object.keys(EXPORT_FORMATS).forEach(k => {
    document.getElementById('sz-' + k).classList.toggle('active', k === key);
    const fmtEl = document.getElementById('fmt-' + k);
    if (fmtEl) fmtEl.classList.toggle('active', k === key);
  });
  const fmt = EXPORT_FORMATS[key];
  document.getElementById('canvas-size-label').textContent =
    `${fmt.w} × ${fmt.h} · ${fmt.name}`;
  mainCanvas.width  = fmt.w;
  mainCanvas.height = fmt.h;
  // Update Y slider max to match format height
  document.getElementById('pos-y').max = fmt.h;
  // Update bg-image Y slider range to match format height (design units)
  const bgY = document.getElementById('bg-img-y');
  if (bgY) {
    const lim = bgImageYLimit();
    bgY.min = -lim;
    bgY.max = lim;
  }
  updateCanvasScale();
  renderCurrent();
}

function updateCanvasScale() {
  const fmt = EXPORT_FORMATS[previewSize];
  const area = document.getElementById('canvas-area');
  const aw = area.clientWidth  - 48;
  const ah = area.clientHeight - 48 - 42 - 24; // padding + size-bar + label
  scale = Math.min(aw / fmt.w, ah / fmt.h, 1);
  const wrap = document.getElementById('canvas-wrap');
  wrap.style.width  = (fmt.w * scale) + 'px';
  wrap.style.height = (fmt.h * scale) + 'px';
  mainCanvas.style.width  = (fmt.w * scale) + 'px';
  mainCanvas.style.height = (fmt.h * scale) + 'px';
  updateTextSelectionBox();
}

// ─── COORDINATE CONVERSION ────────────────────────────────────────────────────

function screenToDesign(ex, ey) {
  const fmt = EXPORT_FORMATS[previewSize];
  const rect = mainCanvas.getBoundingClientRect();
  const px = (ex - rect.left)  / scale;
  const py = (ey - rect.top)   / scale;
  const scaleX = fmt.w / CANVAS_SIZE;
  // Y is absolute (no vertical scaling) — just convert from canvas pixels to design pixels
  return {
    x: px / scaleX,
    y: py   // canvas Y == design Y
  };
}

// ─── CANVAS DRAG ──────────────────────────────────────────────────────────────

const overlay = document.getElementById('canvas-overlay');

// Shared hit test — measures the real wrapped text block (same logic as the
// renderer) so the clickable region matches the visible glyphs. A small
// margin makes the block easy to grab without overlapping neighbours.
function hitTestTextBlocks(slide, mx, my) {
  const M = 12; // design-px margin around the block for easier grabbing
  for (let i = slide.textBlocks.length - 1; i >= 0; i--) {
    const tb = slide.textBlocks[i];
    const h = textBlockHeight(tb);
    if (mx >= tb.x - M && mx <= tb.x + tb.width + M &&
        my >= tb.y - M && my <= tb.y + h + M) {
      return i;
    }
  }
  return -1;
}

// Corner handle mousedown — start resize drag
// Compute the image's base dimensions (what scale=100 produces) for the
// selected layer's fit mode, in canvas-pixel space. Shared by corner and edge
// resize handles.
function computeBgResizeBase(slide) {
  const layer = getSelectedBgImage(slide);
  if (!layer) return false;
  const img = bgImageCache.get(layer.url);
  if (!img) return false;
  const fmt = EXPORT_FORMATS[previewSize];
  const iw = img.naturalWidth, ih = img.naturalHeight;
  const fit = layer.fit || 'cover';
  const designScale = fmt.w / CANVAS_SIZE;
  if (fit === 'cover') {
    const s = Math.max(CANVAS_SIZE / iw, CANVAS_SIZE / ih);
    bgResizeBaseW = iw * s * designScale; bgResizeBaseH = ih * s * designScale;
  } else if (fit === 'contain') {
    const s = Math.min(CANVAS_SIZE / iw, CANVAS_SIZE / ih);
    bgResizeBaseW = iw * s * designScale; bgResizeBaseH = ih * s * designScale;
  } else {
    bgResizeBaseW = CANVAS_SIZE * designScale; bgResizeBaseH = CANVAS_SIZE * designScale;
  }
  return true;
}

document.querySelectorAll('.bg-corner-handle').forEach(handle => {
  handle.addEventListener('mousedown', e => {
    e.stopPropagation();
    if (!slides.length) return;
    const slide = slides[currentSlideIdx];
    const rect = getBgImageRect(slide);
    if (!rect) return;
    const corner = handle.dataset.corner;
    draggingBgResize = corner;
    // Anchor = opposite corner in canvas-pixel space
    const { dx, dy, dw, dh } = rect;
    bgResizeAnchorX = corner === 'tl' || corner === 'bl' ? dx + dw : dx;
    bgResizeAnchorY = corner === 'tl' || corner === 'tr' ? dy + dh : dy;
    bgResizeStartRect = { dx, dy, dw, dh };
    if (!computeBgResizeBase(slide)) { draggingBgResize = null; return; }
    e.preventDefault();
  });
});

// Edge-midpoint handles — drag one edge to resize along that axis while the
// OPPOSITE edge stays anchored (same idea as corner resize, but one axis).
document.querySelectorAll('.bg-edge-handle').forEach(handle => {
  handle.addEventListener('mousedown', e => {
    e.stopPropagation();
    if (!slides.length) return;
    const slide = slides[currentSlideIdx];
    const rect = getBgImageRect(slide);
    if (!rect) return;
    const edge = handle.dataset.edge; // 't'|'b'|'l'|'r'
    draggingBgResize = edge;
    const { dx, dy, dw, dh } = rect;
    // Anchor = the opposite edge's fixed coordinate on the dragged axis.
    // (The other axis is centered on the image center.)
    bgResizeAnchorX = edge === 'l' ? dx + dw : dx;        // dragging left → right edge fixed
    bgResizeAnchorY = edge === 't' ? dy + dh : dy;        // dragging top  → bottom edge fixed
    bgResizeStartRect = { dx, dy, dw, dh };
    if (!computeBgResizeBase(slide)) { draggingBgResize = null; return; }
    e.preventDefault();
  });
});

// Text-box width handle — start width resize drag
const textWidthHandle = document.getElementById('text-width-handle');
if (textWidthHandle) {
  textWidthHandle.addEventListener('mousedown', e => {
    e.stopPropagation();
    e.preventDefault();
    if (!slides.length || selectedTextIdx === null) return;
    const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
    draggingTextWidth = true;
    // Anchor to the *visible* right edge of the box the user grabbed (the
    // text-extent edge), measured in design px, so the edge stays glued to the
    // cursor with no initial jump. During the drag the box is drawn from tb.x
    // with width tb.width, so we store the gap between the cursor and that
    // visible edge, plus the box's left edge, to reconstruct width absolutely.
    const fmt = EXPORT_FORMATS[previewSize];
    const scaleX = fmt.w / CANVAS_SIZE;
    const boxRect = textWidthHandle.parentElement.getBoundingClientRect();
    const canvasRect = mainCanvas.getBoundingClientRect();
    // Visible right edge in design-x:
    const visibleRightDesign = (boxRect.right - canvasRect.left) / (scale * scaleX);
    const d = screenToDesign(e.clientX, e.clientY);
    textWidthGrabOffset = visibleRightDesign - d.x; // cursor-to-edge gap (design px)
    overlay.style.cursor = 'ew-resize';
  });
}

overlay.addEventListener('mousedown', e => {
  if (!slides.length) return;
  // Corner/edge resize handles have their own handler
  if (e.target.classList.contains('bg-corner-handle')) return;
  if (e.target.classList.contains('bg-edge-handle')) return;
  const slide = slides[currentSlideIdx];
  const { x: mx, y: my } = screenToDesign(e.clientX, e.clientY);

  const hit = hitTestTextBlocks(slide, mx, my);
  const imgHit = hit < 0 ? hitTestBgImages(slide, mx, my) : -1;

  // Resolve what was clicked, if anything.
  const hitType = hit >= 0 ? 'text' : (imgHit >= 0 ? 'image' : null);
  const hitIdx  = hit >= 0 ? hit : imgHit;

  // Shift+click toggles the clicked item in the multi-selection (no drag).
  if (e.shiftKey) {
    if (hitType) {
      toggleItemInSelection(hitType, hitIdx);
      refreshTextPanel();
      refreshBgImageList();
      syncBgImageControls();
      updateBgSelectionBox();
      updateTextSelectionBox();
    }
    return;
  }

  if (hitType === 'text') {
    const alreadySelected = isItemSelected('text', hit);
    // selectTextBlock() routes through selectSingleItem() and also refreshes
    // the text list/panel so the editor appears on click.
    if (!alreadySelected) selectTextBlock(hit);
    // If this click is part of a multi-selection, arm a GROUP drag; otherwise
    // fall through to the legacy single-block pending drag.
    if (selectedItems.length > 1) {
      startGroupDrag(e.clientX, e.clientY);
      overlay.style.cursor = 'grabbing';
    } else {
      const tb = slide.textBlocks[hit];
      dragOffX = mx - tb.x;
      dragOffY = my - tb.y;
      dragStartClientX = e.clientX;
      dragStartClientY = e.clientY;
      dragPending = true;
      overlay.style.cursor = 'grabbing';
    }
    updateBgSelectionBox();
    updateTextSelectionBox();
  } else if (hitType === 'image') {
    const alreadySelected = isItemSelected('image', imgHit);
    if (!alreadySelected) selectSingleItem('image', imgHit);
    if (selectedItems.length > 1) {
      startGroupDrag(e.clientX, e.clientY);
      overlay.style.cursor = 'grabbing';
    } else {
      // Single image selected — preserve the original two-step behavior:
      // first click selects, second click (on the already-selected image) pans.
      if (bgSelected && selectedBgImageIdx === imgHit) {
        const layer = getSelectedBgImage(slide);
        draggingBg = true;
        bgDragStartX = e.clientX;
        bgDragStartY = e.clientY;
        bgDragOriginX = layer.x || 0;
        bgDragOriginY = layer.y || 0;
        overlay.style.cursor = 'grabbing';
      } else {
        overlay.style.cursor = 'grab';
      }
    }
    refreshTextPanel();
    refreshBgImageList();
    syncBgImageControls();
    updateBgSelectionBox();
    updateTextSelectionBox();
  } else {
    // Click on empty area — deselect everything
    clearSelection();
    refreshTextPanel();
    overlay.style.cursor = 'default';
    updateBgSelectionBox();
    updateTextSelectionBox();
  }
});

// Snapshot the positions of all selected items and arm a group drag.
function startGroupDrag(clientX, clientY) {
  const slide = slides[currentSlideIdx];
  groupDragOrigins = selectedItems.map(it => {
    if (it.type === 'text') {
      const tb = slide.textBlocks[it.idx];
      return { type: 'text', idx: it.idx, x: tb ? tb.x : 0, y: tb ? tb.y : 0 };
    }
    const layer = getBgImages(slide)[it.idx];
    return { type: 'image', idx: it.idx, x: layer ? (layer.x || 0) : 0, y: layer ? (layer.y || 0) : 0 };
  });
  groupDragStartX = clientX;
  groupDragStartY = clientY;
  draggingGroup = true;
}

overlay.addEventListener('dblclick', e => {
  if (!slides.length) return;
  const slide = slides[currentSlideIdx];
  const { x: mx, y: my } = screenToDesign(e.clientX, e.clientY);

  // Use a generous font-size-based hit estimate — no font measurement needed,
  // so this works reliably for loaded/saved slides regardless of font load state.
  const hit = hitTestTextBlocks(slide, mx, my);

  if (hit >= 0) {
    selectTextBlock(hit);
    // Use setTimeout so the panel is fully visible before we focus
    setTimeout(() => {
      const ta = document.getElementById('text-content');
      if (ta) { ta.focus(); ta.select(); }
    }, 0);
  } else {
    const imgHit = hitTestBgImages(slide, mx, my);
    if (imgHit >= 0) {
      // Double-click on a bg image resets that layer's pan and zoom to defaults
      selectSingleItem('image', imgHit);
      const layer = getSelectedBgImage(slide);
      pushUndo();
      layer.x = 0;
      layer.y = 0;
      layer.scale = 100;
      refreshBgImageList();
      syncBgImageControls();
      renderCurrent();
      scheduleSave();
    }
  }
});

// Update cursor on hover
overlay.addEventListener('mousemove', e => {
  if (dragging || draggingBg || draggingBgResize || draggingTextWidth || draggingGroup) return;
  if (!slides.length) return;
  const slide = slides[currentSlideIdx];
  const { x: mx, y: my } = screenToDesign(e.clientX, e.clientY);
  const hitIdx = hitTestTextBlocks(slide, mx, my);
  if (hitIdx >= 0) {
    // Show grab cursor on selected text, pointer on unselected
    overlay.style.cursor = isItemSelected('text', hitIdx) ? 'grab' : 'pointer';
  } else {
    const imgHit = hitTestBgImages(slide, mx, my);
    if (imgHit >= 0) {
      overlay.style.cursor = isItemSelected('image', imgHit) ? 'grab' : 'pointer';
    } else {
      overlay.style.cursor = 'default';
    }
  }
});

window.addEventListener('mousemove', e => {
  if (draggingBgResize) {
    const slide = slides[currentSlideIdx];
    const fmt = EXPORT_FORMATS[previewSize];
    // Mouse position in canvas-pixel space
    const canvasRect = mainCanvas.getBoundingClientRect();
    const mouseCanvasX = (e.clientX - canvasRect.left) / scale;
    const mouseCanvasY = (e.clientY - canvasRect.top)  / scale;

    const baseAspect = bgResizeBaseW / Math.max(bgResizeBaseH, 0.001);
    const isEdge = draggingBgResize === 't' || draggingBgResize === 'b' ||
                   draggingBgResize === 'l' || draggingBgResize === 'r';

    if (isEdge) {
      // Edge-midpoint drag: resize along the dragged axis while the OPPOSITE
      // edge stays anchored. The dragged-axis dimension is the mouse distance
      // to that fixed edge; the other axis follows the aspect ratio and stays
      // centered on the original image center.
      const horizontal = draggingBgResize === 'l' || draggingBgResize === 'r';
      // Original image center on the cross axis (stays fixed).
      const crossCenter = horizontal
        ? bgResizeStartRect.dy + bgResizeStartRect.dh / 2
        : bgResizeStartRect.dx + bgResizeStartRect.dw / 2;
      // Mouse distance from the anchored (opposite) edge = new dragged-axis size.
      const dist = horizontal
        ? Math.abs(mouseCanvasX - bgResizeAnchorX)
        : Math.abs(mouseCanvasY - bgResizeAnchorY);
      let newAbsDw, newAbsDh;
      if (horizontal) {
        newAbsDw = Math.max(50, dist);
        newAbsDh = newAbsDw / baseAspect;
      } else {
        newAbsDh = Math.max(50, dist);
        newAbsDw = newAbsDh * baseAspect;
      }
      const newScale = Math.round(Math.max(10, Math.min(150, (newAbsDw / bgResizeBaseW) * 100)));
      // Drawn dims from the aspect-correct scale.
      const drawnW = bgResizeBaseW * (newScale / 100);
      const drawnH = bgResizeBaseH * (newScale / 100);
      // Position the drawn rect: anchored edge fixed on the dragged axis,
      // centered on the cross axis.
      let drawnDx, drawnDy;
      if (horizontal) {
        drawnDx = draggingBgResize === 'l' ? bgResizeAnchorX - drawnW : bgResizeAnchorX;
        drawnDy = crossCenter - drawnH / 2;
      } else {
        drawnDy = draggingBgResize === 't' ? bgResizeAnchorY - drawnH : bgResizeAnchorY;
        drawnDx = crossCenter - drawnW / 2;
      }
      const newCenterX = drawnDx + drawnW / 2;
      const newCenterY = drawnDy + drawnH / 2;
      const newOffX = (newCenterX - fmt.w / 2) * (1080 / fmt.w);
      const newOffY = (newCenterY - fmt.h / 2) * (1080 / fmt.w);

      const layer = getSelectedBgImage(slide);
      if (!layer) { draggingBgResize = null; return; }
      layer.scale = newScale;
      const yLim = bgImageYLimit();
      layer.x = Math.round(Math.max(-540, Math.min(540, newOffX)));
      layer.y = Math.round(Math.max(-yLim, Math.min(yLim, newOffY)));

      document.getElementById('bg-img-scale').value = newScale;
      document.getElementById('bg-img-scale-val').textContent = newScale + '%';
      document.getElementById('bg-img-x').value = layer.x;
      document.getElementById('bg-img-y').value = layer.y;
      document.getElementById('bg-img-x-val').textContent = layer.x;
      document.getElementById('bg-img-y-val').textContent = layer.y;
      renderCurrent();
      updateBgSelectionBox();
      return;
    }

    // Signed delta from anchor to mouse
    let rawDw = mouseCanvasX - bgResizeAnchorX;
    let rawDh = mouseCanvasY - bgResizeAnchorY;

    // The renderer always draws the image at its natural aspect ratio (height
    // is derived from width via that aspect), so a corner resize must be
    // aspect-preserving too — otherwise the drawn height would not match the
    // dragged mouse Y and the anchored corner would appear to float. Constrain
    // to the base aspect using whichever axis the user dragged further, then
    // derive the scale from that same axis so the drawn rect exactly matches
    // the anchored math and the opposite corner stays fixed.
    // (baseAspect is already computed above, before the edge-handle branch.)
    const signW = Math.sign(rawDw || 1);
    const signH = Math.sign(rawDh || 1);
    let absDw = Math.abs(rawDw);
    let absDh = Math.abs(rawDh);
    if (absDw / Math.max(absDh, 0.001) > baseAspect) {
      // Width-dominant: height follows aspect
      absDh = absDw / baseAspect;
    } else {
      // Height-dominant: width follows aspect
      absDw = absDh * baseAspect;
    }
    // Enforce a minimum size, preserving aspect
    if (absDw < 50) { absDw = 50; absDh = 50 / baseAspect; }
    if (absDh < 50) { absDh = 50; absDw = 50 * baseAspect; }
    rawDw = signW * absDw;
    rawDh = signH * absDh;

    // New rect: anchor corner is always at bgResizeAnchorX/Y
    const newDx = bgResizeAnchorX + Math.min(0, rawDw);
    const newDy = bgResizeAnchorY + Math.min(0, rawDh);
    const newAbsDw = Math.abs(rawDw);
    const newAbsDh = Math.abs(rawDh);

    // New scale derived from new width vs base width at scale=100
    const newScale = Math.round(Math.max(10, Math.min(150, (newAbsDw / bgResizeBaseW) * 100)));

    // Recompute the actual drawn height from the aspect-correct scale so the
    // anchored corner stays exactly fixed (the renderer derives height from
    // width via the image's natural aspect, not from rawDh).
    const drawnW = bgResizeBaseW * (newScale / 100);
    const drawnH = bgResizeBaseH * (newScale / 100);
    const drawnDx = bgResizeAnchorX + Math.min(0, signW * drawnW);
    const drawnDy = bgResizeAnchorY + Math.min(0, signH * drawnH);

    // New center → new bgImageX/Y offset in 1080-space
    const newCenterX = drawnDx + drawnW / 2;
    const newCenterY = drawnDy + drawnH / 2;
    const newOffX = (newCenterX - fmt.w / 2) * (1080 / fmt.w);
    const newOffY = (newCenterY - fmt.h / 2) * (1080 / fmt.w);

    const layer = getSelectedBgImage(slide);
    if (!layer) { draggingBgResize = null; return; }
    layer.scale = newScale;
    const yLim = bgImageYLimit();
    layer.x = Math.round(Math.max(-540, Math.min(540, newOffX)));
    layer.y = Math.round(Math.max(-yLim, Math.min(yLim, newOffY)));

    document.getElementById('bg-img-scale').value = newScale;
    document.getElementById('bg-img-scale-val').textContent = newScale + '%';
    document.getElementById('bg-img-x').value = layer.x;
    document.getElementById('bg-img-y').value = layer.y;
    document.getElementById('bg-img-x-val').textContent = layer.x;
    document.getElementById('bg-img-y-val').textContent = layer.y;
    renderCurrent();
    return;
  }
  if (draggingBg) {
    const slide = slides[currentSlideIdx];
    const dx = (e.clientX - bgDragStartX) / scale;
    const dy = (e.clientY - bgDragStartY) / scale;
    const fmt = EXPORT_FORMATS[previewSize];
    const designDx = Math.round(dx * (CANVAS_SIZE / fmt.w));
    const designDy = Math.round(dy * (CANVAS_SIZE / fmt.w));
    const layer = getSelectedBgImage(slide);
    if (!layer) { draggingBg = false; return; }
    const yLim = bgImageYLimit();
    layer.x = Math.max(-540, Math.min(540, bgDragOriginX + designDx));
    layer.y = Math.max(-yLim, Math.min(yLim, bgDragOriginY + designDy));
    document.getElementById('bg-img-x').value = layer.x;
    document.getElementById('bg-img-y').value = layer.y;
    document.getElementById('bg-img-x-val').textContent = layer.x;
    document.getElementById('bg-img-y-val').textContent = layer.y;
    renderCurrent();
    updateBgSelectionBox();
    return;
  }
  // Text-box width resize drag — absolute positioning: the box's right edge
  // (tb.x + tb.width) is kept glued to the cursor via the grab offset captured
  // at mousedown, so it tracks 1:1 with no initial jump.
  if (draggingTextWidth && selectedTextIdx !== null) {
    const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
    // Absolute: the box's right edge follows the cursor directly.
    const d = screenToDesign(e.clientX, e.clientY);
    const newW = Math.max(40, (d.x + textWidthGrabOffset) - tb.x);
    tb.width = newW;
    const wInput = document.getElementById('pos-w');
    if (wInput) wInput.value = newW;
    syncPosLabels(tb.x, tb.y, newW);
    renderCurrent();
    return;
  }
  // Activate a pending text drag once the pointer moves past the threshold.
  if (dragPending && !dragging) {
    if (Math.hypot(e.clientX - dragStartClientX, e.clientY - dragStartClientY) >= DRAG_THRESHOLD_PX) {
      dragging = true;
      dragPending = false;
    } else {
      return;
    }
  }
  // Group drag — move every selected item by the shared mouse delta.
  if (draggingGroup) {
    const slide = slides[currentSlideIdx];
    const fmt = EXPORT_FORMATS[previewSize];
    const dx = (e.clientX - groupDragStartX) / scale;
    const dy = (e.clientY - groupDragStartY) / scale;
    const designDx = dx * (CANVAS_SIZE / fmt.w);
    const designDy = dy * (CANVAS_SIZE / fmt.w);
    const yLim = bgImageYLimit();
    groupDragOrigins.forEach(o => {
      if (o.type === 'text') {
        const tb = slide.textBlocks[o.idx];
        if (!tb) return;
        tb.x = Math.round(o.x + designDx);
        tb.y = Math.round(o.y + designDy);
      } else {
        const layer = getBgImages(slide)[o.idx];
        if (!layer) return;
        layer.x = Math.round(Math.max(-540, Math.min(540, o.x + designDx)));
        layer.y = Math.round(Math.max(-yLim, Math.min(yLim, o.y + designDy)));
      }
    });
    renderCurrent();
    updateBgSelectionBox();
    updateTextSelectionBox();
    return;
  }
  if (!dragging || selectedTextIdx === null) return;
  const { x: mx, y: my } = screenToDesign(e.clientX, e.clientY);
  const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
  tb.x = Math.round(mx - dragOffX);
  tb.y = Math.round(my - dragOffY);
  document.getElementById('pos-x').value = tb.x;
  document.getElementById('pos-y').value = tb.y;
  syncPosLabels(tb.x, tb.y);
  renderCurrent();
});

window.addEventListener('mouseup', () => {
  if (draggingBgResize) {
    draggingBgResize = null;
    updateBgSelectionBox();
    pushUndoDebounced();
    scheduleSave();
  }
  if (draggingBg) {
    draggingBg = false;
    overlay.style.cursor = bgSelected ? 'grab' : 'default';
    pushUndoDebounced();
    scheduleSave();
  }
  if (dragging) {
    pushUndoDebounced();
    scheduleSave();
  }
  if (draggingGroup) {
    draggingGroup = false;
    groupDragOrigins = [];
    pushUndoDebounced();
    scheduleSave();
  }
  if (draggingTextWidth) {
    draggingTextWidth = false;
    // Round to a clean integer now that the drag is over, and re-render so the
    // selection box snaps back to hugging the text extent.
    if (selectedTextIdx !== null && slides.length) {
      const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
      tb.width = Math.round(tb.width);
      const wInput = document.getElementById('pos-w');
      if (wInput) wInput.value = tb.width;
      syncPosLabels(tb.x, tb.y, tb.width);
    }
    renderCurrent();
    pushUndoDebounced();
    scheduleSave();
  }
  dragging = false;
  dragPending = false;
  if (!draggingBg && !draggingBgResize && !draggingTextWidth && !draggingGroup) overlay.style.cursor = 'default';
});

// ─── SLIDES MANAGEMENT ────────────────────────────────────────────────────────

function addSlide(copyFrom) {
  pushUndo();
  const s = copyFrom ? JSON.parse(JSON.stringify(copyFrom)) : makeSlide();
  slides.push(s);
  currentSlideIdx = slides.length - 1;
  clearSelection();
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
}

function duplicateSlide() {
  if (!slides.length) return;
  addSlide(slides[currentSlideIdx]);
}

function deleteSlide(i) {
  if (slides.length <= 1) { alert('Cannot delete the last slide.'); return; }
  pushUndo();
  slides.splice(i, 1);
  currentSlideIdx = Math.min(currentSlideIdx, slides.length - 1);
  clearSelection();
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
}

function selectSlide(i) {
  currentSlideIdx = i;
  // Auto-select first text block if the slide has any, so the right panel stays visible
  const blocks = slides[i] && slides[i].textBlocks;
  if (blocks && blocks.length > 0) selectSingleItem('text', 0);
  else clearSelection();
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
  updateBgSelectionBox();
}

// Multi-select state
const selectedSlides = new Set();
let slideDragSrcIdx = null;

function refreshSlidePicker() {
  const list = document.getElementById('slides-list');
  list.innerHTML = '';
  slides.forEach((s, i) => {
    const div = document.createElement('div');
    let cls = 'slide-thumb';
    if (i === currentSlideIdx) cls += ' active';
    if (selectedSlides.has(i)) cls += ' selected';
    div.className = cls;
    div.draggable = true;
    div.dataset.idx = i;
    div.innerHTML = `<canvas width="${CANVAS_SIZE}" height="${CANVAS_SIZE}"></canvas>
      <span class="slide-num">${i + 1}</span>
      <button class="slide-del" title="Delete slide">✕</button>`;

    // Click: select slide; Shift+click: toggle multi-select
    div.addEventListener('click', e => {
      if (e.shiftKey) {
        if (selectedSlides.has(i)) {
          selectedSlides.delete(i);
        } else {
          selectedSlides.add(i);
        }
        refreshSlidePicker();
        updateBulkDelBtn();
      } else {
        selectedSlides.clear();
        selectSlide(i);
        updateBulkDelBtn();
      }
    });

    // Delete button
    div.querySelector('.slide-del').addEventListener('click', e => {
      e.stopPropagation();
      deleteSlide(i);
    });

    // Drag-to-reorder
    div.addEventListener('dragstart', e => {
      slideDragSrcIdx = i;
      div.classList.add('dragging-src');
      e.dataTransfer.effectAllowed = 'move';
    });
    div.addEventListener('dragend', () => {
      div.classList.remove('dragging-src');
      document.querySelectorAll('.slide-thumb').forEach(t => t.classList.remove('drag-over'));
    });
    div.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      document.querySelectorAll('.slide-thumb').forEach(t => t.classList.remove('drag-over'));
      div.classList.add('drag-over');
    });
    div.addEventListener('dragleave', () => {
      div.classList.remove('drag-over');
    });
    div.addEventListener('drop', e => {
      e.preventDefault();
      div.classList.remove('drag-over');
      const destIdx = parseInt(div.dataset.idx);
      if (slideDragSrcIdx === null || slideDragSrcIdx === destIdx) return;
      pushUndo();
      const moved = slides.splice(slideDragSrcIdx, 1)[0];
      slides.splice(destIdx, 0, moved);
      // Keep currentSlideIdx tracking the same slide
      if (currentSlideIdx === slideDragSrcIdx) {
        currentSlideIdx = destIdx;
      } else if (slideDragSrcIdx < currentSlideIdx && destIdx >= currentSlideIdx) {
        currentSlideIdx--;
      } else if (slideDragSrcIdx > currentSlideIdx && destIdx <= currentSlideIdx) {
        currentSlideIdx++;
      }
      selectedSlides.clear();
      slideDragSrcIdx = null;
      refreshSlidePicker();
      loadSlideToUI();
      renderCurrent();
      scheduleSave();
    });

    list.appendChild(div);
    // Render thumbnail
    const thumbCanvas = div.querySelector('canvas');
    const sFmt = EXPORT_FORMATS[previewSize];
    const off = renderSlideToSize(s, sFmt.w, sFmt.h);
    const tc = thumbCanvas.getContext('2d');
    tc.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const tScale = Math.min(CANVAS_SIZE / sFmt.w, CANVAS_SIZE / sFmt.h);
    const tw = sFmt.w * tScale, th = sFmt.h * tScale;
    const tx = (CANVAS_SIZE - tw) / 2, ty = (CANVAS_SIZE - th) / 2;
    tc.fillStyle = '#111';
    tc.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    tc.drawImage(off, tx, ty, tw, th);
  });
  document.getElementById('slide-count').textContent =
    slides.length + (slides.length === 1 ? ' slide' : ' slides');
}

function updateBulkDelBtn() {
  const n = selectedSlides.size;
  const btn = document.getElementById('bulk-del-btn');
  if (btn) btn.style.display = n > 0 ? '' : 'none';
  const cnt = document.getElementById('sel-count');
  if (cnt) {
    cnt.style.display = n > 0 ? '' : 'none';
    cnt.textContent = n + ' selected';
  }
}

function bulkDeleteSlides() {
  if (!selectedSlides.size) return;
  pushUndo();
  // Delete in descending order to preserve indices
  const toDelete = Array.from(selectedSlides).sort((a, b) => b - a);
  toDelete.forEach(i => slides.splice(i, 1));
  selectedSlides.clear();
  currentSlideIdx = Math.max(0, Math.min(currentSlideIdx, slides.length - 1));
  if (!slides.length) {
    refreshSlidePicker();
    loadSlideToUI();
    renderCurrent();
    updateBulkDelBtn();
    return;
  }
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
  updateBulkDelBtn();
  scheduleSave();
}

function updateThumbs() {
  const thumbs = document.querySelectorAll('.slide-thumb');
  thumbs.forEach((t, i) => {
    if (!slides[i]) return;
    const c = t.querySelector('canvas');
    if (c) {
      const sFmt = EXPORT_FORMATS[previewSize];
      const off = renderSlideToSize(slides[i], sFmt.w, sFmt.h);
      const tc = c.getContext('2d');
      tc.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      const tScale = Math.min(CANVAS_SIZE / sFmt.w, CANVAS_SIZE / sFmt.h);
      const tw = sFmt.w * tScale, th = sFmt.h * tScale;
      const tx = (CANVAS_SIZE - tw) / 2, ty = (CANVAS_SIZE - th) / 2;
      tc.fillStyle = '#111';
      tc.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      tc.drawImage(off, tx, ty, tw, th);
    }
    t.className = 'slide-thumb' + (i === currentSlideIdx ? ' active' : '');
  });
}

// ─── LOAD SLIDE → UI ──────────────────────────────────────────────────────────

function loadSlideToUI() {
  if (!slides.length) return;
  const s = slides[currentSlideIdx];

  // If the slide has image layers, open on the Image tab so its controls are
  // visible; otherwise open on the slide's backdrop tab (solid/gradient).
  const imgArr = getBgImages(s);
  if (selectedBgImageIdx >= imgArr.length) selectedBgImageIdx = Math.max(0, imgArr.length - 1);
  bgType = imgArr.length ? 'image' : (s.bgType || 'solid');
  document.getElementById('bg-solid-tab').classList.toggle('active', bgType === 'solid');
  document.getElementById('bg-grad-tab').classList.toggle('active', bgType === 'gradient');
  document.getElementById('bg-image-tab').classList.toggle('active', bgType === 'image');
  document.getElementById('bg-solid-ctrl').style.display = bgType === 'solid' ? '' : 'none';
  document.getElementById('bg-grad-ctrl').style.display  = bgType === 'gradient' ? '' : 'none';
  document.getElementById('bg-image-ctrl').style.display = bgType === 'image' ? '' : 'none';
  document.getElementById('bg-color').value   = s.bgColor;
  document.getElementById('grad-c1').value    = s.gradC1;
  document.getElementById('grad-c2').value    = s.gradC2;
  document.getElementById('grad-angle').value = s.gradAngle;
  document.getElementById('grad-angle-val').textContent = s.gradAngle + '°';
  // Image layers
  refreshBgImageList();
  syncBgImageControls();

  refreshTextList();
  refreshTextPanel();
}

// ─── TEXT BLOCKS ──────────────────────────────────────────────────────────────

function addTextBlock() {
  if (!slides.length) return;
  pushUndo();
  const tb = makeTextBlock();
  const blocks = slides[currentSlideIdx].textBlocks;
  // Inherit the formatting of an existing block on this slide (prefer the
  // currently-selected one, else the last), so new text matches the style the
  // user already set up. Position and text stay fresh so blocks don't stack.
  const src = (selectedTextIdx !== null && blocks[selectedTextIdx])
    ? blocks[selectedTextIdx]
    : blocks[blocks.length - 1];
  if (src) {
    const STYLE_KEYS = [
      'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'uppercase',
      'color', 'opacity', 'align', 'lineHeight', 'letterSpacing', 'width',
      'shadowOn', 'shadowColor', 'shadowOpacity', 'shadowX', 'shadowY', 'shadowBlur',
      'strokeOn', 'strokeColor', 'strokeWidth'
    ];
    STYLE_KEYS.forEach(k => { tb[k] = src[k]; });
    // Nudge down so the new block doesn't sit exactly on top of the source.
    tb.y = src.y + Math.round(src.fontSize * src.lineHeight) + 20;
  }
  slides[currentSlideIdx].textBlocks.push(tb);
  selectTextBlock(slides[currentSlideIdx].textBlocks.length - 1);
  renderCurrent();
}

function deleteTextBlock(i) {
  pushUndo();
  slides[currentSlideIdx].textBlocks.splice(i, 1);
  // Indices shifted — drop the multi-selection and re-select a single block.
  const blocks = slides[currentSlideIdx].textBlocks;
  if (!blocks.length) clearSelection();
  else selectSingleItem('text', Math.min(i, blocks.length - 1));
  refreshTextList();
  refreshTextPanel();
  renderCurrent();
}

function selectTextBlock(i) {
  selectSingleItem('text', i);
  refreshTextList();
  refreshTextPanel();
  updateTextSelectionBox();
}

function refreshTextList() {
  const list = document.getElementById('text-blocks-list');
  list.innerHTML = '';
  if (!slides.length) return;
  slides[currentSlideIdx].textBlocks.forEach((tb, i) => {
    const d = document.createElement('div');
    d.className = 'text-block-item' + (i === selectedTextIdx ? ' active' : '');
    d.innerHTML = `<div class="tbi-label">Block ${i + 1}</div>
      <div class="tbi-preview">${tb.text.replace(/\n/g, ' ') || '(empty)'}</div>
      <button class="tbi-del" onclick="event.stopPropagation();deleteTextBlock(${i})" title="Delete block">✕</button>`;
    d.onclick = () => selectTextBlock(i);
    list.appendChild(d);
  });
}

function refreshTextPanel() {
  const show = selectedTextIdx !== null &&
    slides.length &&
    slides[currentSlideIdx].textBlocks[selectedTextIdx];

  ['text-editor','font-controls','color-controls','align-controls','effects-controls','pos-controls'].forEach(id => {
    document.getElementById(id).style.display = show ? '' : 'none';
  });
  if (!show) return;

  const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];

  document.getElementById('text-content').value = tb.text;

  // Font family — guard against blocks saved with an empty/corrupt family
  // (a prior bug let tb.fontFamily become '' when the hidden select had no
  // matching option). Fall back to the registry default so the UI never
  // shows a blank family.
  if (!tb.fontFamily) tb.fontFamily = FONT_REGISTRY[0].family;
  const famSelPanel = document.getElementById('font-family');
  if (![...famSelPanel.options].some(o => o.value === tb.fontFamily)) {
    const opt = document.createElement('option');
    opt.value = tb.fontFamily;
    opt.textContent = tb.fontFamily;
    famSelPanel.appendChild(opt);
  }
  famSelPanel.value = tb.fontFamily;
  buildFontWeightSelect(tb.fontFamily);
  document.getElementById('font-weight').value = tb.fontWeight;
  document.getElementById('font-style').value  = tb.fontStyle;

  // Size
  document.getElementById('font-size').value     = tb.fontSize;
  document.getElementById('font-size-num').value = tb.fontSize;

  // Leading / tracking
  document.getElementById('line-height').value = tb.lineHeight;
  document.getElementById('lh-val').textContent = tb.lineHeight.toFixed(2);
  document.getElementById('letter-spacing').value = tb.letterSpacing;
  document.getElementById('ls-val').textContent = tb.letterSpacing.toFixed(1);

  // Color / opacity
  document.getElementById('text-color').value   = tb.color;
  document.getElementById('text-opacity').value = tb.opacity;
  document.getElementById('op-val').textContent = tb.opacity + '%';

  // Alignment + uppercase
  ['left','center','right'].forEach(a => {
    document.getElementById('align-' + a).classList.toggle('active', tb.align === a);
  });
  document.getElementById('text-uppercase').checked = !!tb.uppercase;

  // Effects — shadow
  document.getElementById('shadow-on').checked        = !!tb.shadowOn;
  document.getElementById('shadow-color').value        = tb.shadowColor  || '#000000';
  document.getElementById('shadow-opacity').value      = tb.shadowOpacity ?? 60;
  document.getElementById('sh-op-val').textContent     = (tb.shadowOpacity ?? 60) + '%';
  document.getElementById('shadow-x').value            = tb.shadowX    ?? 4;
  document.getElementById('sh-x-val').textContent      = tb.shadowX    ?? 4;
  document.getElementById('shadow-y').value            = tb.shadowY    ?? 4;
  document.getElementById('sh-y-val').textContent      = tb.shadowY    ?? 4;
  document.getElementById('shadow-blur').value         = tb.shadowBlur ?? 8;
  document.getElementById('sh-bl-val').textContent     = tb.shadowBlur ?? 8;
  document.getElementById('shadow-fields').style.display = tb.shadowOn ? '' : 'none';

  // Effects — stroke
  document.getElementById('stroke-on').checked         = !!tb.strokeOn;
  document.getElementById('stroke-color').value         = tb.strokeColor || '#000000';
  document.getElementById('stroke-width').value         = tb.strokeWidth ?? 2;
  document.getElementById('sw-val').textContent         = (tb.strokeWidth ?? 2) + 'px';
  document.getElementById('stroke-fields').style.display = tb.strokeOn ? '' : 'none';

  // Position
  document.getElementById('pos-x').value = tb.x;
  document.getElementById('pos-y').value = tb.y;
  document.getElementById('pos-w').value = tb.width;
  syncPosLabels(tb.x, tb.y, tb.width);
}

function toggleShadowFields() {
  const on = document.getElementById('shadow-on').checked;
  document.getElementById('shadow-fields').style.display = on ? '' : 'none';
}

function toggleStrokeFields() {
  const on = document.getElementById('stroke-on').checked;
  document.getElementById('stroke-fields').style.display = on ? '' : 'none';
}

function updateTextBlock() {
  if (selectedTextIdx === null || !slides.length) return;
  pushUndoDebounced();
  const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
  tb.text          = document.getElementById('text-content').value;
  // Never persist an empty family — if the select somehow has no valid value,
  // keep the block's existing family rather than corrupting it to ''.
  const famVal = document.getElementById('font-family').value;
  if (famVal) tb.fontFamily = famVal;
  tb.fontWeight    = document.getElementById('font-weight').value;
  tb.fontStyle     = document.getElementById('font-style').value;
  tb.fontSize      = parseInt(document.getElementById('font-size').value);
  tb.lineHeight    = parseFloat(document.getElementById('line-height').value);
  tb.letterSpacing = parseFloat(document.getElementById('letter-spacing').value);
  tb.color         = document.getElementById('text-color').value;
  tb.opacity       = parseInt(document.getElementById('text-opacity').value);
  tb.uppercase     = document.getElementById('text-uppercase').checked;
  // Effects
  tb.shadowOn      = document.getElementById('shadow-on').checked;
  tb.shadowColor   = document.getElementById('shadow-color').value;
  tb.shadowOpacity = parseInt(document.getElementById('shadow-opacity').value);
  tb.shadowX       = parseInt(document.getElementById('shadow-x').value);
  tb.shadowY       = parseInt(document.getElementById('shadow-y').value);
  tb.shadowBlur    = parseInt(document.getElementById('shadow-blur').value);
  tb.strokeOn      = document.getElementById('stroke-on').checked;
  tb.strokeColor   = document.getElementById('stroke-color').value;
  tb.strokeWidth   = parseInt(document.getElementById('stroke-width').value);
  refreshTextList();
  renderCurrent();
  // Google faces load async — re-render once the chosen weight/style is ready.
  if (GOOGLE_FONT_MAP.has(tb.fontFamily)) {
    ensureGoogleFont(tb.fontFamily, tb.fontWeight, tb.fontStyle).then(() => {
      renderCurrent();
      refreshTextList();
    });
  }
}

function setAlign(a) {
  if (selectedTextIdx === null || !slides.length) return;
  slides[currentSlideIdx].textBlocks[selectedTextIdx].align = a;
  ['left','center','right'].forEach(id => {
    document.getElementById('align-' + id).classList.toggle('active', id === a);
  });
  renderCurrent();
}

function updatePosFromInput() {
  if (selectedTextIdx === null || !slides.length) return;
  pushUndoDebounced();
  const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
  tb.x     = parseInt(document.getElementById('pos-x').value) || 0;
  tb.y     = parseInt(document.getElementById('pos-y').value) || 0;
  tb.width = parseInt(document.getElementById('pos-w').value) || 500;
  renderCurrent();
}

function syncPosLabels(x, y, w) {
  document.getElementById('pos-x-val').textContent = Math.round(x);
  document.getElementById('pos-y-val').textContent = Math.round(y);
  if (w !== undefined) document.getElementById('pos-w-val').textContent = Math.round(w);
}

function snapPos(dir) {
  if (selectedTextIdx === null || !slides.length) return;
  pushUndo();
  const tb = slides[currentSlideIdx].textBlocks[selectedTextIdx];
  const canvasH = EXPORT_FORMATS[previewSize].h;  // use current format height for vertical snaps
  const pad = 48;
  // Snap the *visible text extent* (not just the wrap box) so alignment is respected.
  const textW = textBlockWidth(tb);
  let offL = 0;                                    // text left edge offset from tb.x
  if (tb.align === 'right')       offL = tb.width - textW;
  else if (tb.align === 'center') offL = (tb.width - textW) / 2;
  if (dir === 'left')     tb.x = pad - offL;
  if (dir === 'right')    tb.x = CANVAS_SIZE - pad - offL - textW;
  if (dir === 'center-h') tb.x = (CANVAS_SIZE - textW) / 2 - offL;
  if (dir === 'top')      tb.y = pad;
  if (dir === 'bottom') {
    tb.y = canvasH - textBlockHeight(tb) - pad;
  }
  if (dir === 'center-v') {
    tb.y = (canvasH - textBlockHeight(tb)) / 2;
  }
  document.getElementById('pos-x').value = Math.round(tb.x);
  document.getElementById('pos-y').value = Math.round(tb.y);
  syncPosLabels(tb.x, tb.y);
  renderCurrent();
}

function applyFormatToAll() {
  if (!slides.length) return;
  pushUndo();
  const srcBlocks = slides[currentSlideIdx].textBlocks;
  slides.forEach((slide, si) => {
    if (si === currentSlideIdx) return;
    // Build new text blocks: one per source block, preserving existing text by index
    slide.textBlocks = srcBlocks.map((src, bi) => {
      const existingText = (slide.textBlocks[bi] && slide.textBlocks[bi].text) || src.text;
      return {
        ...src,
        text: existingText,
        id: slide.textBlocks[bi] ? slide.textBlocks[bi].id : (Date.now() + si * 100 + bi),
      };
    });
  });
  updateThumbs();
}

// ─── BACKGROUND ───────────────────────────────────────────────────────────────

function setBgType(type) {
  // UI-only: switch which background panel is visible. The slide's rendered
  // bgType is NOT changed here — it only updates when the user actually picks
  // a color / gradient / image inside the tab (see updateBg, preset handlers,
  // setBgImage). This keeps the previous background visible while browsing tabs.
  bgType = type;
  document.getElementById('bg-solid-tab').classList.toggle('active', type === 'solid');
  document.getElementById('bg-grad-tab').classList.toggle('active', type === 'gradient');
  document.getElementById('bg-image-tab').classList.toggle('active', type === 'image');
  document.getElementById('bg-solid-ctrl').style.display = type === 'solid' ? '' : 'none';
  document.getElementById('bg-grad-ctrl').style.display  = type === 'gradient' ? '' : 'none';
  document.getElementById('bg-image-ctrl').style.display = type === 'image' ? '' : 'none';
}

// Upload one or more images — each is APPENDED as a new layer (never replaces).
function setBgImage(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length || !slides.length) return;
  pushUndo();
  const slide = slides[currentSlideIdx];
  const arr = getBgImages(slide);
  // Capture the current topmost layer's settings so newly-added images inherit
  // the same fit/position/zoom — saves re-sizing each upload to match.
  const ref = arr.length ? arr[arr.length - 1] : null;
  let pending = files.length;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const dataURL = e.target.result;
      ensureBgImageCached(dataURL);
      const img = bgImageCache.get(dataURL);
      const addLayer = () => {
        const layer = makeBgImage(dataURL);
        if (ref) {
          layer.fit = ref.fit;
          layer.x = ref.x;
          layer.y = ref.y;
          layer.scale = ref.scale;
        }
        arr.push(layer);
        if (--pending === 0) {
          bgType = 'image';
          selectSingleItem('image', arr.length - 1); // select the newly added image
          refreshBgImageList();
          syncBgImageControls();
          refreshTextPanel();
          renderCurrent();
          scheduleSave();
        }
      };
      if (img.complete) addLayer();
      else img.onload = addLayer;
    };
    reader.readAsDataURL(file);
  });
  event.target.value = '';
}

// Remove a specific image layer by index.
function removeBgImage(idx) {
  if (!slides.length) return;
  const slide = slides[currentSlideIdx];
  const arr = getBgImages(slide);
  if (idx < 0 || idx >= arr.length) return;
  pushUndo();
  arr.splice(idx, 1);
  // Indices shifted — drop the multi-selection and re-select a single image.
  if (!arr.length) clearSelection();
  else selectSingleItem('image', Math.min(idx, arr.length - 1));
  refreshBgImageList();
  syncBgImageControls();
  renderCurrent();
  scheduleSave();
}

// Move an image layer up (+1, toward the front/top) or down (-1, toward the
// back/bottom) in the stacking order. Index 0 is the bottom layer.
function moveBgImage(idx, dir) {
  if (!slides.length) return;
  const slide = slides[currentSlideIdx];
  const arr = getBgImages(slide);
  const to = idx + dir;
  if (idx < 0 || idx >= arr.length || to < 0 || to >= arr.length) return;
  pushUndo();
  const tmp = arr[idx];
  arr[idx] = arr[to];
  arr[to] = tmp;
  // Keep the same layer selected after the swap (single-select only; a
  // multi-selection's indices are now ambiguous, so collapse to the moved one).
  if (selectedItems.length > 1) selectSingleItem('image', to);
  else if (selectedBgImageIdx === idx) selectedBgImageIdx = to;
  else if (selectedBgImageIdx === to) selectedBgImageIdx = idx;
  refreshBgImageList();
  syncBgImageControls();
  renderCurrent();
  scheduleSave();
}

// Select which image layer the controls + canvas drag act on.
function selectBgImage(idx) {
  if (!slides.length) return;
  const arr = getBgImages(slides[currentSlideIdx]);
  if (idx < 0 || idx >= arr.length) return;
  selectSingleItem('image', idx);
  refreshBgImageList();
  syncBgImageControls();
  refreshTextPanel();
  renderCurrent();
}

// Remove the currently-selected image layer.
function clearBgImage() {
  removeBgImage(selectedBgImageIdx);
}

function updateBgImageFit() {
  if (!slides.length) return;
  const layer = getSelectedBgImage(slides[currentSlideIdx]);
  if (!layer) return;
  pushUndoDebounced();
  layer.fit = document.getElementById('bg-image-fit').value;
  renderCurrent();
}

function updateBgImageOffset() {
  if (!slides.length) return;
  const layer = getSelectedBgImage(slides[currentSlideIdx]);
  if (!layer) return;
  pushUndoDebounced();
  layer.x = parseInt(document.getElementById('bg-img-x').value) || 0;
  layer.y = parseInt(document.getElementById('bg-img-y').value) || 0;
  layer.scale = parseInt(document.getElementById('bg-img-scale').value) || 100;
  renderCurrent();
}

function updateBgImgColor() {
  if (!slides.length) return;
  pushUndoDebounced();
  slides[currentSlideIdx].bgColor = document.getElementById('bg-img-bgcolor').value;
  renderCurrent();
}

// Rebuild the thumbnail list of image layers in the Image tab.
function refreshBgImageList() {
  const list = document.getElementById('bg-image-list');
  if (!list) return;
  list.innerHTML = '';
  if (!slides.length) return;
  const arr = getBgImages(slides[currentSlideIdx]);
  arr.forEach((layer, i) => {
    const item = document.createElement('div');
    item.className = 'bg-img-item' + (i === selectedBgImageIdx ? ' active' : '');
    item.title = 'Select image ' + (i + 1);
    const img = document.createElement('img');
    img.src = layer.url;
    img.alt = 'Image ' + (i + 1);
    const del = document.createElement('button');
    del.className = 'bg-img-item-del';
    del.title = 'Remove this image';
    del.textContent = '✕';
    del.addEventListener('click', e => { e.stopPropagation(); removeBgImage(i); });
    item.appendChild(img);
    item.appendChild(del);
    // Layer-order controls (only when there's more than one image).
    if (arr.length > 1) {
      const up = document.createElement('button');
      up.className = 'bg-img-item-move bg-img-item-up';
      up.title = 'Move up (bring forward)';
      up.textContent = '▲';
      up.disabled = (i === arr.length - 1);
      up.addEventListener('click', e => { e.stopPropagation(); moveBgImage(i, 1); });
      const down = document.createElement('button');
      down.className = 'bg-img-item-move bg-img-item-down';
      down.title = 'Move down (send backward)';
      down.textContent = '▼';
      down.disabled = (i === 0);
      down.addEventListener('click', e => { e.stopPropagation(); moveBgImage(i, -1); });
      item.appendChild(up);
      item.appendChild(down);
    }
    item.addEventListener('click', () => selectBgImage(i));
    list.appendChild(item);
  });
}

// Sync the fit/offset/color inputs to the currently-selected image layer, and
// show/hide the controls depending on whether any image exists.
function syncBgImageControls() {
  if (!slides.length) return;
  const slide = slides[currentSlideIdx];
  const arr = getBgImages(slide);
  const layer = getSelectedBgImage(slide);
  const hasImg = arr.length > 0;
  // Hide the single-image offset/fit controls while multi-selecting — those
  // edits only make sense for one image at a time.
  const singleImg = selectedItems.length <= 1;
  const offsetRows = document.getElementById('bg-image-offset-rows');
  if (offsetRows) offsetRows.style.display = (hasImg && singleImg) ? '' : 'none';
  const listWrap = document.getElementById('bg-image-list-wrap');
  if (listWrap) listWrap.style.display = hasImg ? '' : 'none';
  if (layer) {
    const yLim = bgImageYLimit();
    const bgY = document.getElementById('bg-img-y');
    bgY.min = -yLim;
    bgY.max = yLim;
    document.getElementById('bg-image-fit').value = layer.fit || 'cover';
    document.getElementById('bg-img-x').value = layer.x || 0;
    document.getElementById('bg-img-y').value = layer.y || 0;
    document.getElementById('bg-img-x-val').textContent = layer.x || 0;
    document.getElementById('bg-img-y-val').textContent = layer.y || 0;
    const sc = layer.scale != null ? layer.scale : 100;
    document.getElementById('bg-img-scale').value = sc;
    document.getElementById('bg-img-scale-val').textContent = sc + '%';
  }
  document.getElementById('bg-img-bgcolor').value = slide.bgColor || '#1a1a2e';
}

function updateBg() {
  if (!slides.length) return;
  pushUndoDebounced();
  const s = slides[currentSlideIdx];
  s.bgColor   = document.getElementById('bg-color').value;
  s.gradC1    = document.getElementById('grad-c1').value;
  s.gradC2    = document.getElementById('grad-c2').value;
  s.gradAngle = parseInt(document.getElementById('grad-angle').value);
  // Commit the backdrop the user is actively editing (solid or gradient).
  // Tab switches alone (setBgType) do NOT change bgType, and an uploaded image
  // is an independent layer that always stays rendered on top.
  if (bgType === 'solid' || bgType === 'gradient') s.bgType = bgType;
  renderCurrent();
}

function applyBgToAll() {
  if (!slides.length) return;
  pushUndo();
  const s = slides[currentSlideIdx];
  slides.forEach((slide, i) => {
    if (i === currentSlideIdx) return;
    slide.bgType    = s.bgType;
    slide.bgColor   = s.bgColor;
    slide.gradC1    = s.gradC1;
    slide.gradC2    = s.gradC2;
    slide.gradAngle = s.gradAngle;
    // Only copy image properties when the source slide actually uses an image.
    // If the source is solid/gradient, leave each slide's own image intact.
    const srcImgs = getBgImages(s);
    if (srcImgs.length) {
      slide.bgImages = srcImgs.map(l => ({ url: l.url, fit: l.fit, x: l.x, y: l.y, scale: l.scale }));
    }
  });
  updateThumbs();
}

// ─── COLOR PRESETS ────────────────────────────────────────────────────────────

const BG_COLORS = [
  // Neutrals: black → greys → off-white → white
  '#000000','#1a1a1a','#3a3a3a','#6b6b6b',
  '#9a9a9a','#d0d0d0','#f5f5f0','#ffffff',
  // Hues: a varied spread across the color wheel
  '#e63946','#f4a261','#e9c46a','#2a9d8f',
  '#457b9d','#5d27bf','#a066ff','#ef6aa0',
];

const GRAD_PRESETS = [
  { c1:'#1a1a2e', c2:'#e94560', a:135, label:'Night Rose' },
  { c1:'#0f3460', c2:'#533483', a:135, label:'Deep Blue' },
  { c1:'#2d2d2d', c2:'#c8a96e', a:145, label:'Gold Dust' },
  { c1:'#000000', c2:'#434343', a:180, label:'Obsidian' },
  { c1:'#134e5e', c2:'#71b280', a:135, label:'Ocean' },
  { c1:'#1a0533', c2:'#a066ff', a:135, label:'Violet' },
  { c1:'#f7971e', c2:'#ffd200', a:135, label:'Sunrise' },
  { c1:'#ee0979', c2:'#ff6a00', a:135, label:'Sunset' },
];

const TEXT_COLORS = [
  '#ffffff','#f5f5f0','#e8e8e8','#cccccc',
  '#000000','#111111','#333333','#555555',
  '#4D5DFA','#AE4DFA','#744DFA','#ffd700',
  '#a8e6cf','#ffb6c1','#b39ddb','#80cbc4',
];

function initPresets() {
  // BG solid presets
  const bgPre = document.getElementById('bg-presets');
  BG_COLORS.forEach(c => {
    const d = document.createElement('div');
    d.className = 'color-preset';
    d.style.background = c;
    if (c === '#ffffff' || c === '#f5f5f0' || c === '#e8e8e8' || c === '#d0d0d0') {
      d.style.border = '2px solid rgba(255,255,255,0.2)';
    }
    d.title = c;
    d.onclick = () => {
      document.getElementById('bg-color').value = c;
      if (slides.length) {
        pushUndo();
        const s = slides[currentSlideIdx];
        s.bgColor = c;
        s.bgType = 'solid'; // backdrop; any uploaded image stays on top
        renderCurrent();
        scheduleSave();
      }
    };
    bgPre.appendChild(d);
  });

  // Gradient presets
  const gradPre = document.getElementById('grad-presets');
  GRAD_PRESETS.forEach(gp => {
    const d = document.createElement('div');
    d.className = 'grad-preset';
    d.style.background = `linear-gradient(${gp.a}deg, ${gp.c1}, ${gp.c2})`;
    d.title = gp.label;
    d.onclick = () => {
      document.getElementById('grad-c1').value = gp.c1;
      document.getElementById('grad-c2').value = gp.c2;
      document.getElementById('grad-angle').value = gp.a;
      document.getElementById('grad-angle-val').textContent = gp.a + '°';
      if (slides.length) {
        pushUndo();
        const s = slides[currentSlideIdx];
        s.gradC1 = gp.c1; s.gradC2 = gp.c2; s.gradAngle = gp.a;
        s.bgType = 'gradient'; // backdrop; any uploaded image stays on top
        renderCurrent();
        scheduleSave();
      }
    };
    gradPre.appendChild(d);
  });

  // Text color presets
  const txtPre = document.getElementById('text-color-presets');
  TEXT_COLORS.forEach(c => {
    const d = document.createElement('div');
    d.className = 'color-preset';
    d.style.background = c;
    if (c === '#ffffff' || c === '#f5f5f0' || c === '#e8e8e8' || c === '#cccccc') {
      d.style.border = '2px solid rgba(255,255,255,0.2)';
    }
    d.title = c;
    d.onclick = () => {
      document.getElementById('text-color').value = c;
      updateTextBlock();
    };
    txtPre.appendChild(d);
  });
}

// ─── UNDO / REDO ──────────────────────────────────────────────────────────────

const UNDO_LIMIT = 50;
const LS_KEY = 'slideMakerProject';

function snapshotState() {
  return JSON.stringify({ slides: slides, currentSlideIdx: currentSlideIdx });
}

function pushUndo() {
  undoStack.push(snapshotState());
  if (undoStack.length > UNDO_LIMIT) undoStack.shift();
  redoStack = [];
  updateUndoButtons();
  scheduleSave();
}

// Debounced version for continuous inputs (sliders, text fields)
let undoDebounceTimer = null;
let undoPendingSnapshot = null;
function pushUndoDebounced() {
  // Capture the state BEFORE the change (only once per burst)
  if (!undoPendingSnapshot) undoPendingSnapshot = snapshotState();
  clearTimeout(undoDebounceTimer);
  undoDebounceTimer = setTimeout(() => {
    if (undoPendingSnapshot) {
      undoStack.push(undoPendingSnapshot);
      if (undoStack.length > UNDO_LIMIT) undoStack.shift();
      redoStack = [];
      undoPendingSnapshot = null;
      updateUndoButtons();
      scheduleSave();
    }
  }, 600);
}

function updateUndoButtons() {
  document.getElementById('undo-btn').disabled = undoStack.length === 0;
  document.getElementById('redo-btn').disabled = redoStack.length === 0;
}

function warmBgImageCache(slideList) {
  slideList.forEach(s => { getBgImages(s).forEach(l => ensureBgImageCached(l.url)); });
}

function restoreSnapshot(json) {
  const state = JSON.parse(json);
  slides = state.slides;
  currentSlideIdx = Math.min(state.currentSlideIdx, slides.length - 1);
  clearSelection();
  warmBgImageCache(slides);
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(snapshotState());
  restoreSnapshot(undoStack.pop());
  updateUndoButtons();
  scheduleSave();
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(snapshotState());
  restoreSnapshot(redoStack.pop());
  updateUndoButtons();
  scheduleSave();
}

// ─── SAVE / LOAD (localStorage) ───────────────────────────────────────────────

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(LS_KEY, snapshotState()); } catch(e) {}
  }, 800);
}

function loadFromLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    const state = JSON.parse(raw);
    if (!state.slides || !state.slides.length) return false;
    slides = state.slides;
    currentSlideIdx = Math.min(state.currentSlideIdx || 0, slides.length - 1);
    warmBgImageCache(slides);
    preloadGoogleFonts(slides);
    return true;
  } catch(e) { return false; }
}

// Scan all text blocks for Google families and load each unique face so the
// first render uses the real typeface instead of a fallback. Re-renders when done.
function preloadGoogleFonts(slideList) {
  const faces = new Set();
  slideList.forEach(s => (s.textBlocks || []).forEach(tb => {
    if (tb && GOOGLE_FONT_MAP.has(tb.fontFamily)) {
      faces.add(`${tb.fontFamily}|${tb.fontWeight || 400}|${tb.fontStyle || 'normal'}`);
    }
  }));
  if (!faces.size) return Promise.resolve();
  return Promise.all([...faces].map(key => {
    const [family, weight, style] = key.split('|');
    return ensureGoogleFont(family, weight, style);
  })).then(() => renderCurrent());
}

// ─── EXPORT / IMPORT PROJECT JSON ─────────────────────────────────────────────

function exportProject() {
  const name = prompt('Save project as:', 'my-slides');
  if (name === null) return; // cancelled
  const filename = (name.trim() || 'my-slides').replace(/\.json$/i, '') + '.json';
  const data = snapshotState();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function importProject(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const state = JSON.parse(e.target.result);
      if (!state.slides || !state.slides.length) { alert('Invalid project file.'); return; }
      pushUndo();
      slides = state.slides;
      currentSlideIdx = Math.min(state.currentSlideIdx || 0, slides.length - 1);
      clearSelection();
      preloadGoogleFonts(slides);
      refreshSlidePicker();
      loadSlideToUI();
      renderCurrent();
    } catch(err) { alert('Could not load project: ' + err.message); }
  };
  reader.readAsText(file);
  // Reset input so same file can be re-loaded
  event.target.value = '';
}

// ─── ANIMATION PREVIEW ────────────────────────────────────────────────────────

function showAnimPreview() {
  if (!slides.length) return;
  animIdx = currentSlideIdx;
  document.getElementById('anim-overlay').classList.add('show');
  drawAnimFrame();
}

function closeAnim() {
  document.getElementById('anim-overlay').classList.remove('show');
  stopAnim();
}

function drawAnimFrame() {
  const ac = document.getElementById('anim-canvas');
  const fmt = EXPORT_FORMATS[previewSize];
  const ratio = fmt.h / fmt.w;
  // Fit within viewport leaving room for controls (~100px) and padding
  const maxW = Math.min(540, window.innerWidth - 80);
  const maxH = window.innerHeight - 140;
  // Constrain by height if portrait/story would overflow
  const wFromH = Math.floor(maxH / ratio);
  const fitW = Math.min(maxW, wFromH);
  const fitH = Math.round(fitW * ratio);
  ac.width  = fitW;
  ac.height = fitH;
  ac.style.width  = fitW + 'px';
  ac.style.height = fitH + 'px';
  const off = renderSlideToSize(slides[animIdx], fmt.w, fmt.h);
  ac.getContext('2d').drawImage(off, 0, 0, ac.width, ac.height);
  document.getElementById('anim-info').textContent =
    `Slide ${animIdx + 1} / ${slides.length} · ${fmt.label}`;
  document.getElementById('play-btn').textContent = animPlaying ? '⏸ Pause' : '▶ Play';
}

function animPrev() { animIdx = (animIdx - 1 + slides.length) % slides.length; drawAnimFrame(); }
function animNext() { animIdx = (animIdx + 1) % slides.length; drawAnimFrame(); }

function toggleAnimPlay() {
  animPlaying = !animPlaying;
  if (animPlaying) {
    animTimer = setInterval(animNext, 2000);
  } else {
    stopAnim();
  }
  document.getElementById('play-btn').textContent = animPlaying ? '⏸ Pause' : '▶ Play';
}

function stopAnim() {
  animPlaying = false;
  clearInterval(animTimer);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

function selectFmt(key) {
  selectedFmt = key;
  Object.keys(EXPORT_FORMATS).forEach(k => {
    document.getElementById('fmt-' + k).classList.toggle('active', k === key);
  });
  setPreviewSize(key);
}

function showExport() {
  selectedFmt = previewSize;
  Object.keys(EXPORT_FORMATS).forEach(k => {
    const el = document.getElementById('fmt-' + k);
    if (el) el.classList.toggle('active', k === selectedFmt);
  });
  document.getElementById('export-modal').classList.add('show');
}

// ─── HELP / GUIDE MODAL ───────────────────────────────────────────────────────

function showHelp() {
  document.getElementById('help-modal').classList.add('show');
}

function closeHelp() {
  document.getElementById('help-modal').classList.remove('show');
}

function closeExport() {
  document.getElementById('export-modal').classList.remove('show');
  document.getElementById('export-progress').style.display = 'none';
  document.getElementById('pb').style.width = '0%';
}

async function doExport() {
  if (!slides.length) return;
  await preloadGoogleFonts(slides);
  const prefix = document.getElementById('export-prefix').value || 'slide';
  const fmt = EXPORT_FORMATS[selectedFmt];
  const prog = document.getElementById('export-progress');
  const pb   = document.getElementById('pb');
  const status = document.getElementById('export-status');
  prog.style.display = 'flex';

  const zip = new JSZip();

  for (let i = 0; i < slides.length; i++) {
    const off = renderSlideToSize(slides[i], fmt.w, fmt.h);
    await new Promise(r => setTimeout(r, 20));
    pb.style.width = ((i + 1) / slides.length * 100) + '%';
    status.textContent = `Rendering slide ${i + 1} of ${slides.length}…`;
    const filename = `${prefix}-${String(i + 1).padStart(2, '0')}.png`;
    const dataURL = off.toDataURL('image/png');
    const base64 = dataURL.split(',')[1];
    zip.file(filename, base64, { base64: true });
  }

  status.textContent = 'Building ZIP…';
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${prefix}-${selectedFmt}.zip`;
  a.click();
  URL.revokeObjectURL(url);

  status.textContent = `Done! ${slides.length} slides exported as ZIP.`;
  setTimeout(closeExport, 2000);
}

// ─── GIF EXPORT ───────────────────────────────────────────────────────────────
// Self-contained animated GIF encoder (no external deps, no workers).
// Uses median-cut palette quantization + LZW compression.

// --- Minimal GIF encoder ---
function encodeGif(frames, w, h, delayCs) {
  // frames: array of ImageData (or {data,width,height})
  // delayCs: frame delay in centiseconds (100ths of a second)
  const out = [];
  const push = (b) => out.push(b);
  const pushArr = (a) => { for (let i = 0; i < a.length; i++) out.push(a[i]); };
  const pushStr = (s) => { for (let i = 0; i < s.length; i++) out.push(s.charCodeAt(i)); };
  const pushU16 = (n) => { out.push(n & 0xff); out.push((n >> 8) & 0xff); };

  // GIF Header
  pushStr('GIF89a');
  pushU16(w); pushU16(h);
  push(0x70); // global color table flag=0 (we use local per frame), color res=1, sort=0, size=0
  push(0);    // background color index
  push(0);    // pixel aspect ratio

  // Netscape loop extension (loop forever)
  pushStr('\x21\xff\x0bNETSCAPE2.0\x03\x01\x00\x00\x00');

  for (let fi = 0; fi < frames.length; fi++) {
    const imgData = frames[fi];
    const pixels = imgData.data; // Uint8ClampedArray RGBA

    // Build 256-color palette via median cut
    const palette = buildPalette(pixels, w, h);
    const palSize = palette.length; // always 256

    // Floyd-Steinberg dithering — eliminates banding on gradients/solid colors
    // Work on a mutable float copy of the pixel data
    const buf = new Float32Array(w * h * 3);
    for (let i = 0; i < w * h; i++) {
      buf[i*3]   = pixels[i*4];
      buf[i*3+1] = pixels[i*4+1];
      buf[i*3+2] = pixels[i*4+2];
    }
    const indices = new Uint8Array(w * h);
    const cache = new Map();
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = y * w + x;
        const r = Math.max(0, Math.min(255, Math.round(buf[i*3])));
        const g = Math.max(0, Math.min(255, Math.round(buf[i*3+1])));
        const b = Math.max(0, Math.min(255, Math.round(buf[i*3+2])));
        const key = (r << 16) | (g << 8) | b;
        let idx = cache.get(key);
        if (idx === undefined) {
          idx = nearestColor(palette, r, g, b);
          cache.set(key, idx);
        }
        indices[i] = idx;
        // Quantization error
        const pc = palette[idx];
        const er = r - pc[0], eg = g - pc[1], eb = b - pc[2];
        // Distribute error to right, bottom-left, bottom, bottom-right (7/16, 3/16, 5/16, 1/16)
        if (x + 1 < w) {
          buf[(i+1)*3]   += er * 7/16;
          buf[(i+1)*3+1] += eg * 7/16;
          buf[(i+1)*3+2] += eb * 7/16;
        }
        if (y + 1 < h) {
          if (x > 0) {
            buf[(i+w-1)*3]   += er * 3/16;
            buf[(i+w-1)*3+1] += eg * 3/16;
            buf[(i+w-1)*3+2] += eb * 3/16;
          }
          buf[(i+w)*3]   += er * 5/16;
          buf[(i+w)*3+1] += eg * 5/16;
          buf[(i+w)*3+2] += eb * 5/16;
          if (x + 1 < w) {
            buf[(i+w+1)*3]   += er * 1/16;
            buf[(i+w+1)*3+1] += eg * 1/16;
            buf[(i+w+1)*3+2] += eb * 1/16;
          }
        }
      }
    }

    // Graphic Control Extension (delay)
    push(0x21); push(0xf9); push(0x04);
    push(0x00); // disposal: do not dispose
    pushU16(delayCs);
    push(0x00); // transparent color index (none)
    push(0x00); // block terminator

    // Image Descriptor
    push(0x2c);
    pushU16(0); pushU16(0); // left, top
    pushU16(w); pushU16(h);
    push(0x80 | 0x07); // local color table flag=1, interlace=0, size=7 (256 colors)

    // Local Color Table (256 × 3 bytes)
    for (let i = 0; i < 256; i++) {
      const c = palette[i] || [0,0,0];
      push(c[0]); push(c[1]); push(c[2]);
    }

    // Image Data — LZW compressed
    const lzw = lzwEncode(indices, 8);
    push(8); // LZW minimum code size
    // Write in sub-blocks of max 255 bytes
    let pos = 0;
    while (pos < lzw.length) {
      const blockLen = Math.min(255, lzw.length - pos);
      push(blockLen);
      for (let i = 0; i < blockLen; i++) push(lzw[pos++]);
    }
    push(0x00); // block terminator
  }

  push(0x3b); // GIF trailer

  return new Uint8Array(out);
}

function buildPalette(pixels, w, h) {
  // Simple median-cut: collect all unique colors, then reduce to 256
  // For speed, sample every pixel and use a fast quantizer
  const total = w * h;
  // Collect colors into buckets by 4-bit quantization first
  const buckets = new Map();
  for (let i = 0; i < total; i++) {
    const r = pixels[i*4], g = pixels[i*4+1], b = pixels[i*4+2];
    const key = ((r >> 2) << 12) | ((g >> 2) << 6) | (b >> 2);
    if (!buckets.has(key)) buckets.set(key, [r, g, b]);
  }
  let colors = Array.from(buckets.values());
  // If ≤256 unique colors, use them directly (pad to 256)
  if (colors.length <= 256) {
    while (colors.length < 256) colors.push([0, 0, 0]);
    return colors;
  }
  // Median cut to 256
  return medianCut(colors, 256);
}

function medianCut(colors, maxColors) {
  let buckets = [colors];
  while (buckets.length < maxColors) {
    // Find bucket with largest range
    let maxRange = -1, splitIdx = 0;
    for (let i = 0; i < buckets.length; i++) {
      const b = buckets[i];
      if (b.length < 2) continue;
      let rMin=255,rMax=0,gMin=255,gMax=0,bMin=255,bMax=0;
      for (const c of b) {
        if(c[0]<rMin)rMin=c[0]; if(c[0]>rMax)rMax=c[0];
        if(c[1]<gMin)gMin=c[1]; if(c[1]>gMax)gMax=c[1];
        if(c[2]<bMin)bMin=c[2]; if(c[2]>bMax)bMax=c[2];
      }
      const range = Math.max(rMax-rMin, gMax-gMin, bMax-bMin);
      if (range > maxRange) { maxRange = range; splitIdx = i; }
    }
    const bucket = buckets[splitIdx];
    if (bucket.length < 2) break;
    // Find channel with max range
    let rMin=255,rMax=0,gMin=255,gMax=0,bMin=255,bMax=0;
    for (const c of bucket) {
      if(c[0]<rMin)rMin=c[0]; if(c[0]>rMax)rMax=c[0];
      if(c[1]<gMin)gMin=c[1]; if(c[1]>gMax)gMax=c[1];
      if(c[2]<bMin)bMin=c[2]; if(c[2]>bMax)bMax=c[2];
    }
    const rRange=rMax-rMin, gRange=gMax-gMin, bRange=bMax-bMin;
    const ch = rRange>=gRange && rRange>=bRange ? 0 : gRange>=bRange ? 1 : 2;
    bucket.sort((a,b) => a[ch]-b[ch]);
    const mid = Math.floor(bucket.length / 2);
    buckets.splice(splitIdx, 1, bucket.slice(0, mid), bucket.slice(mid));
  }
  // Average each bucket to get palette color
  const palette = buckets.map(b => {
    let r=0,g=0,bl=0;
    for(const c of b){r+=c[0];g+=c[1];bl+=c[2];}
    return [Math.round(r/b.length), Math.round(g/b.length), Math.round(bl/b.length)];
  });
  while (palette.length < 256) palette.push([0,0,0]);
  return palette;
}

function nearestColor(palette, r, g, b) {
  let best = 0, bestDist = Infinity;
  for (let i = 0; i < palette.length; i++) {
    const c = palette[i];
    const dr=c[0]-r, dg=c[1]-g, db=c[2]-b;
    const d = dr*dr + dg*dg + db*db;
    if (d < bestDist) { bestDist = d; best = i; if (d === 0) break; }
  }
  return best;
}

function lzwEncode(indices, minCodeSize) {
  const clearCode = 1 << minCodeSize;
  const eofCode = clearCode + 1;
  let codeSize = minCodeSize + 1;
  let nextCode = eofCode + 1;
  const maxCode = () => 1 << codeSize;

  // Output bit stream
  const output = [];
  let curByte = 0, curBits = 0;
  const writeBits = (code) => {
    curByte |= code << curBits;
    curBits += codeSize;
    while (curBits >= 8) {
      output.push(curByte & 0xff);
      curByte >>= 8;
      curBits -= 8;
    }
  };
  const flush = () => { if (curBits > 0) { output.push(curByte & 0xff); curByte = 0; curBits = 0; } };

  // LZW compression
  const table = new Map();
  const resetTable = () => {
    table.clear();
    for (let i = 0; i < clearCode; i++) table.set(String(i), i);
    codeSize = minCodeSize + 1;
    nextCode = eofCode + 1;
  };

  resetTable();
  writeBits(clearCode);

  let prefix = String(indices[0]);
  for (let i = 1; i < indices.length; i++) {
    const suffix = String(indices[i]);
    const combined = prefix + ',' + suffix;
    if (table.has(combined)) {
      prefix = combined;
    } else {
      writeBits(table.get(prefix));
      if (nextCode < 4096) {
        table.set(combined, nextCode++);
        if (nextCode > maxCode() && codeSize < 12) codeSize++;
      } else {
        writeBits(clearCode);
        resetTable();
      }
      prefix = suffix;
    }
  }
  writeBits(table.get(prefix));
  writeBits(eofCode);
  flush();
  return output;
}

async function doExportGif() {
  if (!slides.length) return;
  await preloadGoogleFonts(slides);
  const prefix = document.getElementById('export-prefix').value || 'slide';
  const fmt = EXPORT_FORMATS[selectedFmt];
  const gifW = parseInt(document.getElementById('gif-size').value);
  const gifH = Math.round(gifW * (fmt.h / fmt.w));
  const delayMs = parseInt(document.getElementById('gif-delay').value);
  const delayCs = Math.round(delayMs / 10); // centiseconds

  const prog = document.getElementById('export-progress');
  const pb   = document.getElementById('pb');
  const status = document.getElementById('export-status');
  prog.style.display = 'flex';

  const frames = [];
  const offCanvas = document.createElement('canvas');
  offCanvas.width = gifW; offCanvas.height = gifH;
  const offCtx = offCanvas.getContext('2d');

  for (let i = 0; i < slides.length; i++) {
    status.textContent = `Rendering slide ${i + 1} of ${slides.length}…`;
    pb.style.width = ((i + 0.5) / slides.length * 80) + '%';
    await new Promise(r => setTimeout(r, 20));
    const off = renderSlideToSize(slides[i], fmt.w, fmt.h);
    offCtx.clearRect(0, 0, gifW, gifH);
    offCtx.drawImage(off, 0, 0, gifW, gifH);
    frames.push(offCtx.getImageData(0, 0, gifW, gifH));
  }

  status.textContent = 'Encoding GIF…';
  pb.style.width = '85%';
  await new Promise(r => setTimeout(r, 30));

  const gifBytes = encodeGif(frames, gifW, gifH, delayCs);
  pb.style.width = '100%';

  const blob = new Blob([gifBytes], { type: 'image/gif' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${prefix}-${selectedFmt}.gif`;
  a.click();
  URL.revokeObjectURL(url);

  status.textContent = `Done! Animated GIF exported (${slides.length} frames, ${gifW}×${gifH}).`;
  setTimeout(closeExport, 2500);
}

// ─── MP4 EXPORT (WebCodecs + inline MP4 muxer) ────────────────────────────────
// Minimal ISO 14496-12 MP4 muxer. Uses a ByteWriter that accumulates bytes in
// a plain number array (avoids Uint8Array constructor-from-array pitfalls), then
// converts to Uint8Array at the end. Produces a valid single-track H.264 MP4.

const Mp4Muxer = (() => {
  // ── ByteWriter ──────────────────────────────────────────────────────────────
  function ByteWriter() {
    this.buf = [];
  }
  ByteWriter.prototype.u8  = function(n) { this.buf.push(n & 0xff); };
  ByteWriter.prototype.u16 = function(n) { this.buf.push((n >>> 8) & 0xff, n & 0xff); };
  ByteWriter.prototype.u32 = function(n) { this.buf.push((n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff); };
  ByteWriter.prototype.str = function(s) { for (let i = 0; i < s.length; i++) this.buf.push(s.charCodeAt(i)); };
  ByteWriter.prototype.bytes = function(arr) { for (let i = 0; i < arr.length; i++) this.buf.push(arr[i]); };
  ByteWriter.prototype.zeros = function(n) { for (let i = 0; i < n; i++) this.buf.push(0); };
  ByteWriter.prototype.length = function() { return this.buf.length; };
  ByteWriter.prototype.toUint8Array = function() { return new Uint8Array(this.buf); };
  // Write a sub-writer's content as a box: [size(4)][type(4)][payload]
  ByteWriter.prototype.box = function(type, payloadWriter) {
    const payload = payloadWriter.buf;
    this.u32(8 + payload.length);
    this.str(type);
    this.bytes(payload);
  };
  // Full box: box with version(1) + flags(3) prepended to payload
  ByteWriter.prototype.fullBox = function(type, version, flags, payloadWriter) {
    const inner = new ByteWriter();
    inner.u8(version);
    inner.u8((flags >>> 16) & 0xff);
    inner.u8((flags >>> 8) & 0xff);
    inner.u8(flags & 0xff);
    inner.bytes(payloadWriter.buf);
    this.box(type, inner);
  };

  // ── build(chunks, width, height, timescale, totalDuration) ──────────────────
  // chunks: [{data: Uint8Array, duration: number, config?: Uint8Array}]
  // Returns Uint8Array of the complete MP4 file.
  function build(chunks, width, height, timescale, totalDuration) {
    const n = chunks.length;
    const sampleSizes = chunks.map(c => c.data.length);
    const sampleDurations = chunks.map(c => c.duration);

    // ── ftyp ──
    const ftypW = new ByteWriter();
    ftypW.str('isom'); ftypW.u32(0x200);
    ftypW.str('isom'); ftypW.str('iso2'); ftypW.str('avc1'); ftypW.str('mp41');
    const ftypBox = new ByteWriter();
    ftypBox.box('ftyp', ftypW);

    // ── avcC (decoder config) ──
    const avcCdata = chunks[0] && chunks[0].config
      ? chunks[0].config
      : new Uint8Array([
          0x01, 0x42, 0x00, 0x1f, 0xff, 0xe1, 0x00, 0x0f,
          0x67, 0x42, 0x00, 0x1f, 0xda, 0x01, 0x40, 0x16,
          0xec, 0x04, 0x40, 0x00, 0x00, 0x03, 0x00, 0x40,
          0x01, 0x00, 0x04, 0x68, 0xce, 0x38, 0x80
        ]);
    const avcCpayload = new ByteWriter();
    avcCpayload.bytes(avcCdata);
    const avcCbox = new ByteWriter();
    avcCbox.box('avcC', avcCpayload);

    // ── avc1 (visual sample entry) ──
    const avc1payload = new ByteWriter();
    avc1payload.zeros(6);          // reserved
    avc1payload.u16(1);            // data-reference-index
    avc1payload.zeros(16);         // pre_defined + reserved
    avc1payload.u16(width);
    avc1payload.u16(height);
    avc1payload.u32(0x00480000);   // horizResolution 72dpi
    avc1payload.u32(0x00480000);   // vertResolution 72dpi
    avc1payload.u32(0);            // reserved
    avc1payload.u16(1);            // frame_count
    avc1payload.zeros(32);         // compressorname
    avc1payload.u16(0x0018);       // depth
    avc1payload.u16(0xffff);       // pre_defined
    avc1payload.bytes(avcCbox.buf);
    const avc1box = new ByteWriter();
    avc1box.box('avc1', avc1payload);

    // ── stsd ──
    const stsdPayload = new ByteWriter();
    stsdPayload.u32(1); // entry count
    stsdPayload.bytes(avc1box.buf);
    const stsdBox = new ByteWriter();
    stsdBox.fullBox('stsd', 0, 0, stsdPayload);

    // ── stts (time-to-sample) ──
    const sttsEntries = [];
    let runLen = 1, runDur = sampleDurations[0];
    for (let i = 1; i < n; i++) {
      if (sampleDurations[i] === runDur) runLen++;
      else { sttsEntries.push([runLen, runDur]); runLen = 1; runDur = sampleDurations[i]; }
    }
    sttsEntries.push([runLen, runDur]);
    const sttsPayload = new ByteWriter();
    sttsPayload.u32(sttsEntries.length);
    for (const [cnt, dur] of sttsEntries) { sttsPayload.u32(cnt); sttsPayload.u32(dur); }
    const sttsBox = new ByteWriter();
    sttsBox.fullBox('stts', 0, 0, sttsPayload);

    // ── stss (sync samples — all keyframes) ──
    const stssPayload = new ByteWriter();
    stssPayload.u32(n);
    for (let i = 0; i < n; i++) stssPayload.u32(i + 1);
    const stssBox = new ByteWriter();
    stssBox.fullBox('stss', 0, 0, stssPayload);

    // ── stsz (sample sizes) ──
    const stszPayload = new ByteWriter();
    stszPayload.u32(0); // uniform size = 0 (variable)
    stszPayload.u32(n);
    for (const sz of sampleSizes) stszPayload.u32(sz);
    const stszBox = new ByteWriter();
    stszBox.fullBox('stsz', 0, 0, stszPayload);

    // ── stsc (sample-to-chunk: 1 sample per chunk) ──
    const stscPayload = new ByteWriter();
    stscPayload.u32(1);  // entry count
    stscPayload.u32(1);  // first chunk
    stscPayload.u32(1);  // samples per chunk
    stscPayload.u32(1);  // sample description index
    const stscBox = new ByteWriter();
    stscBox.fullBox('stsc', 0, 0, stscPayload);

    // ── stco placeholder (patched after we know ftyp+moov size) ──
    const stcoPayload = new ByteWriter();
    stcoPayload.u32(n);
    stcoPayload.zeros(n * 4); // placeholder offsets
    const stcoBox = new ByteWriter();
    stcoBox.fullBox('stco', 0, 0, stcoPayload);

    // ── stbl ──
    const stblPayload = new ByteWriter();
    stblPayload.bytes(stsdBox.buf);
    stblPayload.bytes(sttsBox.buf);
    stblPayload.bytes(stssBox.buf);
    stblPayload.bytes(stszBox.buf);
    stblPayload.bytes(stscBox.buf);
    stblPayload.bytes(stcoBox.buf);
    const stblBox = new ByteWriter();
    stblBox.box('stbl', stblPayload);

    // ── dinf / dref / url ──
    const urlPayload = new ByteWriter(); // empty payload, flags=1 (self-contained)
    const urlBox = new ByteWriter();
    urlBox.fullBox('url ', 0, 1, urlPayload);
    const drefPayload = new ByteWriter();
    drefPayload.u32(1);
    drefPayload.bytes(urlBox.buf);
    const drefBox = new ByteWriter();
    drefBox.fullBox('dref', 0, 0, drefPayload);
    const dinf = new ByteWriter();
    dinf.box('dinf', drefBox);

    // ── vmhd ──
    const vmhdPayload = new ByteWriter();
    vmhdPayload.u16(0); vmhdPayload.u16(0); vmhdPayload.u16(0); vmhdPayload.u16(0);
    const vmhdBox = new ByteWriter();
    vmhdBox.fullBox('vmhd', 0, 1, vmhdPayload);

    // ── minf ──
    const minfPayload = new ByteWriter();
    minfPayload.bytes(vmhdBox.buf);
    minfPayload.bytes(dinf.buf);
    minfPayload.bytes(stblBox.buf);
    const minfBox = new ByteWriter();
    minfBox.box('minf', minfPayload);

    // ── mdhd ──
    const mdhdPayload = new ByteWriter();
    mdhdPayload.u32(0); mdhdPayload.u32(0); // creation, modification
    mdhdPayload.u32(timescale);
    mdhdPayload.u32(totalDuration);
    mdhdPayload.u16(0x55c4); // language 'und'
    mdhdPayload.u16(0);
    const mdhdBox = new ByteWriter();
    mdhdBox.fullBox('mdhd', 0, 0, mdhdPayload);

    // ── hdlr ──
    const hdlrPayload = new ByteWriter();
    hdlrPayload.u32(0); // pre_defined
    hdlrPayload.str('vide');
    hdlrPayload.zeros(12); // reserved
    hdlrPayload.str('VideoHandler'); hdlrPayload.u8(0);
    const hdlrBox = new ByteWriter();
    hdlrBox.fullBox('hdlr', 0, 0, hdlrPayload);

    // ── mdia ──
    const mdiaPayload = new ByteWriter();
    mdiaPayload.bytes(mdhdBox.buf);
    mdiaPayload.bytes(hdlrBox.buf);
    mdiaPayload.bytes(minfBox.buf);
    const mdiaBox = new ByteWriter();
    mdiaBox.box('mdia', mdiaPayload);

    // ── tkhd ──
    const tkhdPayload = new ByteWriter();
    tkhdPayload.u32(0); tkhdPayload.u32(0); // creation, modification
    tkhdPayload.u32(1);  // track ID
    tkhdPayload.u32(0);  // reserved
    tkhdPayload.u32(totalDuration);
    tkhdPayload.zeros(8); // reserved
    tkhdPayload.u16(0);   // layer
    tkhdPayload.u16(0);   // alternate group
    tkhdPayload.u16(0);   // volume (video = 0)
    tkhdPayload.u16(0);   // reserved
    // unity matrix
    tkhdPayload.u32(0x00010000); tkhdPayload.u32(0); tkhdPayload.u32(0);
    tkhdPayload.u32(0); tkhdPayload.u32(0x00010000); tkhdPayload.u32(0);
    tkhdPayload.u32(0); tkhdPayload.u32(0); tkhdPayload.u32(0x40000000);
    tkhdPayload.u32(width << 16);
    tkhdPayload.u32(height << 16);
    const tkhdBox = new ByteWriter();
    tkhdBox.fullBox('tkhd', 0, 3, tkhdPayload); // flags=3: enabled+in-movie

    // ── trak ──
    const trakPayload = new ByteWriter();
    trakPayload.bytes(tkhdBox.buf);
    trakPayload.bytes(mdiaBox.buf);
    const trakBox = new ByteWriter();
    trakBox.box('trak', trakPayload);

    // ── mvhd ──
    const mvhdPayload = new ByteWriter();
    mvhdPayload.u32(0); mvhdPayload.u32(0); // creation, modification
    mvhdPayload.u32(timescale);
    mvhdPayload.u32(totalDuration);
    mvhdPayload.u32(0x00010000); // rate 1.0
    mvhdPayload.u16(0x0100);     // volume 1.0
    mvhdPayload.zeros(10);       // reserved
    // unity matrix
    mvhdPayload.u32(0x00010000); mvhdPayload.u32(0); mvhdPayload.u32(0);
    mvhdPayload.u32(0); mvhdPayload.u32(0x00010000); mvhdPayload.u32(0);
    mvhdPayload.u32(0); mvhdPayload.u32(0); mvhdPayload.u32(0x40000000);
    mvhdPayload.zeros(24); // pre_defined
    mvhdPayload.u32(2);    // next track ID
    const mvhdBox = new ByteWriter();
    mvhdBox.fullBox('mvhd', 0, 0, mvhdPayload);

    // ── moov ──
    const moovPayload = new ByteWriter();
    moovPayload.bytes(mvhdBox.buf);
    moovPayload.bytes(trakBox.buf);
    const moovBox = new ByteWriter();
    moovBox.box('moov', moovPayload);

    // ── Compute real stco offsets and patch moov ──
    // mdat starts at: ftypBox.length + moovBox.length + 8 (mdat size+type header)
    const mdatPayloadSize = sampleSizes.reduce((a, b) => a + b, 0);
    const mdatTotalSize = 8 + mdatPayloadSize;
    const mdatStart = ftypBox.buf.length + moovBox.buf.length + 8;

    // Find stco in moovBox.buf and patch offsets
    const moovBuf = moovBox.buf; // plain number array
    const SC = [0x73, 0x74, 0x63, 0x6f]; // 'stco'
    let stcoPos = -1;
    for (let i = 0; i < moovBuf.length - 4; i++) {
      if (moovBuf[i] === SC[0] && moovBuf[i+1] === SC[1] && moovBuf[i+2] === SC[2] && moovBuf[i+3] === SC[3]) {
        stcoPos = i;
        break;
      }
    }
    if (stcoPos >= 0) {
      // stco layout after the 4-byte type: version(1)+flags(3)+entry_count(4)+entries
      const entryStart = stcoPos + 4 + 4 + 4; // skip type(already at stcoPos) + ver+flags(4) + count(4)
      let off = mdatStart;
      for (let j = 0; j < n; j++) {
        moovBuf[entryStart + j*4]     = (off >>> 24) & 0xff;
        moovBuf[entryStart + j*4 + 1] = (off >>> 16) & 0xff;
        moovBuf[entryStart + j*4 + 2] = (off >>> 8) & 0xff;
        moovBuf[entryStart + j*4 + 3] = off & 0xff;
        off += sampleSizes[j];
      }
    }

    // ── Assemble final file ──
    const totalBytes = ftypBox.buf.length + moovBox.buf.length + 8 + mdatPayloadSize;
    const result = new Uint8Array(totalBytes);
    let pos = 0;
    const writeArr = (arr) => { result.set(arr instanceof Uint8Array ? arr : new Uint8Array(arr), pos); pos += arr.length; };
    writeArr(ftypBox.buf);
    writeArr(moovBox.buf);
    // mdat header
    result[pos++] = (mdatTotalSize >>> 24) & 0xff;
    result[pos++] = (mdatTotalSize >>> 16) & 0xff;
    result[pos++] = (mdatTotalSize >>> 8) & 0xff;
    result[pos++] = mdatTotalSize & 0xff;
    result[pos++] = 0x6d; result[pos++] = 0x64; result[pos++] = 0x61; result[pos++] = 0x74; // 'mdat'
    for (const chunk of chunks) writeArr(chunk.data);
    return result;
  }

  return { build };
})();

async function doExportMp4() {
  if (!slides.length) return;
  await preloadGoogleFonts(slides);

  // Feature detection
  if (typeof VideoEncoder === 'undefined') {
    alert('MP4 export requires a browser with WebCodecs support.\nPlease use Chrome, Edge, or Safari 16.4+.\n\nYou can still export as GIF or PNG ZIP.');
    return;
  }

  const prefix = document.getElementById('export-prefix').value || 'slide';
  const fmt = EXPORT_FORMATS[selectedFmt];
  const vidW = parseInt(document.getElementById('gif-size').value);
  const vidH = Math.round(vidW * (fmt.h / fmt.w));
  // Ensure dimensions are even (H.264 requirement)
  const encW = vidW % 2 === 0 ? vidW : vidW - 1;
  const encH = vidH % 2 === 0 ? vidH : vidH - 1;
  const delayMs = parseInt(document.getElementById('gif-delay').value);
  const timescale = 90000; // standard video timescale
  const frameDuration = Math.round(delayMs * timescale / 1000);

  const prog = document.getElementById('export-progress');
  const pb   = document.getElementById('pb');
  const status = document.getElementById('export-status');
  prog.style.display = 'flex';
  status.textContent = 'Initialising encoder…';
  pb.style.width = '5%';

  const chunks = []; // {data: Uint8Array, duration: number, config?: Uint8Array}
  let encoderConfig = null;

  const encoder = new VideoEncoder({
    output(chunk, meta) {
      const buf = new Uint8Array(chunk.byteLength);
      chunk.copyTo(buf);
      const entry = { data: buf, duration: frameDuration };
      if (meta && meta.decoderConfig && meta.decoderConfig.description) {
        // Store avcC config from first keyframe
        entry.config = new Uint8Array(meta.decoderConfig.description);
        encoderConfig = entry.config;
      }
      chunks.push(entry);
    },
    error(e) {
      console.error('VideoEncoder error:', e);
      status.textContent = 'Encoding error: ' + e.message;
    }
  });

  try {
    await encoder.configure({
      codec: 'avc1.42001f', // H.264 Baseline Profile Level 3.1
      width: encW,
      height: encH,
      bitrate: 4_000_000, // 4 Mbps
      framerate: 1,       // 1 fps — we control timing via timestamps
      latencyMode: 'quality'
    });
  } catch (e) {
    alert('Could not configure H.264 encoder. Your browser may not support this codec.\n\nError: ' + e.message);
    prog.style.display = 'none';
    return;
  }

  const offCanvas = document.createElement('canvas');
  offCanvas.width = encW; offCanvas.height = encH;
  const offCtx = offCanvas.getContext('2d');

  let timestamp = 0;
  for (let i = 0; i < slides.length; i++) {
    status.textContent = `Encoding slide ${i + 1} of ${slides.length}…`;
    pb.style.width = ((i + 0.5) / slides.length * 80) + '%';
    await new Promise(r => setTimeout(r, 20));

    const off = renderSlideToSize(slides[i], fmt.w, fmt.h);
    offCtx.clearRect(0, 0, encW, encH);
    offCtx.drawImage(off, 0, 0, encW, encH);

    const frame = new VideoFrame(offCanvas, {
      timestamp: timestamp,        // microseconds
      duration: delayMs * 1000     // microseconds
    });
    encoder.encode(frame, { keyFrame: true }); // every slide is a keyframe
    frame.close();
    timestamp += delayMs * 1000;
  }

  status.textContent = 'Finalising MP4…';
  pb.style.width = '88%';
  await encoder.flush();
  encoder.close();

  // Propagate config to all chunks (needed for avcC box)
  if (encoderConfig) {
    chunks[0].config = encoderConfig;
  }

  const totalDuration = Math.round(timestamp * timescale / 1_000_000);
  let mp4Bytes;
  try {
    mp4Bytes = Mp4Muxer.build(chunks, encW, encH, timescale, totalDuration);
  } catch (e) {
    console.error('MP4 mux error:', e);
    status.textContent = 'MP4 mux error: ' + e.message;
    return;
  }

  pb.style.width = '100%';
  const blob = new Blob([mp4Bytes], { type: 'video/mp4' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${prefix}-${selectedFmt}.mp4`;
  a.click();
  URL.revokeObjectURL(url);

  status.textContent = `Done! MP4 exported (${slides.length} slides, ${encW}×${encH}, ${(mp4Bytes.length / 1024 / 1024).toFixed(1)} MB).`;
  setTimeout(closeExport, 2500);
}

// ─── BULK IMPORT ──────────────────────────────────────────────────────────────

function showBulkImport() {
  document.getElementById('bulk-modal').classList.add('show');
  document.getElementById('bulk-input').focus();
  updateBulkPreview();
}

function closeBulkImport() {
  document.getElementById('bulk-modal').classList.remove('show');
}

function parseBulkText(raw) {
  return raw.split(/^---+$/m).map(s => s.trim()).filter(s => s.length > 0);
}

function updateBulkPreview() {
  const raw = document.getElementById('bulk-input').value;
  const parts = parseBulkText(raw);
  document.getElementById('bulk-slide-count').textContent =
    parts.length + (parts.length === 1 ? ' slide' : ' slides');
  const chips = document.getElementById('bulk-chips');
  chips.innerHTML = '';
  parts.forEach((p, i) => {
    const preview = p.replace(/\n/g, ' ').slice(0, 34) + (p.length > 34 ? '…' : '');
    const chip = document.createElement('div');
    chip.className = 'bulk-chip';
    chip.innerHTML = `<span class="bulk-chip-num">${i + 1}</span>
      <span class="bulk-chip-text">${preview || '(empty)'}</span>`;
    chips.appendChild(chip);
  });
}

function doBulkImport() {
  const raw = document.getElementById('bulk-input').value.trim();
  if (!raw) return;
  pushUndo();
  const parts = parseBulkText(raw);
  if (!parts.length) return;

  const append  = document.getElementById('bulk-append').checked;
  const inherit = document.getElementById('bulk-inherit').checked;

  let styleTemplate = null;
  let bgTemplate = null;

  if (inherit && slides.length) {
    const srcSlide = slides[currentSlideIdx];
    const srcTb = srcSlide.textBlocks[0];
    if (srcTb) styleTemplate = JSON.parse(JSON.stringify(srcTb));
    bgTemplate = {
      bgType: srcSlide.bgType, bgColor: srcSlide.bgColor,
      gradC1: srcSlide.gradC1, gradC2: srcSlide.gradC2, gradAngle: srcSlide.gradAngle
    };
  }

  if (!append) slides = [];

  parts.forEach(text => {
    const s = makeSlide();
    if (bgTemplate) Object.assign(s, bgTemplate);
    const tb = styleTemplate ? JSON.parse(JSON.stringify(styleTemplate)) : makeTextBlock();
    tb.text = text;
    s.textBlocks = [tb];
    slides.push(s);
  });

  currentSlideIdx = append ? slides.length - parts.length : 0;
  clearSelection();
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
  closeBulkImport();
  document.getElementById('bulk-input').value = '';
}

// ─── KEYBOARD SHORTCUTS ───────────────────────────────────────────────────────

let kbHintTimer = null;
function showKbHint() {
  const el = document.getElementById('kb-hint');
  el.classList.add('show');
  clearTimeout(kbHintTimer);
  kbHintTimer = setTimeout(() => el.classList.remove('show'), 2000);
}

// Double-click any range slider to reset it to its data-default value
document.addEventListener('dblclick', e => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'range') {
    const def = e.target.dataset.default;
    if (def !== undefined) {
      e.target.value = def;
      e.target.dispatchEvent(new Event('input'));
    }
  }
});

document.addEventListener('keydown', e => {
  // Esc closes the help modal
  if (e.key === 'Escape' && document.getElementById('help-modal').classList.contains('show')) {
    closeHelp();
    return;
  }
  // Undo/Redo — fire even when inputs are focused (standard app behaviour)
  if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
    e.preventDefault();
    if (e.shiftKey) { redo(); } else { undo(); }
    return;
  }

  // Don't fire other shortcuts when typing in inputs/textareas
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
  // Don't fire when a modal is open
  if (document.getElementById('bulk-modal').classList.contains('show')) return;
  if (document.getElementById('export-modal').classList.contains('show')) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    if (slides.length > 1) {
      selectSlide((currentSlideIdx + 1) % slides.length);
      showKbHint();
    }
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (slides.length > 1) {
      selectSlide((currentSlideIdx - 1 + slides.length) % slides.length);
      showKbHint();
    }
  } else if (e.key === 'Delete' || e.key === 'Backspace') {
    e.preventDefault();
    if (slides.length > 1) deleteSlide(currentSlideIdx);
  } else if (e.key === 'd' || e.key === 'D') {
    duplicateSlide();
    showKbHint();
  } else if (e.key === 'n' || e.key === 'N') {
    addSlide();
    showKbHint();
  }
});

// ─── RESIZE ───────────────────────────────────────────────────────────────────

window.addEventListener('resize', updateCanvasScale);

// ─── SKINS (interface themes) ─────────────────────────────────────────────────
// Two independent axes, both persisted:
//   skin  (data-skin:  'modern' | 'dos')   → localStorage 'sm-skin'
//   mode  (data-theme: 'dark' | 'light')   → localStorage 'sm-theme'
// First visit (no saved skin) triggers the chooser modal after boot.

const SKINS = {
  modern: { name: 'Modern',  desc: 'Clean studio UI' },
  dos:    { name: 'DOS-86',  desc: 'Retro terminal / BIOS utility' }
};

function applySkin(s) {
  if (!SKINS[s]) s = 'modern';
  document.documentElement.setAttribute('data-skin', s);
  localStorage.setItem('sm-skin', s);
  // Reflect active state in the picker if it's open
  document.querySelectorAll('.skin-card').forEach(c => {
    c.classList.toggle('active', c.dataset.skin === s);
  });
}

function applyTheme(t) {
  if (t !== 'light' && t !== 'dark') t = 'dark';
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('mode-btn');
  if (btn) btn.textContent = t === 'dark' ? '☀︎' : '☾';
  localStorage.setItem('sm-theme', t);
}

function toggleTheme() {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function showSkinPicker() {
  applySkin(localStorage.getItem('sm-skin') || 'modern'); // sync active highlight
  document.getElementById('skin-modal').classList.add('show');
}

function closeSkinPicker() {
  document.getElementById('skin-modal').classList.remove('show');
}

function chooseSkin(s) {
  applySkin(s);
  closeSkinPicker();
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

async function init() {
  // Restore saved skin (default modern). First visit → flag to show chooser.
  const savedSkin = localStorage.getItem('sm-skin');
  const firstVisit = !savedSkin;
  applySkin(savedSkin || 'modern');
  applyTheme(localStorage.getItem('sm-theme') || 'dark');

  // Load fonts first
  await loadFonts();

  // Build font selectors
  buildFontFamilySelect();
  buildFontWeightSelect(FONT_REGISTRY[0]?.family || '');

  // Init color presets
  initPresets();

  // Scale canvas
  updateCanvasScale();

  // Try to restore from localStorage
  if (loadFromLocal()) {
    currentSlideIdx = Math.min(currentSlideIdx, slides.length - 1);
    refreshSlidePicker();
    loadSlideToUI();
    renderCurrent();
    updateUndoButtons();
    document.getElementById('loading-screen').style.display = 'none';
    if (firstVisit) showSkinPicker();
    return;
  }

  // Default sample slides
  const defaultState = {"slides":[{"bgType":"solid","bgColor":"#5d27bf","gradC1":"#8adfb9","gradC2":"#7546d9","gradAngle":222,"bgImage":null,"bgImageFit":"cover","bgImageX":0,"bgImageY":0,"bgImageScale":100,"textBlocks":[{"text":"Your first slide starts here.","fontFamily":"Neue Haas Display","fontSize":55,"fontWeight":"400","fontStyle":"normal","uppercase":false,"color":"#ffffff","opacity":100,"align":"center","lineHeight":1.15,"letterSpacing":0,"x":80,"y":450,"width":920,"shadowOn":false,"shadowColor":"#000000","shadowOpacity":60,"shadowX":4,"shadowY":4,"shadowBlur":8,"strokeOn":false,"strokeColor":"#000000","strokeWidth":2}]},{"bgType":"solid","bgColor":"#5d27bf","gradC1":"#8adfb9","gradC2":"#7546d9","gradAngle":222,"bgImage":null,"bgImageFit":"cover","bgImageX":0,"bgImageY":0,"bgImageScale":100,"textBlocks":[{"text":"And then your next one...","fontFamily":"Neue Haas Display","fontSize":55,"fontWeight":"400","fontStyle":"normal","uppercase":false,"color":"#ffffff","opacity":100,"align":"center","lineHeight":1.15,"letterSpacing":0,"x":80,"y":450,"width":920,"shadowOn":false,"shadowColor":"#000000","shadowOpacity":60,"shadowX":4,"shadowY":4,"shadowBlur":8,"strokeOn":false,"strokeColor":"#000000","strokeWidth":2}]},{"bgType":"solid","bgColor":"#5d27bf","gradC1":"#8adfb9","gradC2":"#7546d9","gradAngle":222,"bgImage":null,"bgImageFit":"cover","bgImageX":0,"bgImageY":0,"bgImageScale":100,"textBlocks":[{"text":"And maybe one here...?","fontFamily":"Neue Haas Display","fontSize":55,"fontWeight":"400","fontStyle":"normal","uppercase":false,"color":"#ffffff","opacity":100,"align":"center","lineHeight":1.15,"letterSpacing":0,"x":80,"y":450,"width":920,"shadowOn":false,"shadowColor":"#000000","shadowOpacity":60,"shadowX":4,"shadowY":4,"shadowBlur":8,"strokeOn":false,"strokeColor":"#000000","strokeWidth":2}]}],"currentSlideIdx":0};
  slides = defaultState.slides;

  currentSlideIdx = 0;
  refreshSlidePicker();
  loadSlideToUI();
  renderCurrent();
  updateUndoButtons();

  // WebCodecs feature detection — disable MP4 button on unsupported browsers
  if (typeof VideoEncoder === 'undefined') {
    const mp4Btn = document.getElementById('btn-export-mp4');
    if (mp4Btn) {
      mp4Btn.disabled = true;
      mp4Btn.title = 'MP4 export requires Chrome, Edge, or Safari 16.4+';
      mp4Btn.style.opacity = '0.45';
      mp4Btn.style.cursor = 'not-allowed';
    }
  }

  // Hide loading screen
  document.getElementById('loading-screen').style.display = 'none';
  if (firstVisit) showSkinPicker();
}

init();
