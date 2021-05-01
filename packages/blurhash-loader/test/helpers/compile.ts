import path from 'path'

import webpack from 'webpack'
import type { Configuration, Stats } from 'webpack'
import { merge } from 'webpack-merge'

const fixturesDir = path.resolve(__dirname, '..', 'fixtures')

export default function compile(
  fixture: string,
  loaderOptions = {},
  config: Configuration = {}
): Promise<Stats> {
  return new Promise((resolve, reject) => {
    const webpackConfig = merge(
      {
        entry: path.resolve(fixturesDir, fixture),
        module: {
          rules: [
            {
              test: /\.(?:gif|jpe?g|png)$/i,
              use: [
                {
                  loader: path.resolve(
                    __dirname,
                    '..',
                    '..',
                    'src',
                    'index.ts'
                  ),
                  options: loaderOptions
                }
              ]
            }
          ]
        },
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, '..', 'output')
        }
      },
      config
    )
    const compiler = webpack(webpackConfig)

    compiler.run((err, stats) => {
      if (err) {
        reject(err)
      } else if (stats.hasErrors()) {
        const { errors } = stats.toJson()

        reject(new Error(errors.join(', ')))
      } else {
        resolve(stats)
      }
    })
  })
}
