import Head from 'next/head'
import Image from 'next/image'
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
            href="https://github.com/ykzts/blurhash-loader"
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
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <Image
                alt=""
                height={600}
                sizes="(max-width: 360px) 100vw, 800px"
                src={photo}
                width={800}
              />
            </div>
            <BlurhashCanvas
              className={styles.blurhash}
              hash={blurhash}
              height={600}
              width={800}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
