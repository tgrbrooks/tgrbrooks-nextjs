import Button from 'react-bootstrap/Button'
import styles from '../../styles/layout.module.scss'

const DarkButton = ({ name, link }) => {
  return (
    <Button className={`mt-auto ${styles.darkButton}`} href={link}>{name}</Button>
  )
}

export default DarkButton
