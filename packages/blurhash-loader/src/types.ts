export type CreatePath = (
  url: string,
  resourcePath: string,
  context: string
) => string

export type LoaderOptions = {
  componentX?: number
  componentY?: number
  context?: string
  emitFile?: boolean
  esModule?: boolean
  name?: string
  outputPath?: string | CreatePath
  publicPath?: string | CreatePath
}
