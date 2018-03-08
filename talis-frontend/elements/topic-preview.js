var template = document.createElement('template');
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
    h6 {
      color: var(--gray);
      font-size: var(--h6-font-size);
    }
  </style>
  <div class="container">
    <div class="header">
      <h3></h3>
      <h6></h6>
    </div>
    <div class="content">
      <slot>
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
    return ['title', 'subtitle'];
  }

  get title() { return this.getAttribute('title') }
  set title(title) {
    if (title) {
      this.setAttribute('title', title);
    } else {
      this.removeAttribute('title');
    }
  }

  get subtitle() { return this.getAttribute('subtitle') }
  set subtitle(subtitle) {
    if (subtitle) {
      this.setAttribute('subtitle', subtitle);
    } else {
      this.removeAttribute('subtitle');
    }
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$title = () => this.shadowRoot.querySelector("h3");
    this.$subtitle = () => this.shadowRoot.querySelector("h6");
  }

  connectedCallback() {
    if (typeof ShadyCSS !== "undefined") ShadyCSS.styleElement(this);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'title') {
      this._titleChanged(oldVal, newVal);
    } else if (attrName === 'subtitle') {
      this._subtitleChanged(oldVal, newVal);
    }
  }

  _titleChanged(oldVal, newVal) {
    if (newVal) {
      this.$title().textContent = newVal
    } else {
      this.$title().textContent = ''
    }
  }

  _subtitleChanged(oldVal, newVal) {
    if (newVal) {
      this.$subtitle().textContent = newVal
    } else {
      this.$subtitle().textContent = ''
    }
  }
}

if (window.customElements) {
  customElements.define(TalisTopicPreview.is, TalisTopicPreview);
} else {
  window.addEventListener('WebComponentsReady', () => customElements.define(TalisTopicPreview.is, TalisTopicPreview));
}
