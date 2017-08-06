module.exports = {
	entry: './scripts/vcpod.tsx',
	output: {
		path: `${__dirname}/public_html`,
		filename: 'vcpod.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'source-map-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					{loader: 'style-loader', options: {sourceMap: true}},
					{loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},
					{loader: 'postcss-loader', options: {plugins: (loader) => [
						require('autoprefixer')(),
					], sourceMap: true}},
					{loader: 'sass-loader', options: {sourceMap: true}},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json', '.sass', '.css']
	},
	devtool: 'source-map'
};
