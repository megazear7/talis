const paths = {
	scripts: {
		src: 'index.js',
		all: './elements/*.js',
		build: '../talis-ui/src/main/content/jcr_root/etc/designs/talis/build.js',
		dest: {
			path: '../talis-ui/src/main/content/jcr_root/etc/designs/talis',
			fileName: 'build.js',
		}
	},
	styles: {
		src: 'main.css',
		all: './*.css',
		build: '../talis-ui/src/main/content/jcr_root/etc/designs/talis/build.css',
		dest: {
			path: '../talis-ui/src/main/content/jcr_root/etc/designs/talis',
			fileName: 'build.css',
		}
	}
};

const webpackConfig = {
  entry: `./${paths.scripts.src}`,
	output: {
		path: `${__dirname}/${paths.scripts.dest.path}`,
		filename: "build.js"
	},
  /*module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: { presets: ['babel-preset-env'].map(require.resolve) }
      }]
    }]
  },*/
  resolve: {
    modules: ['./node_modules/']
  },
	mode: 'development',
  devtool: 'source-map'
};

module.exports = { paths: paths, webpack: webpackConfig };
