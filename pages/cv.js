import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'

export default function CV () {
  return (
    <PageLayout title="CV" type={3}>
      <Head>
        <title>CV</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My CV!</p>
        <p>
          Even more words.
        </p>
      </section>
    </PageLayout>
  )
}