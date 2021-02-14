import Head from 'next/head'
import PostLayout from '../components/postLayout'
import utilStyles from '../styles/utils.module.scss'
import CoverLetter from '../components/coverLetter'

export default function CV() {
  return (
    <PostLayout>
      <Head>
        <title>Cover Letter | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Cover Letter!</p>
        <p>
          Even more words.
        </p>
        <CoverLetter />
      </section>
    </PostLayout>
  )
}