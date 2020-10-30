# blurhash-loader

A blurhash loader module for webpack.

[Demo](https://blurhash-loader-example.vercel.app/) ([source](example/))

## Install

```console
$ npm install -D blurhash-loader blurhash
```

or

```console
$ yarn add -D blurhash-loader blurhash
```

## Usage

### webpack.config.js

```javascript
module.exports = {
  module: {
    rules: [
      test: /\.(?:gif|jpe?g|png|webp)$/i,
      use: [
        {
          loader: 'blurhash-loader',
          options: {
            componentX: 4,
            componentY: 3
          }
        }
      ]
    ]
  }
}
```

### index.tsx

```typescript
import { Blurhash } from 'react-blurhash'
import photo, { blurhash } from './photo.jpg'

export default function Home() {
  return (
    <div>
      <Blurhash hash={blurhash} height={600} width={800} />
    </div>
  )
}
```

## License

[MIT](LICENSE)
