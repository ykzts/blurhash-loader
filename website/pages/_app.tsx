import type { AppProps } from 'next/app'
import type { FC } from 'react'

import 'nextra-theme-docs/style.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
