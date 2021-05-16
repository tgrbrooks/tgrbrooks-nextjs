import Head from 'next/head'
import PostLayout from '../components/postLayout'
import utilStyles from '../styles/utils.module.scss'
import CoverLetter from '../components/coverLetter'
import Alert from 'react-bootstrap/Alert'

export default function CV() {
  return (
    <PostLayout>
      <Head>
        <title>Cover Letter | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingXl}>
        DeepCover
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          Bored of writing endless cover letters?
        </p>
        <p>
          Wish you could have a not particularly competant personal assistant do it for you?
        </p>
        <p>
          Me too! So I attempted to use some natural language processing methods to do it for me and this is the result.
        </p>
        <p>
          If you’re interested, you can read more about why it’s so hilariously bad here.
        </p>
        <Alert key={1} variant="warning">Warning: Runs MUCH faster in chrome and edge (because they allow you to use canvas drawing inside web workers which also allows tensorflow to use the WebGL backend rather than the CPU).</Alert>
        <CoverLetter />
      </section>
    </PostLayout>
  )
}