import { css } from '@skhemata/skhemata-base';

export const SkhemataMenuStyles = css`

  :host {
    position: fixed;
    width: 100%;
    z-index: 9999;
    color: var(--skhemata-menu-text-color, #515151);
    font-family: var(--skhemata-menu-fonts, sans-serif);
  }
  nav.navbar {
    margin: 0 auto;
    height: 80px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: 1s all;
    background-color: var(--skhemata-menu-background-color, #fff);

  }

  .navbar > .container {
    min-height: 2.6rem;
  }

  .is-transparent {
    background-color: transparent;
  }

  .navbar-end .navbar-item {
    transition: 0.2s;
  }

  .navbar-item, .submenu {
    color: var(--app-blue-color);
  }

  .submenu {
    padding: 0 0.75rem;
  }

  nav.is-transparent .navbar-item, nav.is-transparent .submenu {
    color: var(--skhemata-menu-transparent-text-color, #515151);
  }

  nav.is-transparent skhemata-sub-menu{
    color: var(--skhemata-menu-transparent-text-color, #515151);
  }

  .navbar-item.is-active, .submenu.is-active {
    font-weight: bold;
  }

  nav .navbar-item.has-dropdown:hover .navbar-link,
  nav .navbar-link:hover,
  nav app-link.navbar-item:hover {
    color: var(--app-blue-color);
  }

  nav .navbar-item.has-dropdown .navbar-link::after {
    border-color: var(--app-default-text-color);
    width: 0.45em;
    height: 0.45em;
    top: 55%;
  }

  nav .navbar-item.has-dropdown:hover .navbar-link::after {
    border-color: var(--app-primary-color);
  }
  
  nav .navbar-logo {
    margin-right: 0;
  }
  nav app-link.navbar-logo:hover {
    opacity: 0.9;
  }

  nav .logo {
    max-height: initial;
    max-width: 200px;
    width: 200px;
  }

  .navbar-brand .navbar-item {
    transiton:0.6s;
    line-height: 0;
  }

  .navbar-link:after {
    margin-top: -9px !important;
  }

  .navbar-dropdown a.navbar-item:hover {
    color: var(--app-primary-color);
  }

  .is-active {
    color: var(--app-primary-color);
  }


  #products {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: -2em;
    color: var(--app-blue-color);
  }

  @media screen and (max-width: 1215px) {
    .submenu {
      display: none;
    }
  }

  @media screen and (min-width: 1216px) {
    .mobile-submenu {
      display: none;
    }
  }
  .mobile-submenu-items {
    padding-left: 2rem;
  }


  /* 
   * Responsive Media Queries
   */
  @media (max-width: 1023px) {
    .navbar {
      height: auto;
    }
    .navbar > .container {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .navbar-burger {
    height: inherit;
    border: none;
    background: transparent;
  }

  .navbar .navbar-burger:hover {
    background-color: transparent;
    color: unset;
  }

  .nav-button {
    cursor: pointer;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 18px;
    border: 1px solid var(--skhemata-menu-button-color);
    background-color: var(--skhemata-menu-button-color);
    margin: 1rem;
    color: var(--skhemata-menu-button-text-color);
  }

  .nav-button.is-outlined {
    background-color: transparent;
  }

  .nav-button.is-active {
    background-color: var(--skhemata-menu-button-color);
    color: white;

  }
  .nav-button:hover {
    color: white;
    background-color: var(--skhemata-menu-button-color);
  }

  @media screen and (max-width: 1215px) {
    .custom-nav .navbar-burger {
      display: block;
      color: var(--skhemata-menu-text-color, #515151);
      cursor: pointer;
      display: block;
      position: relative;
      width: 3.25rem;
      margin-left: auto;
    }

    .is-transparent .custom-nav .navbar-burger {
      color: var(--skhemata-menu-transparent-text-color, #515151);
    }

    .custom-nav.container {
      display: block;
      max-width: unset;
    }
    .custom-nav .navbar-start,
    .custom-nav .navbar-end {
      display: block;
    }
 
    .navbar-menu {
      display: none;
    }
    .navbar-menu.is-active {
      display: block;
      padding-left: 0px;
      padding-right: 0px;
      background: white;
      margin-right: -20px;
      margin-top: -5px;
    }

    .navbar-end {
      justify-content: flex-start;
    }
  }


  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .custom-nav .navbar-menu.is-active {
      margin-left: -20px;
      margin-right: -20px;
    }
  }

  @media screen and (min-width: 1216px) {
    .custom-nav .navbar-burger {
      display: none;
    }
  }

`;
