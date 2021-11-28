import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import styles from '../styles/layout.module.scss'

const ListCard = ({ title, items }) => {
  let listItems = []
  {items.forEach((item, i) => {
    listItems.push(
    <ListGroup.Item key={"listCard_"+title+"_"+i} action href={item.link} className={styles.linkCardBody}>
      {item.title}<br/><i>{item.extra}</i>
    </ListGroup.Item>)
  })}
  return (
    <Card className={styles.listCard}>
      <Card.Header className={styles.cardHeader}><b>{title}</b></Card.Header>
      <ListGroup variant="flush">
        {listItems}
      </ListGroup>
    </Card>
  )
}

export default ListCard
