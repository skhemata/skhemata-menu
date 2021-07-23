import { html, css, CSSResult, SkhemataBase, property } from '@skhemata/skhemata-base';
import { SkhemataSubMenu } from './components/SkhemataSubMenu';
import { SkhemataMenuLink } from './components/SkhemataMenuLink';
import { SkhemataMenuStyles } from './style/SkhemataMenuStyle';
export class SkhemataMenu extends SkhemataBase {

  @property({ type: String, attribute: 'active-route' })
  activeRoute = '';

  @property({ type : Boolean })
  fade = false;

  static get styles(): CSSResult[] {
    return <CSSResult[]>[
      ...super.styles,
      SkhemataMenuStyles,
      css`
      `,
    ];
  }

  static get scopedElements() {
    return {
      'skhemata-sub-menu': SkhemataSubMenu,
      'skhemata-menu-link': SkhemataMenuLink
    };
  }

  /**
   * 
   * @param event 
   * 
   * function for toggling mobile nav menu hamburger
   */
  toggleMobileMenu = (event: any) => {
    if (this.shadowRoot) {
      const navMenu = this.shadowRoot.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.toggle('is-active');
      }
    }

    event.currentTarget.classList.toggle('is-active');
  };

  private onScroll = () => {
    this.fade = (window.scrollY > 100) ? false : true;
  }

  /**
   * 
   * @param name 
   * @param _old 
   * @param value
   * 
   * Checks if config-data exists and if 'dynamic' key exists 
   */
  attributeChangedCallback(name: any, _old: any, value: any) {
    super.attributeChangedCallback(name, _old, value);
    if(name == 'config-data') {
      if(this.configData?.dynamic) {
        if(window.scrollY == 0) {
          this.fade = true;
        }
        window.addEventListener('scroll', this.onScroll);
      }
    }
  }

  render() {
    return html`
    <nav
      class="navbar ${this.fade ? 'is-transparent': ''}"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container custom-nav">
        <div class="navbar-brand">
          <skhemata-menu-link
            class="navbar-item navbar-logo"
            href="/"
          >
            <img
              class="logo"
              src="${this.configData?.logoImg?.src ? this.configData.logoImg.src :'/src/images/placeholder_logo.png'}"
              alt="${this.configData?.logoImg?.altText ?  this.configData.logoImg.altText: ''}"
            />
          </skhemata-menu-link>
    
          <button
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="nav-menu"
            @click=${this.toggleMobileMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
  
        <div class="navbar-menu" id="nav-menu">
          <div class="navbar-end">
            ${this.configData.routes?.map( (link: any) =>
              link.subRoutes ?
              html`
                <skhemata-sub-menu
                  title="${link.text}"
                  routes=${JSON.stringify(link.subRoutes)}
                  active-route="${this.activeRoute}"
                >
                </skhemata-sub-menu>` :  
              html`
                <skhemata-menu-link
                  class="navbar-item ${this.activeRoute == link.href ? 'is-active' : ''} ${link?.type == "button" ? "nav-button is-outlined": ''}"
                  href="${link.href}"
                >
                  ${link.text}
                </skhemata-menu-link>`
            )}
          </div>
        </div>  
      </div>
    </nav>`;
  }
}
