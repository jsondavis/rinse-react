const path = require('path');
const pkg = require('./package.json');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
	resolve: {
		extensions: [
			'.scss',
			'.js',
			'.jsx',
			'.json',
			'.png',
			'.gif',
			'.jpg',
			'.svg',
		],
		alias: {
			// allow the pkg name to be used in the pkg itself?
			[pkg.name]: path.resolve('./src'),
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: `${pkg.name}.js`,
		libraryTarget: 'umd',
	},
};
