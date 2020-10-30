const withTM = require('next-transpile-modules')(['react-blurhash'])

module.exports = withTM({
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.jpg/g,
      use: [
        defaultLoaders.babel,
        {
          loader: 'blurhash-loader',
          options: {
            componentX: 4,
            componentY: 3
          }
        },
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    return config
  }
})
