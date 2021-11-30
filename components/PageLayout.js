import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import AnimatedTitle from './PageTitle.js'
import Layout from './Layout.js'

const PageLayout = ({ children, home, title, type }) => {
  return (
    <Layout home>
      <AnimatedTitle title={title} type={type} ncols={50} nrows={12} width={0.5} minWidth={600}></AnimatedTitle>
      <div className={styles.innerContainer}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className={styles.link}>← Back to home</a>
          </Link>
        </div>
      )}
      </div>
    </Layout>
  )
}

export default PageLayout
