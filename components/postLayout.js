import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import AnimatedTitle from './pageTitle.js'
import Layout from './layout.js'

export default function PostLayout({ children, home }) {
  return (
    <Layout home>
      <div className={styles.innerContainer}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      </div>
    </Layout>
  )
}
