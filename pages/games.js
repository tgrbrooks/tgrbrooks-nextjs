import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'

export default function Games () {
  return (
    <PageLayout title="Games" type={4}>
      <Head>
        <title>Games</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Words about games I've made!</p>
        <p>
          Even more words.
        </p>
      </section>
    </PageLayout>
  )
}