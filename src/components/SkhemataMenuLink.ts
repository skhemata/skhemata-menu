import { html, css, CSSResult, SkhemataBase, property } from '@skhemata/skhemata-base';


export class SkhemataMenuLink extends SkhemataBase {
  @property({ type: String })
  href = '';

  @property({ type: String })
  linkClasses = '';

  static get styles() {
    return <CSSResult[]>[
      ...super.styles,
      css`
        :host {
          display:flex;
          padding:1rem;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }

        a:hover {
          opacity: 0.6;
          color: var(--skhemata-menu-text-color, #515151);

        } 
      `,
    ];
  }

  constructor() {
    super();
    this.href = '';
  }

  render() {
    return html`
      <a
        href="${this.href}"
        @click="${this.linkClick}"
        class="nav-link ${this.linkClasses}"
      >
        <slot></slot>
      </a>
    `;
  }

  // attributeChangedCallback(name, oldVal, newVal) {
  //   super.attributeChangedCallback(name, oldVal, newVal);
  //   if (name === 'active') {
  //     this.requestUpdate();
  //   }
  // }

  linkClick(event: any) {
    event.preventDefault();
    if (this.isUrl(this.href)) {
      window.open(this.href, '_blank');
    } else {
      window.history.pushState({}, '', this.href);
      window.dispatchEvent(new CustomEvent('route'));
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0 });
    }
  }

  isUrl = (string: string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  };
}
