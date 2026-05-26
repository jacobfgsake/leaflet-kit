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
