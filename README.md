# Leaflet Kit

The canonical design-system CSS + component catalog for OMGYES leaflets
(`go.omgyes.com/lp/{slug}`). One source every leaflet derives from, so a token
or component change happens in one place instead of in every page's frozen copy.

> **Status:** WIP. First slice = the CTA (button) + a browser review harness.
> Live-sync hosting and Code Connect are deferred.

## Files

| File | What it is |
|------|------------|
| `tokens.css` | Figma-synced `:root` design tokens (colors, type, spacing, radius, themes). Sync target — do not hand-edit the token block. |
| `kit.css` | Hand-authored layer: base reset, text utilities, layout helpers, component CSS. References `tokens.css` via `var(--…)`. |
| `COMPONENTS.md` | Catalog + canonical markup snippets + variant/usage notes (one section per component). |
| `preview/` | Browser review harness — view each component across backgrounds, states, and breakpoints. |

Source of truth: tokens = Figma `QTufINMrSoca0EC8ppBZQ3`; components = Figma `eaPdzBQjxfakthQhIgQfL0`.

## Using the kit

**Review a component:** open `preview/index.html` in a browser. Toggle background (light/dark/cream), state (default/hover/disabled/focus), and width preset; Tab inside the frame to test real keyboard focus.

**In a leaflet (interim):** the leaflet's `style.css` is seeded from `tokens.css` + `kit.css` (in that order) plus any page-specific overrides below. Grab component markup from `COMPONENTS.md`. Always load tokens before kit.

**Token sync:** the `:root` block in `tokens.css` (between the `@figma-sync` markers) is regenerated from Figma — don't hand-edit it. Hand-authored CSS lives in `kit.css`.

## Deferred (not built yet)

- **Live-sync hosting** — serving `kit.css`/`tokens.css` from a CDN/Sanity so leaflets `<link>` them live instead of copying. The files are structured so this is a drop-in later, no rework.
- **Code Connect** — mapping the Figma components to these snippets.
- **More components** — menu, footer, technique-card (built fresh next).
