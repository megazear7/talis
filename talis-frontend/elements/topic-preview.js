var template = document.createElement('template');
// While it is preferred to use id's inside of classes, the ShadyCSS polyfill does not support it.
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
    .container {
      padding: var(--standard-padding);
    }
    .header {
      width: 50%;
      float: left;
      padding-right: 25px;
    }
    .content {
      width: 50%;
      float: right;
      padding: 1rem;
    }
    .clear {
      clear: both;
    }
    h3 {
      border-bottom: 1px solid black;
      font-size: var(--h3-font-size);
    }
    .container.bold h3 {
      font-weight: bold;
    }
    h6 {
      color: var(--gray);
      font-size: var(--h6-font-size);
    }
  </style>
  <div class="container">
    <div class="header">
      <h3><slot name="subtitle"></h3>
      <h6><slot name="title"></h6>
    </div>
    <div class="content">
      <slot name="content">
    </div>
    <div class="clear"></div>
  </div>
`;

if (typeof ShadyCSS !== "undefined") ShadyCSS.prepareTemplate(template, 'talis-topic-preview');

export default class TalisTopicPreview extends HTMLElement {
  static get is() {
    return 'talis-topic-preview';
  }

  static get observedAttributes() {
    return ['bold'];
  }

  get bold() { return this.getAttribute('bold') }
  set bold(bold) {
    if (bold) {
      this.setAttribute('bold', bold);
    } else {
      this.removeAttribute('bold');
    }
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$container = () => this.shadowRoot.querySelector(".container");
  }

  connectedCallback() {
    if (typeof ShadyCSS !== "undefined") ShadyCSS.styleElement(this);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'title') {
      this._titleChanged(oldVal, newVal);
    }
  }

  _boldChanged(oldVal, newVal) {
    if (newVal) {
      this.$container().classList.add("bold");
    } else {
      this.$container().classList.remove("bold");
    }
  }
}

if (window.customElements) {
  customElements.define(TalisTopicPreview.is, TalisTopicPreview);
} else {
  window.addEventListener('WebComponentsReady', () => customElements.define(TalisTopicPreview.is, TalisTopicPreview));
}
