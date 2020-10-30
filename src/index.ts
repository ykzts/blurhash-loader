import { encode } from 'blurhash'
import { getOptions } from 'loader-utils'
import sharp from 'sharp'
import { loader } from 'webpack'

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

  sharp(this.resourcePath)
    .raw()
    .ensureAlpha()
    .toBuffer({
      resolveWithObject: true
    })
    .then(({ data, info }) => {
      const pixels = new Uint8ClampedArray(data)
      const blurhash = encode(
        pixels,
        info.width,
        info.height,
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

      callback?.(null, result)
    })
    .catch((error) => {
      callback?.(error, undefined)
    })
}

export default loader

export const raw = true
