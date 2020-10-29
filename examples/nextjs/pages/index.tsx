import Head from 'next/head'
import { BlurhashCanvas } from 'react-blurhash'
import photo, { blurhash } from '../photos/ramen.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blurhash-loader with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a
            href="https://github.com/inabagumi/blurhash-loader"
            target="_blank"
            rel="noopener noreferrer"
          >
            blurhash-loader
          </a>
        </h1>

        <p className={styles.description}>
          A blurhash loader module for webpack.
        </p>

        <div className={styles.photo}>
          <img alt="" height={600} src={photo} width={800} />
          <BlurhashCanvas hash={blurhash} height={600} width={800} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://haneru.dev/" target="_blank" rel="noopener noreferrer">
          Powered by Haneru Developers
        </a>
      </footer>
    </div>
  )
}
