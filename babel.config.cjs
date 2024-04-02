module.exports = {
	plugins: [
		'@babel/plugin-syntax-jsx',
		'@babel/plugin-transform-modules-commonjs',
	],
	presets: [
		[
			'@babel/preset-react',
			// '@babel/preset-env',

			{
				targets: {
					node: 'current',
				},
			},
		],
	],
};
