import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'

export const name = "I'm Tom Brooks"
export const siteTitle = 'Tom Brooks | Personal Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Tom Brooks | Personal Website"
        />
        <meta
          property="og:image"
          content="/favicon.ico"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}
