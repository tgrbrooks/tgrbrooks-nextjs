import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/layout.module.scss'
import PageLayout from '../components/PageLayout.js'
import Date from '../components/Date.js'
import { getSortedPostsData } from '../utils/posts.js'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <PageLayout home title="Blog" type={1}>
      <Head>
        <title>Blog | Tom Brooks</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={styles.link}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  )
}