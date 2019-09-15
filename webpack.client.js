const path = require('path');
module.exports = {
	target: 'node',
	entry: ['./src/index.js', './src/assets/style.css'],
	output: {
		filename: 'client.bundle.js',
		path: path.resolve(__dirname, 'build/public'),
		publicPath: '/build/public'
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
	}
}