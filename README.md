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

## Options

| Name         | Type                 | Default                     | Description                                              |
| ------------ | -------------------- | --------------------------- | -------------------------------------------------------- |
| `componentX` | `{Number}`           | `4`                         | A `componentX` is the value passed directly to blurhash. |
| `componentY` | `{Number}`           | `3`                         | A `componentY` is the value passed directly to blurhash. |
| `context`    | `{String}`           | `loaderContext.rootContext` | A custom file context.                                   |
| `emitFile`   | `{Boolean}`          | `true`                      | Don't emit the file if `false` is specified.             |
| `esModule`   | `{Boolean}`          | `true`                      | If enabled, use the ES modules syntax.                   |
| `name`       | `{String\|Function}` | `'[contenthash].[ext]'`     | The filename template for the target file.               |
| `outputPath` | `{String\|Function}` | `undefined`                 | A custom output path for the target file.                |
| `publicPath` | `{String\|Function}` | `undefined`                 | A custom public path for the target file.                |

## License

[MIT](LICENSE)
