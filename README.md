# \<skhemata-menu>

Skhemata Site Menu Web Component. This web component provides website header menu functionality.

## Installation
```bash
npm i @skhemata/skhemata-menu
```

## Usage
```html
<script type="module">
  import '@skhemata/skhemata-menu/skhemata-menu.js';
</script>

<skhemata-menu></skhemata-menu>
```

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
npm run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## License
Skhemata Menu is distributed under [Commercial Skhemata Licence Agreement v1](https://www.skhemata.com/license/csla-1.0) (CSLA-1.0). For license terms, see LICENSE file
