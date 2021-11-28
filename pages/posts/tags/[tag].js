import PostLayout from '../../../components/PostLayout.js'
import Head from 'next/head'
import { getSortedPostsDataByTag, getAllPostTags } from '../../../utils/posts.js'
import Date from '../../../components/Date.js'
import utilStyles from '../../../styles/utils.module.scss'
import styles from '../../../styles/layout.module.scss'
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsDataByTag(params.tag)
  return {
    props: {
      tag: params.tag,
      allPostsData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostTags()
  return {
    paths,
    fallback: false
  }
}

export default function Tag({ tag, allPostsData }) {
  return (
    <PostLayout>
      <Head>
        <title>{tag}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>{"Tag: "+tag}</h1>
        {(tag === "Project") && <h1 className={utilStyles.headingMd}>Longer posts on subjects related to personal projects.</h1>}
        {(tag === "TIL") && <h1 className={utilStyles.headingMd}>(Today I Learned) Short posts on useful tips, tricks and tidbits picked up during my daily life.</h1>}
        <h1 className={utilStyles.headingXl}>{"Posts"}</h1>
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
    </PostLayout>
  )
}
