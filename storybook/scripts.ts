const components = require.context('./twig', true, /\/index\.(ts|js)$/);
components.keys().forEach(filename => components(filename));
