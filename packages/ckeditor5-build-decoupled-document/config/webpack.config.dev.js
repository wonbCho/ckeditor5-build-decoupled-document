
/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 4002,
		hot: true,
		historyApiFallback: {
			disableDotRule: true
		},
		open: true,
		// disableHostCheck: true,
		proxy: {
			'/api/': {
				target: 'https://jsonplaceholder.typicode.com/',
				changeOrigin: true,
			},
		}
	},
	output: {
		// The name under which the editor will be exported.
		library: 'DecoupledEditor',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
