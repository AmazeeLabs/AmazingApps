// Globally add web components polyfills.
import '@babel/polyfill';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

// @ts-ignore
const components = require.context('./twig', true, /\/index\.(ts|js)$/);

// @ts-ignore
components.keys().forEach(filename => components(filename));
