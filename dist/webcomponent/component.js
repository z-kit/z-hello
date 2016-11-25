/**
 * Copyright (c) 2016 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-component
 */

class Component extends HTMLElement {
  constructor() {
    super();
    const context = document.currentScript.parentElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = context.querySelector('template');
    const clone = template.content.cloneNode(true);
    clone.querySelector('content').textContent = this.textContent;
    shadowRoot.appendChild(clone);
  }
}

// Register the new element/component
window.customElements.define('z-component', Component);
