module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: '/'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
          compact: true
        }
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.net', 'json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};
