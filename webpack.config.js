module.exports = {
  mode: 'development', // or production
  devServer: {
    contentBase: './dist',
    open: true
  },
  entry: './src/assets/js/main.js', // main js file
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
};