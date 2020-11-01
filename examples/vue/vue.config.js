module.exports = {
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images')

    imagesRule.uses.clear()
    imagesRule.use('blurhash-loader').loader('blurhash-loader').options({
      componentX: 4,
      componentY: 3
    })
  }
}
