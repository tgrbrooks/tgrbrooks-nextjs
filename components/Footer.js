import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={[styles.siteFooter, "h-card"].join(' ')}>

      <div className={styles.wrapper}>

        <div className={styles.footerColWrapper}>
          <div className={[styles.footerCol, styles.footerCol1].join(' ')}>
            <ul className={styles.contactList}>
              <img
                src="/images/profile.jpg"
                className={`${styles.profileIcon} ${utilStyles.borderCircle}`}
              />
              <a>  Tom Brooks</a>
              <br />
              <a className={styles.footerLink} href="mailto:tom.g.r.brooks@gmail.com">tom.g.r.brooks@gmail.com</a>
            </ul>
          </div>

          <div className={[styles.footerCol, styles.footerCol2].join(' ')}>
            <ul className={styles.contactList}>
              <img className={styles.socialIcon} src="/images/icon-github.svg" />
              <a className={styles.footerLink} href="https://github.com/tgrbrooks">  tgrbrooks</a>
              <br className={styles.footerBr} />
              <img className={styles.socialIcon} src="/images/icon-linkedin.svg" />
              <a className={styles.footerLink} href="https://www.linkedin.com/in/tom-brooks-a940a9a7/">  tom-brooks-a940a9a7</a>
            </ul>
          </div>

          <div className={[styles.footerCol, styles.footerCol3].join(' ')}>
            <p>A place for storing projects, wiki's, ideas and other not so useful things.</p>
          </div>
        </div>

      </div>

      <h2 className={[styles.footerEnding, "text-white"].join(' ')}>
        Built with Next.js, React-Bootstrap and anime.js, hosted on GitHub
      </h2>

    </footer>
  )
}

export default Footer
