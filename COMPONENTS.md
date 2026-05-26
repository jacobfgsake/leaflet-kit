# Components

Canonical markup for Leaflet Kit components. **Styling lives in `kit.css`; this file is the HTML to assemble.** When authoring a leaflet, copy the snippet and let the live kit CSS style it — never re-author component CSS per page.

Load order in any consumer: `tokens.css` → `kit.css`, then `kit.js` (`defer`) for interactive components (e.g. the menu drawer).

| Component | Status | Section |
|-----------|--------|---------|
| Button (CTA) | ✅ built | [Button](#button) |
| Menu | ✅ built | [Menu](#menu) |
| Menu drawer | ✅ built | [Menu drawer](#menu-drawer) |
| Logo | ✅ built | [Logo](#logo) |
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

---

## Menu

Header / nav bar. Mapped 1:1 to Figma **menu** — `eaPdzBQjxfakthQhIgQfL0 / 84:706`.

A single `color` on `.menu` drives the logo (`fill="currentColor"`), the Login link, and the hamburger together. The CTA keeps its own blue fill in every state.

### Markup

```html
<header class="menu" role="banner">
  <div class="menu__inner">
    <a class="menu__logo" href="https://www.omgyes.com" aria-label="OMGYES home">
      <svg class="menu__logo-mark" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M60.4255 15.0425V19.681H62V9.88137H51.0471V11.6598H59.8368C59.6588 14.4618 57.304 18.2655 53.5321 18.1929C48.9524 18.1929 46.2279 14.8102 46.2279 9.983C46.2279 5.15579 49.4248 1.76585 53.3199 1.76585C56.9891 1.76585 59.1591 3.4572 60.1654 7.20283L61.8631 6.53499C61.0005 2.43368 58.0707 0.00192583 53.3815 0.00192583C48.3295 -0.106959 44.2495 4.41537 44.3248 9.99751C44.2495 15.7103 48.2542 20.0947 53.224 19.9859C57.0367 19.9859 59.0751 17.7222 60.4255 15.0425ZM41.792 19.71V0.248728H38.4171L31.5716 18.3163L24.7261 0.248728H21.3512V19.681H23.1858V1.19238L30.223 19.681H32.8928L39.9368 1.19238V19.681L41.792 19.71ZM9.52898 18.2074C5.31213 18.2074 2.12212 14.9626 2.12212 10.0193C2.12212 5.07593 5.20945 1.78038 9.52898 1.78038C13.8485 1.78038 16.9153 4.99609 16.9153 10.0048C16.9153 15.0135 13.8006 18.2147 9.50845 18.2147L9.52898 18.2074ZM9.50845 0.00919188C7.64069 -0.00806855 5.8102 0.563447 4.24929 1.65123C2.68837 2.73902 1.4674 4.29401 0.741337 6.11888C0.0152697 7.94375 -0.183162 9.95623 0.171224 11.9009C0.52561 13.8455 1.41684 15.6347 2.7318 17.0414C4.04676 18.448 5.72617 19.4087 7.5569 19.8015C9.38763 20.1943 11.2871 20.0015 13.0144 19.2476C14.7416 18.4936 16.2186 17.2126 17.2581 15.567C18.2976 13.9214 18.8525 11.9854 18.8526 10.0048C18.8803 8.69146 18.6582 7.38569 18.1994 6.16542C17.7407 4.94515 17.0548 3.8354 16.1826 2.90246C15.3105 1.96951 14.27 1.23248 13.1233 0.735376C11.9766 0.238275 10.7472 -0.00869103 9.50845 0.00919188Z"/>
        <path fill="currentColor" d="M107.159 3.33448C109.247 3.33448 110.578 4.44597 111.151 6.66896L114.202 4.78016C113.185 1.69268 110.598 0 107.377 0C103.439 0 100.778 2.41914 100.778 5.39039C100.778 8.74667 102.941 10.7808 107.247 11.4709C110.38 12.0012 111.424 12.8076 111.424 14.246C111.424 15.6844 109.991 16.5852 107.793 16.5852C105.111 16.5852 103.2 15.0015 102.47 12.0012L99.3444 14.0862C99.8866 16.0072 101.088 17.6409 102.709 18.6629C104.245 19.5551 105.969 20.0151 107.718 19.9996C112.154 19.9996 115 17.5006 115 14.108C115 10.7154 113.014 9.19707 108.551 8.29626C105.944 7.7732 104.299 6.96682 104.299 5.39039C104.299 4.19172 105.418 3.30544 107.172 3.30544L107.159 3.33448ZM83.2862 0.246996V19.6945H97.2698V16.222H86.7736V11.4128H96.1915V7.94027H86.7736V3.7195H96.9763V0.246996H83.2862ZM68.1766 0.246996H64L70.9952 11.9722V19.6945H74.5166V12.0012L81.4845 0.276061H77.5672L72.7423 8.49967L68.1766 0.246996Z"/>
      </svg>
    </a>
    <div class="menu__actions">
      <a class="menu__login" href="#">Login</a>
      <a class="cta-btn cta-btn--sm" href="#">See what you'll get</a>
      <button class="menu__toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <svg class="menu__icon menu__icon--open" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M4 8C4 7.44772 4.44772 7 5 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H5C4.44772 9 4 8.55228 4 8Z"/>
          <path fill="currentColor" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"/>
          <path fill="currentColor" d="M4 24C4 23.4477 4.44772 23 5 23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24Z"/>
        </svg>
        <svg class="menu__icon menu__icon--close" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.05103 7.05103C7.4524 6.64966 8.10315 6.64966 8.50453 7.05103L16 14.5465L23.4955 7.05103C23.8968 6.64966 24.5476 6.64966 24.949 7.05103C25.3503 7.4524 25.3503 8.10315 24.949 8.50453L17.4535 16L24.949 23.4955C25.3503 23.8968 25.3503 24.5476 24.949 24.949C24.5476 25.3503 23.8968 25.3503 23.4955 24.949L16 17.4535L8.50453 24.949C8.10315 25.3503 7.4524 25.3503 7.05103 24.949C6.64966 24.5476 6.64966 23.8968 7.05103 23.4955L14.5465 16L7.05103 8.50453C6.64966 8.10315 6.64966 7.4524 7.05103 7.05103Z"/>
        </svg>
      </button>
    </div>
  </div>
</header>
```

Login is hidden `< 768`; the hamburger is hidden `≥ 768`. Keep **both** in the markup — the kit toggles their visibility at the breakpoint. The CTA is the real Button: ship the `cta-btn--sm` variant (Figma xs), and the kit promotes it to the default size `≥ 768` (Figma lg) — no bespoke button styling.

### States (matches the Figma `State` variant)

| State | Class | Background | Content | When |
|-------|-------|-----------|---------|------|
| Over Light *(default)* | *(base)* | transparent | dark (`text/icon-primary`) | bar sits over a **light** hero |
| Over Dark | `is-over-dark` | transparent | light (`text/icon-inverse`) | bar sits over a **dark** hero |
| Scrolled | `is-scrolled` | `surface/header` | `on-header` | after the page scrolls |

`State` is **context, not theme** — pick by what's *behind* the bar, not the page's `data-theme`. The `Size` axis (Figma `xs`/`lg`) is the **768** breakpoint, handled automatically in CSS.

**Cream:** has no transparent phase — `[data-theme="cream"] .menu` always renders the Scrolled look (header surface is indigo in cream). You don't add a class for this; the theme does it.

### Positioning + scroll behavior (the leaflet's job)

The kit styles the **bar**, not the page layout. Add positioning and the scroll toggle in your leaflet:

```html
<!-- overlay the menu on the hero: relative hero + the menu pulled over it -->
<style>
  .menu { position: sticky; top: 0; z-index: 50; }
</style>
<script>
  // Toggle Scrolled once the hero has passed under the bar.
  (function () {
    var menu = document.querySelector('.menu');
    var trigger = 64; // px scrolled before solidifying
    function onScroll() {
      menu.classList.toggle('is-scrolled', window.scrollY > trigger);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  })();
</script>
```

For a **dark** hero, add `is-over-dark` to the menu so the transparent (pre-scroll) content is light:

```html
<header class="menu is-over-dark"> … </header>
```

(Per the Leaflet platform, JS is injected *after* `interactive`, so the IIFE runs immediately — no `DOMContentLoaded` wrapper needed.)

### Token bindings

`--text-primary` / `--text-inverse` / `--text-on-header` (content color per state, via one `color`) · `--text-primary-hover` / `--text-on-header-hover` / `--text-inverse-hover` (Login hover per state, see below) · `--surface-header` (Scrolled + cream fill) · `--space-16` / `--space-32` / `--space-40` (padding + action gap) · `--text-body-lg-size` (Login) · `--stroke-2` + `--radius-xs` (focus rings — kit a11y floor). The CTA pulls its own tokens (`--cta-primary`, `--cta-primary-hover`, etc.) from the Button component. Logo + hamburger are inline SVG with `fill`/`stroke="currentColor"`, so they inherit the menu `color`.

**Login hover:** every state dims the Login to the `*-hover` token matching its text role — `text/primary-hover` (Over Light), `text/on-header-hover` (Scrolled + cream), `text/inverse-hover` (Over Dark) — wired via a per-state `--menu-login-hover` custom property. All are mode-aware and dim the *current* color (grey-900→grey-700, white→grey-300), so the hover always tracks the text and never lands dark-on-white.

### Hamburger toggle

The toggle holds both Figma icons — `menu-icon` (hamburger) and `menu-cross` (X). The kit swaps them on `aria-expanded`, so the leaflet only flips the attribute:

```js
var toggle = document.querySelector('.menu__toggle');
toggle.addEventListener('click', function () {
  var open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  // ...open/close your nav panel here...
});
```

### Known gaps (deferred)

- **Hamburger opens the menu drawer.** The `.menu__toggle` opens the full-screen [Menu drawer](#menu-drawer) (slides from the right) via `kit.js`; the ☰→✕ swap is CSS. The drawer markup + `kit.js` must be present — without them the toggle just swaps the icon.
- **Login href is a placeholder.** Point it at the real login URL per leaflet.

---

## Menu drawer

Full-screen mobile panel the hamburger opens — Figma **expanded-menu** (`eaPdzBQjxfakthQhIgQfL0 / 127:545`). Slides in from the right and sits **under** the persistent `.menu` bar, so the bar stays as the header (logo + CTA + the ☰→✕ toggle). **Mobile-only**: the hamburger is hidden ≥768 (Login shows instead), so the drawer never opens there.

Requires `kit.js` (the toggle behavior) and the `.menu` bar on the same page — its `.menu__toggle` is what opens this.

### Markup

```html
<!-- The drawer lives anywhere in the body; kit.js links it to the menu's hamburger. -->
<div class="menu-drawer" id="menu-drawer" aria-hidden="true">
  <p class="menu-drawer__prompt">Already have an account?</p>
  <a class="cta-btn menu-drawer__login" href="#">Login</a>
</div>
```

Pair it with the menu bar and load the kit JS once:

```html
<header class="menu" role="banner"> … </header>
<!-- … page content … -->
<div class="menu-drawer" id="menu-drawer" aria-hidden="true"> … </div>
<script src="kit.js" defer></script>
```

### Behavior (kit.js)

- The hamburger (`.menu__toggle`) toggles `.menu-drawer.is-open` + its `aria-expanded` (the ☰→✕ swap is CSS). **Escape** closes it and returns focus to the toggle.
- While open, `<html>` gets `.menu-drawer-open` so page scroll is locked.
- `position: fixed` keeps the off-screen (right) panel from adding a horizontal scrollbar.

### Token bindings

`--surface-page` (panel fill) · `--text-secondary` + `--text-body-lg-size` (the prompt) · `--space-16` (gap) · `--space-24` (side padding) · `--space-104` (bottom offset, falls back to 104px). The Login is a fixed **200px**-wide `.cta-btn` (`.menu-drawer__login`) per Figma — not hug.

### Known gaps (deferred)

- **Content is just the Login prompt** (matches the current Figma) — no nav links yet.
- **Login href is a placeholder.** Point it at the real login URL per leaflet.

---

## Logo

OMGYES wordmark — Figma **OMGYES_Logo** (`eaPdzBQjxfakthQhIgQfL0 / 84:636`). A standalone, reusable inline SVG: it inherits color via `currentColor` (set `color` on a parent) and is sized by its `width`/`height` attributes. The menu uses it inside `.menu__logo`; drop this anywhere else a logo is needed (e.g. the footer).

### Markup

```html
<svg width="115" height="20" viewBox="0 0 115 20" fill="none" role="img" aria-label="OMGYES" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M60.4255 15.0425V19.681H62V9.88137H51.0471V11.6598H59.8368C59.6588 14.4618 57.304 18.2655 53.5321 18.1929C48.9524 18.1929 46.2279 14.8102 46.2279 9.983C46.2279 5.15579 49.4248 1.76585 53.3199 1.76585C56.9891 1.76585 59.1591 3.4572 60.1654 7.20283L61.8631 6.53499C61.0005 2.43368 58.0707 0.00192583 53.3815 0.00192583C48.3295 -0.106959 44.2495 4.41537 44.3248 9.99751C44.2495 15.7103 48.2542 20.0947 53.224 19.9859C57.0367 19.9859 59.0751 17.7222 60.4255 15.0425ZM41.792 19.71V0.248728H38.4171L31.5716 18.3163L24.7261 0.248728H21.3512V19.681H23.1858V1.19238L30.223 19.681H32.8928L39.9368 1.19238V19.681L41.792 19.71ZM9.52898 18.2074C5.31213 18.2074 2.12212 14.9626 2.12212 10.0193C2.12212 5.07593 5.20945 1.78038 9.52898 1.78038C13.8485 1.78038 16.9153 4.99609 16.9153 10.0048C16.9153 15.0135 13.8006 18.2147 9.50845 18.2147L9.52898 18.2074ZM9.50845 0.00919188C7.64069 -0.00806855 5.8102 0.563447 4.24929 1.65123C2.68837 2.73902 1.4674 4.29401 0.741337 6.11888C0.0152697 7.94375 -0.183162 9.95623 0.171224 11.9009C0.52561 13.8455 1.41684 15.6347 2.7318 17.0414C4.04676 18.448 5.72617 19.4087 7.5569 19.8015C9.38763 20.1943 11.2871 20.0015 13.0144 19.2476C14.7416 18.4936 16.2186 17.2126 17.2581 15.567C18.2976 13.9214 18.8525 11.9854 18.8526 10.0048C18.8803 8.69146 18.6582 7.38569 18.1994 6.16542C17.7407 4.94515 17.0548 3.8354 16.1826 2.90246C15.3105 1.96951 14.27 1.23248 13.1233 0.735376C11.9766 0.238275 10.7472 -0.00869103 9.50845 0.00919188Z"/>
  <path fill="currentColor" d="M107.159 3.33448C109.247 3.33448 110.578 4.44597 111.151 6.66896L114.202 4.78016C113.185 1.69268 110.598 0 107.377 0C103.439 0 100.778 2.41914 100.778 5.39039C100.778 8.74667 102.941 10.7808 107.247 11.4709C110.38 12.0012 111.424 12.8076 111.424 14.246C111.424 15.6844 109.991 16.5852 107.793 16.5852C105.111 16.5852 103.2 15.0015 102.47 12.0012L99.3444 14.0862C99.8866 16.0072 101.088 17.6409 102.709 18.6629C104.245 19.5551 105.969 20.0151 107.718 19.9996C112.154 19.9996 115 17.5006 115 14.108C115 10.7154 113.014 9.19707 108.551 8.29626C105.944 7.7732 104.299 6.96682 104.299 5.39039C104.299 4.19172 105.418 3.30544 107.172 3.30544L107.159 3.33448ZM83.2862 0.246996V19.6945H97.2698V16.222H86.7736V11.4128H96.1915V7.94027H86.7736V3.7195H96.9763V0.246996H83.2862ZM68.1766 0.246996H64L70.9952 11.9722V19.6945H74.5166V12.0012L81.4845 0.276061H77.5672L72.7423 8.49967L68.1766 0.246996Z"/>
</svg>
```

- **Color** — `fill="currentColor"` on the paths, so set `color` on the SVG or an ancestor. (In the menu, one `color` drives logo + Login + hamburger together.)
- **Size** — change the `width`/`height` attributes; aspect ratio is 115:20.
- **Link / label** — wrap in `<a aria-label="OMGYES home">` when it's a home link (as the menu does). Standalone it already carries `role="img"` + `aria-label="OMGYES"`.
