import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard = ({ children, title, image, repo, status }) => {
  return (
    <Card className="mb-3" style={{ minWidth: '20rem' }}>
      <Card.Img variant="top" src={'/images/projects/' + image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-muted">{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <Button className="mt-auto" href={'https://github.com/tgrbrooks/' + repo}>GitHub</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{status}</Card.Footer>
    </Card>
  )
}

export default ProjectCard
