const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      background-color: #fff;
      margin-bottom: 1rem;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }
    #container {
      padding: var(--standard-padding);
    }
    #header {
      width: 50%;
      float: left;
    }
    #content {
      width: 50%;
      float: right;
    }
    #clear {
      clear: both;
    }
    h3 {
      border-bottom: 1px solid black;
    }
    h6 {
      color: var(--gray);
    }
    p {
      padding: 1rem;
    }
    button {
      background-color: var(--primary-color);
      padding: 0.5rem;
    }
  </style>
  <div id="container">
    <div id="header">
      <h3>Title</h3>
      <h6>Sub Title</h6>
    </div>
    <div id="content">
      <p>Lorem ipsum description.</p>
      <button>Take Action</button>
    </div>
    <div id="clear"></div>
  </div>
`;

export default class TalisTopicPreview extends HTMLElement {
  static get is() {
    return 'talis-topic-preview';
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define(TalisTopicPreview.is, TalisTopicPreview);
