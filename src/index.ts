import { encode } from 'blurhash'
import { getOptions } from 'loader-utils'
import { loader } from 'webpack'
import Jimp from './jimp'

type LoaderOptions = {
  componentX?: number
  componentY?: number
  esModule?: boolean
}

function loader(this: loader.LoaderContext, content: Buffer): void {
  if (this.cacheable) this.cacheable()

  const callback = this.async()
  const options = getOptions(this) as Readonly<LoaderOptions>
  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true

  Jimp.read(content)
    .then(({ bitmap }) => {
      const pixels = new Uint8ClampedArray(bitmap.data)
      const blurhash = encode(
        pixels,
        bitmap.width,
        bitmap.height,
        options.componentX || 4,
        options.componentY || 3
      )

      callback(
        null,
        `${esModule ? 'export default' : 'module.exports ='} ${JSON.stringify(
          blurhash
        )}`
      )
    })
    .catch((error) => {
      callback(error, null)
    })
}

export default loader

export const raw = true
