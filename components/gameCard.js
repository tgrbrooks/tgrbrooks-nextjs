import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

export default function GameCard({ children, title, images, repo, status }) {
  var carouselItems = []
  images.forEach((image, i) => carouselItems.push(<Carousel.Item>
    <img
      className="d-block w-100"
      src={"/images/games/" + image}
      alt={"Slide " + i}
    />
  </Carousel.Item>))
  return (
    <Card className="mb-3" style={{ maxWidth: '30rem' }}>
      <Carousel>
        {carouselItems}
      </Carousel>
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
