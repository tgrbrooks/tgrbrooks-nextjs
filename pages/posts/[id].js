import { useEffect } from 'react'
import PostLayout from '../../components/PostLayout.js'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../utils/posts.js'
import Date from '../../components/Date.js'
import DarkLink from '../../components/UI/DarkLink.js'
import utilStyles from '../../styles/utils.module.scss'
import Prism from 'prismjs'
import "prismjs/components/prism-bash"
import "prismjs/components/prism-latex"

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);
  return (
    <PostLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <br/>
          <DarkLink link={`/posts/tags/${postData.tag}`} name={"Tag: "+postData.tag} />
        </div>
        <br/>
        <div className={utilStyles.text} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </PostLayout>
  )
}  
