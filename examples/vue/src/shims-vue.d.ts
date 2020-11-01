declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.jpg' {
  const url: string

  export default url
  export const blurhash: string
}

declare module 'vue-blurhash'
