const path = require('path')

const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$/i,
        use: [
          {
            loader: 'blurhash-loader',
            options: {
              componentX: 4,
              componentY: 3
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src', 'assets', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
