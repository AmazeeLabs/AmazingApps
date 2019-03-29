const common = require('../common-loaders');
const path = require('path');

module.exports = ({ config, mode }) => {
	// Reuse common webpack configuration.
	config.module.rules.push(common.javascript);
	config.module.rules.push(common.assets);
	config.module.rules.push(common.postcss);

	// Twig webpack is only required within storybook.
	config.module.rules.push({
		test: /\.twig$/,
		use: [
			{
				loader: 'twig-loader',
				options: {
					twigOptions: {
						namespaces: {
							storybook: path.resolve('twig')
						}
					}
				}
			}
		],
	});

	// Support importing typescript files without extension.
	config.resolve.extensions.push('.ts');
	return config;
};
