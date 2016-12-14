/**
 * Copyright (c) 2016 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-hello
 */

// Set currentScript, mind the polyfill
document.polyfillCurrentScript = document.currentScript || document.polyfillCurrentScript;

const name = 'z-hello';

class Component extends HTMLElement {

  constructor() {
    super();
    const context = document.polyfillCurrentScript.parentElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = context.querySelector('template');
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

// Register the new element/component
window.customElements.define(name, Component);
