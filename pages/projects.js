import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'

export default function Projects () {
  return (
    <PageLayout title="Projects" type={3}>
      <Head>
        <title>Projects | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Words about projects I work on!</p>
        <p>
          Even more words.
        </p>
      </section>
    </PageLayout>
  )
}