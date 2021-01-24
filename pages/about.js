import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'

export default function About () {
  return (
    <PageLayout title="About" type={2}>
      <Head>
        <title>About | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Words about me!</p>
        <p>
          Even more words.
        </p>
      </section>
    </PageLayout>
  )
}