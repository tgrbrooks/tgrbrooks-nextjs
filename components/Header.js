import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from '../styles/layout.module.scss'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbar}>
      <Navbar.Brand href="/">Tom Brooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="games">Games</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="cv">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
