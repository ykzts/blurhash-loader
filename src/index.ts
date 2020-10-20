import { encode } from 'blurhash'
import { getOptions } from 'loader-utils'
import { loader } from 'webpack'
import Jimp from './jimp'

const EXPORT_RE = /(?:export\s+default|module.exports\s+=)(?:\s|$)|/

type LoaderOptions = {
  componentX?: number
  componentY?: number
  esModule?: boolean
}

function loader(this: loader.LoaderContext, rawContent: Buffer | string): void {
  if (this.cacheable) this.cacheable()

  const callback = this.async()
  const options = getOptions(this) as Readonly<LoaderOptions>
  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true

  const content = Buffer.isBuffer(rawContent)
    ? rawContent.toString('utf8')
    : rawContent

  Jimp.read(this.resourcePath)
    .then(({ bitmap }) => {
      const pixels = new Uint8ClampedArray(bitmap.data)
      const blurhash = encode(
        pixels,
        bitmap.width,
        bitmap.height,
        options.componentX || 4,
        options.componentY || 3
      )

      let result = ''

      if (EXPORT_RE.test(content)) {
        result += `${content}\n\n`
      }

      result += `${
        esModule ? 'export const ' : 'exports.'
      }blurhash = ${JSON.stringify(blurhash)}\n`

      callback(null, result)
    })
    .catch((error) => {
      callback(error, null)
    })
}

export default loader

export const raw = true
