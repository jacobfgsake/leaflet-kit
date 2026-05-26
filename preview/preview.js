/* Review harness controller.
   Switches the previewed component, holds current theme + state, posts them
   into the iframe, and resizes the iframe so media queries (768 nav pivot,
   1024 type pivot) fire for real.

   Each component declares its own State axis + which message key the frame
   listens on. The button frame reads `state`; the menu frame reads `menuState`.
   The shared `theme` (background) + width controls apply to both. */
(function () {
  var frame = document.getElementById('frame');
  var stage = document.getElementById('stage');
  var wlabel = document.getElementById('wlabel');
  var nameEl = document.getElementById('component-name');
  var stateSeg = document.getElementById('state-seg');

  var COMPONENTS = {
    button: {
      label: 'Button (CTA)',
      src: 'frame.html',
      key: 'state',
      states: [['default', 'Default'], ['hover', 'Hover'], ['focus', 'Focus'], ['disabled', 'Disabled']]
    },
    menu: {
      label: 'Menu',
      src: 'frame-menu.html',
      key: 'menuState',
      states: [['over-light', 'Over Light'], ['over-dark', 'Over Dark'], ['scrolled', 'Scrolled']]
    }
  };

  var current = 'button';
  // One message carries every axis; each frame reads only the keys it knows.
  var msg = { theme: 'light', state: 'default', menuState: 'over-light' };

  function post() {
    if (frame.contentWindow) frame.contentWindow.postMessage(msg, '*');
  }
  // Re-apply on (re)load so the frame always reflects the current controls.
  frame.addEventListener('load', post);

  function activate(groupEl, btn) {
    groupEl.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
    btn.classList.add('is-active');
  }

  // Build the State segmented control for the active component.
  function buildStates(compKey) {
    var comp = COMPONENTS[compKey];
    stateSeg.innerHTML = '';
    msg[comp.key] = comp.states[0][0];
    comp.states.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.dataset.state = s[0];
      b.textContent = s[1];
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', function () {
        msg[comp.key] = s[0];
        activate(stateSeg, b);
        post();
      });
      stateSeg.appendChild(b);
    });
  }

  // Component switch
  document.querySelectorAll('[data-component]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      current = btn.dataset.component;
      var comp = COMPONENTS[current];
      activate(btn.closest('.seg'), btn);
      nameEl.textContent = comp.label;
      buildStates(current);
      frame.src = comp.src; // triggers load → post()
    });
  });

  // Background (theme) — applies to both components
  document.querySelectorAll('[data-bg]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      msg.theme = btn.dataset.bg;
      activate(btn.closest('.seg'), btn);
      post();
    });
  });

  // Width presets — set the iframe's own viewport width
  document.querySelectorAll('[data-w]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var w = btn.dataset.w;
      if (w === 'full') {
        frame.style.width = '100%';
        wlabel.textContent = 'full';
      } else {
        frame.style.width = w + 'px';
        wlabel.textContent = w + 'px';
      }
      stage.style.justifyContent = (w !== 'full' && parseInt(w, 10) > stage.clientWidth - 56) ? 'flex-start' : 'center';
      activate(btn.closest('.seg'), btn);
    });
  });

  // Init the State control for the default component.
  buildStates(current);
})();
