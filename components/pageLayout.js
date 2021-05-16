import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import AnimatedTitle from './pageTitle.js'
import Layout from './layout.js'

const PageLayout = ({ children, home, title, type }) => {
  return (
    <Layout home>
      <AnimatedTitle title={title} type={type} ncols={50} nrows={15} width={0.6} minWidth={600}></AnimatedTitle>
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

export default PageLayout
