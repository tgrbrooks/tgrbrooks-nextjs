import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import DarkButton from './UI/DarkButton'
import styles from '../styles/layout.module.scss'

const GameCard = ({ children, title, images, repo, status }) => {
  var carouselItems = []
  images.forEach((image, i) => carouselItems.push(<Carousel.Item key={"gameCard_"+title+"_"+i}>
    <img
      className="d-block w-100"
      src={"/images/games/" + image}
      alt={"Slide " + i}
    />
  </Carousel.Item>))
  return (
    <Card className={`${styles.gameCard} mb-3`}>
      <Carousel>
        {carouselItems}
      </Carousel>
      <Card.Body className={`d-flex flex-column ${styles.cardBody}`}>
        <Card.Title className={styles.cardHeader}>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <DarkButton link={'https://github.com/tgrbrooks/' + repo} name={"GitHub"} />
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>{status}</Card.Footer>
    </Card>
  )
}

export default GameCard
