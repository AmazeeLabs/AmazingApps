const path = require('path');

module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.(ts|js)$/,
		loader: 'babel-loader',
		options: {
			presets: [
				["@babel/env", {
          targets: {chrome: '63'},
				}],
				["@babel/typescript"]
			],
			plugins: [
				["@babel/plugin-proposal-decorators", { legacy: true }],
			]
		}
	});

	config.module.rules.push({
		test: /\.(jpe?g|svg|png)$/,
		loader: "file-loader",
	});

	config.module.rules.push(      {
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
	},);

	config.module.rules.push({
		test: /\.css$/,
    use: [
			'postcss-loader',
    ]
	});

	config.resolve.extensions.push('.ts');
	return config;
};
