/* Leaflet Kit — component behaviours.
 *
 * Dependency-free. Load once per page after kit.css:
 *   <script src="kit.js" defer></script>
 *
 * Self-initialises whether the DOM is already parsed or not, so it works both
 * as a normal <script defer> and when injected late (the Leaflet platform
 * injects page JS after `interactive`). Each behaviour no-ops if its markup
 * isn't present, so it's safe to load on every page.
 */
(function () {
  'use strict';

  /* Menu drawer: the .menu hamburger (.menu__toggle) opens the full-screen
   * .menu-drawer panel. The ☰ ↔ ✕ icon swap is pure CSS (driven by
   * aria-expanded); this just toggles state + closes on Escape. */
  function initMenuDrawer() {
    var toggle = document.querySelector('.menu__toggle');
    var drawer = document.querySelector('.menu-drawer');
    if (!toggle || !drawer) return;

    if (!toggle.hasAttribute('aria-controls') && drawer.id) {
      toggle.setAttribute('aria-controls', drawer.id);
    }

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      document.documentElement.classList.toggle('menu-drawer-open', open);
    }

    setOpen(toggle.getAttribute('aria-expanded') === 'true'); // sync to initial markup

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function init() {
    initMenuDrawer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
