// File: pages/index.js
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home({ defaultUrl }) {
  const router = useRouter()
  const { url } = router.query
  const iframeUrl = url || defaultUrl

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Static Iframe App</title>
        <meta name="description" content="A NextJS app with a dynamic iframe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" width={200} height={50} />
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            src={iframeUrl}
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Default URL if none is provided
  const defaultUrl = "https://google.com"
  
  return {
    props: { defaultUrl },
  }
}