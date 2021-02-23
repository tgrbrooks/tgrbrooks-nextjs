import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

export default function About() {
  return (
    <PageLayout title="About" type={2}>
      <Head>
        <title>About | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a software developer with a background in physics.</p>
        <p>I did my PhD in particle physics at the University of Sheffield studying neutrino interactions on argon atoms.</p>
        <p>As part of my work I spent time as a visiting research scholar at the Fermi National Accelerator Laboratory, building a 100 ton particle detector and designing algorithms for reconstructing interactions.</p>
        <p>After my PhD I had a brief spell with the WATCHMAN collaboration as a postdoctoral researcher, developing a system of remote nuclear reactor detection for non proliferation.</p>
        <p>I'm currently working as a C++ engineer with Applied Blockchain, specialising in privacy preserving secure enclave technology.</p>
        <p>You can find out more about my background on my <Link href="cv"><a>CV</a></Link> page, and more about things I've done on the <Link href="projects"><a>projects</a></Link> and <Link href="games"><a>games</a></Link> pages.</p>
      </section>
      <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Papers with my name on them</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Talks I've given</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </CardDeck>
    </PageLayout>
  )
}