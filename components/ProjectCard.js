import Card from 'react-bootstrap/Card'
import DarkButton from './UI/DarkButton'
import styles from '../styles/layout.module.scss'

const ProjectCard = ({ children, title, image, repo, status }) => {
  return (
    <Card className={`mb-3 ${styles.projectCard}`}>
      <Card.Img variant="top" src={'/images/projects/' + image} />
      <Card.Body className={`d-flex flex-column ${styles.cardBody}`}>
        <Card.Title className={styles.cardHeader}>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <DarkButton link={'https://github.com/tgrbrooks/' + repo} name="GitHub" />
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>{status}</Card.Footer>
    </Card>
  )
}

export default ProjectCard
