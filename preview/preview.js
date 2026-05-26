/* Review harness controller.
   Holds current theme + state, posts them into the iframe, and resizes the
   iframe so media queries (the 1024px type pivot) fire for real. */
(function () {
  var frame = document.getElementById('frame');
  var stage = document.getElementById('stage');
  var wlabel = document.getElementById('wlabel');

  var state = { theme: 'light', state: 'default' };

  function post() {
    if (frame.contentWindow) frame.contentWindow.postMessage(state, '*');
  }

  // Re-apply on (re)load so the frame always reflects the current controls.
  frame.addEventListener('load', post);

  function activate(groupEl, btn) {
    groupEl.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
    btn.classList.add('is-active');
  }

  // Background
  document.querySelectorAll('[data-bg]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.theme = btn.dataset.bg;
      activate(btn.closest('.seg'), btn);
      post();
    });
  });

  // State
  document.querySelectorAll('[data-state]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.state = btn.dataset.state;
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
      // keep narrow frames centered, wide frames scrollable from the left
      stage.style.justifyContent = (w !== 'full' && parseInt(w, 10) > stage.clientWidth - 56) ? 'flex-start' : 'center';
      activate(btn.closest('.seg'), btn);
    });
  });
})();
