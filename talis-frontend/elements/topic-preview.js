const template = document.createElement('template');
template.innerHTML = `
  <link href="shared.css" rel="stylesheet">
  <style>
    :host {
      background-color: var(--secondary-color);
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