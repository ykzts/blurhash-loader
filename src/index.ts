import { encode } from 'blurhash'
import { getOptions, interpolateName } from 'loader-utils'
import path from 'path'
import sharp from 'sharp'
import { loader } from 'webpack'

type CreatePath = (url: string, resourcePath: string, context: string) => string

type LoaderOptions = {
  componentX?: number
  componentY?: number
  context?: string
  emitFile?: boolean
  esModule?: boolean
  name?: string
  outputPath?: string | CreatePath
  publicPath?: string | CreatePath
}

function loader(this: loader.LoaderContext, content: Buffer): void {
  this.cacheable?.()

  const callback = this.async()
  const {
    context = this.rootContext,
    emitFile = true,
    esModule = true,
    name = '[contenthash].[ext]',
    ...options
  } = getOptions(this) as Readonly<LoaderOptions>

  const url = interpolateName(this, name, {
    context,
    content
  })

  let outputPath: string

  if (typeof options.outputPath !== 'undefined') {
    if (typeof options.outputPath === 'function') {
      outputPath = options.outputPath(url, this.resourcePath, context)
    } else {
      outputPath = path.posix.join(options.outputPath, url)
    }
  } else {
    outputPath = url
  }

  let publicPath: string

  if (typeof options.publicPath !== 'undefined') {
    if (typeof options.publicPath === 'function') {
      publicPath = options.publicPath(url, this.resourcePath, context)
    } else {
      const basePath = options.publicPath.endsWith('/')
        ? options.publicPath
        : `${options.publicPath}/`

      publicPath = basePath + url
    }

    publicPath = JSON.stringify(publicPath)
  } else {
    publicPath = `__webpack_public_path__ + ${JSON.stringify(outputPath)}`
  }

  if (emitFile) {
    this.emitFile(outputPath, content, null)
  }

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

      const result = `${
        esModule ? 'export default' : 'module.exports ='
      } ${publicPath}\n${
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
