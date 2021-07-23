import { css } from '@skhemata/skhemata-base';

export const SkhemataSubMenuStyles = css`
:host {
  position: relative;
  padding: 0 0.75rem;
}

.hidden {
  transform: translate(0, 10px);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out !important;
}

.dropdown {
  position: absolute;
  left: -13%;
}

.dropdown-title {
  color: inherit;

  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  transition:0.6s;
  margin-bottom: 0;
}

.dropdown-title:hover {
  color: var(--skhemata-link-hover-color);
}

.menu-container {
  position: relative;
  background: #f5f5f5;
  border-radius: 6px;
  max-height: 20em;
  width:100%;
  -webkit-box-shadow: 3px 7px 18px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 3px 7px 18px 5px rgba(0, 0, 0, 0.11);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  height: auto;
}

.pointerCursor:hover {
  cursor: pointer;
}

.is-active {
  font-weight: bold;
}

@media screen and (max-width: 1215px) {

  .is-transparent .custom-nav .navbar-burger {
    color: var(--skhemata-menu-transparent-text-color, #515151);
  }
  skhemata-menu-link {
    padding: 0.5rem 2rem;
  }
  .dropdown {
    position: relative;
    left: initial;
  }
  .menu-container {
    background-color: var(--skhemata-menu-background-color, #fff);
    -webkit-box-shadow: none;
    box-shadow: none;
    display: block;
  }
  .dropdown-title{
    justify-content: flex-start;
    padding-left: 0.75rem;
  }
}
`;
