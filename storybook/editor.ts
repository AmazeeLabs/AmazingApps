const components = require.context('./editor', true, /\/index\.(ts|js)$/);
components.keys().forEach(filename => components(filename));

