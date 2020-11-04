import { BlurhashCanvas } from 'react-blurhash'
import photo, { blurhash } from '../photos/ramen.jpg'
import styles from './App.module.css'

/**
 * @return {JSX.Element}
 */
export default function App() {
  return (
    <div>
      <main className={styles.container}>
        <h1 className={styles.title}>blurhash-loader demo</h1>

        <div className={styles.photo}>
          <div className={styles.imageWrapper}>
            <img
              alt=""
              className={styles.image}
              height={600}
              src={photo}
              width={800}
            />
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
