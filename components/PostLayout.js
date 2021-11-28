import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import Layout from './Layout.js'

const PostLayout = ({ children, home }) => {
  return (
    <Layout home>
      <div className={styles.innerContainer}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/blog">
              <a className={styles.link}>← Back to blog</a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default PostLayout
