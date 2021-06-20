import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import PageLayout from '../components/PageLayout.js'
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
      <br/>
      <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Header><b>Papers with my name on them</b></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item action href="http://etheses.whiterose.ac.uk/28046/">Selecting Charged Current Muon Neutrino Interactions on Argon with the Short-Baseline Near Detector.<br/><i>Thesis (2020)</i></ListGroup.Item>
            <ListGroup.Item action href="https://iopscience.iop.org/article/10.1088/1748-0221/15/06/P06033">Construction of precision wire readout planes for the Short-Baseline Near Detector.<br/><i>Journal of Instrumentation (2020)</i></ListGroup.Item>
            <ListGroup.Item action href="https://arxiv.org/abs/1804.05941v2">A Novel Electrical Method to Measure Wire Tensions for Time Projection Chambers.<br/><i>NIM A (2019)</i></ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Header><b>Talks I've given</b></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Neutrino-nucleus cross sections at the Short-Baseline Near Detector.<br/><i>HEP Seminar Series: University of Sheffield (2020)</i></ListGroup.Item>
            <ListGroup.Item action href="https://indico.cern.ch/event/797094/contributions/3367773/">A preliminary charged-current muon neutrino inclusive selection in SBND.<br/><i>IOP Conference: Imperial College London (2019)</i></ListGroup.Item>
            <ListGroup.Item action href="https://indico.fnal.gov/event/16384/contributions/37237/">SBND in 10 minutes.<br/><i>New Perspectives: Fermilab (2018)</i></ListGroup.Item>
          </ListGroup>
        </Card>
      </CardDeck>
    </PageLayout>
  )
}