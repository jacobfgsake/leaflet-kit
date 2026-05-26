import figma, { html } from '@figma/code-connect/html'

// Leaflet Kit CTA button. Styling lives in kit.css; this mirrors the canonical markup in
// COMPONENTS.md. Published to Figma via `figma connect publish` (see package.json scripts).
//
// The Figma icon props (Show Left/Right Icon, Left/Right Icon) are intentionally omitted:
// the kit has no leading/trailing icon slots yet (deferred gap). Only the icon-only `--icon`
// size renders a glyph, currently a placeholder chevron.
//
// State (Default / Hover / Disabled) is not branched: hover & focus are automatic CSS
// (:hover / :focus-visible), and disabled is added per-use (`disabled` on <button>, or
// `.is-disabled` on <a>). So the snippet is the same markup across states.

// Icon-only (40×40 square) — distinct markup: a <button> wrapping the glyph. Always aria-labelled.
figma.connect('https://www.figma.com/design/eaPdzBQjxfakthQhIgQfL0/Leaflet-UI-Kit?node-id=25-107', {
  variant: { Size: 'icon' },
  props: {
    label: figma.string('Button Text'),
    variant: figma.enum('Variant', {
      Primary: '',
      Secondary: ' cta-btn--secondary',
      Ghost: ' cta-btn--ghost',
    }),
    onDark: figma.enum('On', { Light: '', Dark: ' cta-btn--on-dark' }),
  },
  example: ({ label, variant, onDark }) => html`<button class="cta-btn cta-btn--icon${variant}${onDark}" type="button" aria-label="${label}">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>`,
})

// Default — the standard CTA as a link, with the full Variant × Size × On class matrix.
figma.connect('https://www.figma.com/design/eaPdzBQjxfakthQhIgQfL0/Leaflet-UI-Kit?node-id=25-107', {
  props: {
    label: figma.string('Button Text'),
    variant: figma.enum('Variant', {
      Primary: '',
      Secondary: ' cta-btn--secondary',
      Ghost: ' cta-btn--ghost',
    }),
    size: figma.enum('Size', {
      default: '',
      sm: ' cta-btn--sm',
      lg: ' cta-btn--lg',
      icon: '',
    }),
    onDark: figma.enum('On', { Light: '', Dark: ' cta-btn--on-dark' }),
  },
  example: ({ label, variant, size, onDark }) =>
    html`<a class="cta-btn${variant}${size}${onDark}" href="#">${label}</a>`,
})
