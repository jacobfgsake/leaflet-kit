import figma, { html } from '@figma/code-connect/html'

// Leaflet Kit menu drawer (Figma "expanded-menu" 127:545). Mirrors COMPONENTS.md.
// Body-only: the persistent .menu bar (with Show CTA on) is the header, and the
// hamburger toggles this panel via kit.js. Slides in from the right, mobile-only.
// Styling lives in kit.css; behaviour in kit.js (load both, kit.js after kit.css).

figma.connect('https://www.figma.com/design/eaPdzBQjxfakthQhIgQfL0/Leaflet-UI-Kit?node-id=127-545', {
  example: () => html`<!-- Drawer body. The persistent .menu bar is the header; the hamburger toggles this via kit.js. -->
<div class="menu-drawer" id="menu-drawer" aria-hidden="true">
  <p class="menu-drawer__prompt">Already have an account?</p>
  <a class="cta-btn menu-drawer__login" href="#">Login</a>
</div>`,
})
