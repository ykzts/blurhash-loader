const withTM = require('next-transpile-modules')(['react-blurhash'])

module.exports = withTM({
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.jpg/g,
      use: [
        defaultLoaders.babel,
        {
          loader: 'blurhash-loader',
          options: {
            componentX: 4,
            componentY: 3,
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    return config
  }
})
