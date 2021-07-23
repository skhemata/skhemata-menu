import { html, TemplateResult } from '@skhemata/skhemata-base';
import {} from '@storybook/addon-controls';
import '../skhemata-menu.js';

const configData = {
  logoImg: {
    src: "https://cdn.skhemata.com/skhemata/src/assets/images/skhemata_logo.svg",
    altText: "skhemata"
  },
  routes: [
    {
      href: '',
      text: 'Products',
      subRoutes: [
        {
          href: 'product1',
          text: 'product2',
        },
        {
          href: 'about',
          text: 'About',
        },
      ]
    },
    {
      href: 'pricing',
      text: 'Pricing',
    },
    {
      href: 'about',
      text: 'About',
    },
    {
      href: 'live-chat',
      text: 'Live Chat',
    },
    {
      href: 'contact',
      text: 'Contact',
      type: 'button'
    }
  ],
};

export default {
  title: 'General/SkhemataMenu',
  component: 'skhemata-menu',
  argTypes: {
    configData: {
      name: 'config-data',
      data: { type: 'object' },
      control: { type: 'object' },
      description:
        'Configurable data object. Contains the routes and settings needed to build the menu. "dynamic=true" key will change nav behaviour to be transparent from top position of the page.',
      table: {
        category: 'HTML Attributes',
        type: { 
          summary: 'object',
          detail: JSON.stringify(
            {
              logoImg: {
                src: 'string',
                altText: 'string'
              },
              dynamic: 'boolean',
              routes: [
                {
                  href: 'string',
                  text: 'string',
                  subRoutes: [
                    {
                      href: 'string',
                      text: 'string'
                    }
                  ],
                  type: 'string'
                }
              ]
            },
            null,
            2
          ),
        },
      },
    },
    activeRoute: {
      name: 'active-route',
      control: 'text',
      description: 'attribute that determines what menu item is highlighted.  string must match an href in one of the routes.',
      table: {
        category: 'HTML Attributes',
      },
    },
    backgroundColor: {
      name: '--skhemata-menu-background-color',
      control: 'color',
      description: 'CSS property variable for menu background color',
      table: {
        category: 'CSS Properties',
      },
    },
    textColor: {
      name: '--skhemata-menu-text-color',
      control: 'color',
      description: 'CSS property variable for menu text color',
      table: {
        category: 'CSS Properties',
      },
    },
    fonts: {
      name: '--skhemata-menu-fonts',
      control: 'text',
      description: 'CSS property variable for menu fonts',
      table: {
        category: 'CSS Properties',
      },
    },
    buttonColor: {
      name: '--skhemata-menu-button-color',
      control: 'color',
      description: 'CSS property variable for menu button color',
      table: {
        category: 'CSS Properties',
      },
    },
    buttonTextColor: {
      name: '--skhemata-menu-button-text-color',
      control: 'color',
      description: 'CSS property variable for menu button text color',
      table: {
        category: 'CSS Properties',
      },
    },
    transparentTextColor: {
      name: '--skhemata-menu-transparent-text-color',
      control: 'color',
      description: 'CSS property variable for menu text color during transparency',
      table: {
        category: 'CSS Properties',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        // eslint-disable-next-line no-template-curly-in-string
        code: `<skhemata-menu config-data="${JSON.stringify(
          configData,
          null,
          2
        )}"></skhemata-menu>`,
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  configData?: object;
  activeRoute?: string;
  menuBackgroundColor?: string;
  menuButtonColor?: string;
  menuButtonTextColor?: string;
  menuTextColor?: string;
  menuFonts?: string;
  menuTransparentTextColor?: string;
}

const Template: Story<ArgTypes> = ({
  menuBackgroundColor,
  menuButtonColor,
  menuButtonTextColor,
  menuTextColor,
  menuFonts,
  menuTransparentTextColor,
  activeRoute
}: ArgTypes) => html`
  <skhemata-menu
    style="
    --skhemata-menu-background-color: ${menuBackgroundColor || '#fff'};
    --skhemata-menu-text-color: ${menuTextColor || '#515151'};
    --skhemata-menu-fonts: ${menuFonts || 'sans-serif'};
    --skhemata-menu-transparent-text-color: ${menuTransparentTextColor || '#515151'};
    --skhemata-menu-button-color: ${menuButtonColor};
    --skhemata-menu-button-text-color: ${menuButtonTextColor};
    "
    .configData=${configData}
    active-route="${activeRoute}"
  >
  </skhemata-menu>
`;

export const Regular = Template.bind({});
Regular.args = {
  configData: configData,
  activeRoute: 'pricing',
  menuBackgroundColor: '#fff',
  menuButtonColor: 'rgb(0, 179, 167)',
  menuButtonTextColor: '#515151',
  menuFonts: 'sans-serif',
  menuTextColor: '#515151',
  menuTransparentTextColor: '#515151'
};
