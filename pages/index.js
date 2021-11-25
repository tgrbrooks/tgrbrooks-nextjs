import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/layout.module.scss'
import { siteTitle } from '../components/Layout.js'
import PageLayout from '../components/PageLayout.js'

export default function Home() {
  return (
    <PageLayout home title="Hello!" type={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          />
          <h1 className={utilStyles.heading2Xl}>{"Tom Brooks"}</h1>
          <h1 className={utilStyles.headingXl}>{"Software Engineer"}</h1>
          <h1 className={utilStyles.headingLg}>{"Physics | Machine Learning | Cryptography"}</h1>
        </>
      </header>
      <section className={`${utilStyles.headingMd} ${styles.header} ${utilStyles.padding2rem}`}>
        <p>
        Software engineer working on cutting edge confidential computing and blockchain applications.
        </p>
        <p>
        PhD in high energy physics writing software and designing algorithms for reconstructing particle interactions in giant detectors.
        </p>
        <p>
        A keen interest in machine learning and artificial intelligence, both in the statistical fundamentals and applications to scientific and ethical problems. 
        </p>
      </section>
    </PageLayout>
  )
}