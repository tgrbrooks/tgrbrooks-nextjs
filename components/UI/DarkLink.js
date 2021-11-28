import Link from 'next/link'
import styles from '../../styles/layout.module.scss'

const DarkLink = ({ name, link }) => {
  return (
    <Link href={link}><a className={styles.link}>{name}</a></Link>
  )
}

export default DarkLink
