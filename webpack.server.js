const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
	target: 'node',
	entry: './server.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules',
			},
			{
		    	test: /\.(css|scss)$/,
		        use: [
		          "style-loader",
		          "css-loader",
		        ]
		    },
		    {
		        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
		        loaders: ["file-loader"]
		    }
		]
	},
	externals: [webpackNodeExternals()]
}