/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.jpg' {
  const url: string

  export default url
  export const blurhash: string
}
