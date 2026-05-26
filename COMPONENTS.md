# Components

Canonical markup for Leaflet Kit components. **Styling lives in `kit.css`; this file is the HTML to assemble.** When authoring a leaflet, copy the snippet and let the live kit CSS style it — never re-author component CSS per page.

Load order in any consumer: `tokens.css` → `kit.css`.

| Component | Status | Section |
|-----------|--------|---------|
| Button (CTA) | ✅ built | [Button](#button) |
| Menu | ⏳ planned | — |
| Footer | ⏳ planned | — |
| Technique card | ⏳ planned | — |

---

## Button

CTA button. Mapped 1:1 to Figma **Button (slim)** — `eaPdzBQjxfakthQhIgQfL0 / 25:107`.

### Markup

Real navigation/checkout CTAs are links (`<a>`); in-page actions are `<button>` (DESIGN.md a11y rule). The classes are identical on either element.

```html
<!-- Primary (default): the standard CTA. Always blue. -->
<a class="cta-btn" href="#">See what you'll get</a>

<!-- Secondary: outlined, lower emphasis -->
<a class="cta-btn cta-btn--secondary" href="#">Learn more</a>

<!-- Ghost: text-only, lowest emphasis -->
<button class="cta-btn cta-btn--ghost" type="button">Maybe later</button>

<!-- Sizes: sm / (default) / lg -->
<a class="cta-btn cta-btn--sm" href="#">Small</a>
<a class="cta-btn cta-btn--lg" href="#">Large</a>

<!-- Icon-only (40×40). Provide an aria-label. -->
<button class="cta-btn cta-btn--icon" type="button" aria-label="Next">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

<!-- On a dark surface: add --on-dark (white pill / white outline / white text) -->
<a class="cta-btn cta-btn--on-dark" href="#">See what you'll get</a>
<a class="cta-btn cta-btn--secondary cta-btn--on-dark" href="#">Learn more</a>

<!-- Disabled (use the attribute on <button>; the kit also handles .is-disabled for <a>) -->
<button class="cta-btn" type="button" disabled>Unavailable</button>
```

### Variants (matches the Figma 4-axis matrix — 72 combinations)

| Axis | Values | Class |
|------|--------|-------|
| Variant | Primary *(default)* / Secondary / Ghost | `--secondary`, `--ghost` |
| Size | default / sm / lg / icon | `--sm`, `--lg`, `--icon` |
| On | Light *(default)* / Dark | `--on-dark` |
| State | Default / Hover / Disabled / Focus | `:hover`, `[disabled]`, `:focus-visible` (auto) |

**When to use which:** Primary = the single most important next step (checkout, "See what you'll get"). Secondary = a real but lesser action next to a primary. Ghost = tertiary / dismissive. `--on-dark` whenever the button sits on a dark (`data-theme="dark"`) surface.

### States

- **Hover** — color shift only (no scale/shadow change), via the `*-hover` tokens.
- **Focus** — 2px ring: brand blue on light, white on dark. Works on real keyboard focus (`:focus-visible`). *(The legacy starter button had no focus state — this is new here.)*
- **Disabled** — `[disabled]` on `<button>`, or `.is-disabled` for a styled `<a>`; drops to the disabled tokens and blocks pointer events.
- **Force-state hooks** (review/preview only) — `.is-hover` / `.is-focus` / `.is-disabled` paint a state without real interaction. **Never add these in real leaflets.**

### Token bindings

`--cta-primary` / `--cta-primary-hover` (fill) · `--text-on-color` (label) · `--cta-inverse` / `--cta-inverse-hover` + `--text-on-cta-inverse` (on-dark primary) · `--border-cta` / `--border-cta-hover` / `--border-cta-inverse` (secondary) · `--text-link` / `--text-link-hover` (secondary + ghost label) · `--cta-disabled` / `--cta-disabled-inverse` / `--text-on-disabled` / `--border-disabled` / `--border-disabled-inverse` (disabled) · `--shadow-button` (primary flat shadow) · `--radius-full` · `--space-8/16/24/32` · `--text-cta-*-size` · `--font-weight-medium/bold` · `--stroke-1/2`.

### Known gaps (deferred)

- **Icon glyph is a placeholder.** The `--icon` button uses a generic chevron SVG; Figma uses a specific `Icon / Circle` vector. Pull the real glyph(s) when the icon system is built.
- **No optional leading/trailing icon slots.** The Figma text buttons have hidden icon slots flanking the label; the markup here is text-only. Add slots when icons are tackled.

### ⚠️ Boundary — CTAs are always blue

Brand **orange is never used on a CTA button** (primary *or* secondary). The legacy `.cta-btn--accent` (orange) is retained only for non-button marketing fills outside the slim-button matrix and is **not** part of the Figma component. To brand-up a CTA region, put orange *around* the button (eyebrow, tag), never on it. (DESIGN.md)
