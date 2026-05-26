import figma, { html } from '@figma/code-connect/html'

// Leaflet Kit icons — the menu's hamburger + X glyphs. Mapped at the component set
// "menu" (127:478) via its `icon` variant (menu-icon / menu-cross). (84:673 is the page.)
// Bare 32x32 inline SVGs, currentColor (color comes from the parent). The menu inlines these
// directly; this exposes each glyph as a reusable Dev Mode snippet. Wrap in an aria-labelled
// control when used on its own.

figma.connect('https://www.figma.com/design/eaPdzBQjxfakthQhIgQfL0/Leaflet-UI-Kit?node-id=127-478', {
  variant: { icon: 'menu-icon' },
  example: () => html`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M4 8C4 7.44772 4.44772 7 5 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H5C4.44772 9 4 8.55228 4 8Z"/>
          <path fill="currentColor" d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"/>
          <path fill="currentColor" d="M4 24C4 23.4477 4.44772 23 5 23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24Z"/>
        </svg>`,
})

figma.connect('https://www.figma.com/design/eaPdzBQjxfakthQhIgQfL0/Leaflet-UI-Kit?node-id=127-478', {
  variant: { icon: 'menu-cross' },
  example: () => html`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.05103 7.05103C7.4524 6.64966 8.10315 6.64966 8.50453 7.05103L16 14.5465L23.4955 7.05103C23.8968 6.64966 24.5476 6.64966 24.949 7.05103C25.3503 7.4524 25.3503 8.10315 24.949 8.50453L17.4535 16L24.949 23.4955C25.3503 23.8968 25.3503 24.5476 24.949 24.949C24.5476 25.3503 23.8968 25.3503 23.4955 24.949L16 17.4535L8.50453 24.949C8.10315 25.3503 7.4524 25.3503 7.05103 24.949C6.64966 24.5476 6.64966 23.8968 7.05103 23.4955L14.5465 16L7.05103 8.50453C6.64966 8.10315 6.64966 7.4524 7.05103 7.05103Z"/>
        </svg>`,
})
