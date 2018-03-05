const paths = {
	scripts: {
		src: 'index.js',
		dest: {
			path: '../talis-ui/src/main/content/jcr_root/etc/designs/talis/js',
			fileName: 'build.js',
		}
	}
};

const webpackConfig = {
  entry: `./${paths.scripts.src}`,
	output: {
		path: '/Users/35267/src/icfolson/aem-web-components/talis/talis-ui/src/main/content/jcr_root/etc/designs/talis/js',
		filename: "build.js"
	},
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: { presets: ['babel-preset-env'].map(require.resolve) }
      }]
    }]
  },
  resolve: {
    modules: ['./node_modules/']
  },
	mode: 'production',
  devtool: 'source-map'
};

module.exports = { paths: paths, webpack: webpackConfig };
