import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Header from './Header.js'
import Footer from './Footer.js'

export const siteTitle = 'Tom Brooks | Personal Website'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <style jsx global>{`
      html {
        background-color: #1F2933;
      }
      `}</style>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Tom Brooks | Personal Website"
        />
        <meta
          property="og:image"
          content="/images/favicon.ico"
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

export default Layout
