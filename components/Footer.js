import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={[styles.siteFooter, "h-card"].join(' ')}>

      <div className={styles.wrapper}>

        <div className={styles.footerColWrapper}>
          <div className={[styles.footerCol, styles.footerCol1].join(' ')}>
            <ul className={styles.contactList}>
              <img className={styles.socialIcon} src="/images/icon-gmail.svg" />
              <a className={styles.footerLink} href="mailto:tom.g.r.brooks@gmail.com">tom.g.r.brooks@gmail.com</a>
            </ul>
          </div>

          <div className={[styles.footerCol, styles.footerCol2].join(' ')}>
            <ul className={styles.contactList}>
              <img className={styles.socialIcon} src="/images/icon-github.svg" />
              <a className={styles.footerLink} href="https://github.com/tgrbrooks">tgrbrooks</a>
            </ul>
          </div>

          <div className={[styles.footerCol, styles.footerCol3].join(' ')}>
            <ul className={styles.contactList}>
              <img className={styles.socialIcon} src="/images/icon-linkedin.svg" />
              <a className={styles.footerLink} href="https://www.linkedin.com/in/tgrbrooks/">tgrbrooks</a>
            </ul>
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
