import { html, css, CSSResult, SkhemataBase, property } from '@skhemata/skhemata-base';
import { SkhemataMenuLink } from './SkhemataMenuLink';
import { SkhemataSubMenuStyles } from '../style/SkhemataSubMenyStyle';
export class SkhemataSubMenu extends SkhemataBase {
  @property({ type: String })
  title = '';

  @property({ type: Boolean })
  hideMenu = true;

  @property({ type: String, attribute: 'active-route' })
  activeRoute = '';

  @property({ type: Array, attribute: 'routes' })
  routes = [];

  @property({ type: Object })
  routeObj = {};

  static get scopedElements() {
    return {
      'skhemata-menu-link': SkhemataMenuLink
    };
  }

  attributeChangedCallback(name: any, oldVal: any, newVal: any) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if(name === 'active-route'){
      this.requestUpdate();
    }

    if(name === 'routes') {
      this.routeObj = this.routes?.reduce((ac,a) => ({...ac,[a['href']]:''}),{});
    }
  }

  openMenu() {
    if(window.innerWidth >= 1215) { 
      this.hideMenu = false;
      this.requestUpdate();
    }
  }

  closeMenu() {
    if(window.innerWidth >= 1215) { 
      this.hideMenu = true;
      this.requestUpdate();
    }
  }

  static get styles(): CSSResult[] {
    return <CSSResult[]>[
      ...super.styles,
      SkhemataSubMenuStyles
    ];
  }

  
  constructor() {
    super();
    if(window.innerWidth <= 1215) { 
      this.hideMenu = false;
    }
    window.addEventListener('resize', ()=>{
      if(window.innerWidth <= 1215) { 
        this.hideMenu = false;
      } else {
        this.hideMenu = true;
      }
    })
  }
  render() {
    return html`
      <div
        class="dropdown-title pointerCursor ${this.activeRoute in this.routeObj
          ? 'is-active'
          : ''}"
        @mouseenter=${() => {
          this.openMenu();
        }}
        @mouseleave=${() => {
          this.closeMenu();
        }}
      >
        ${this.title}
      </div>
      <div class="dropdown">
        <div
          class="menu-container pointerCursor ${this.hideMenu ? 'hidden' : ''}"
          @mouseenter=${() => {
            this.openMenu();
          }}
          @mouseleave=${() => {
            this.closeMenu();
          }}
        >
          ${this.routes?.map((route: any) => 
            html`<skhemata-menu-link href=${route.href}>${route.text}</skhemata-menu-link>`
          )}
        </div>
      </div>
    `;
  }
}
