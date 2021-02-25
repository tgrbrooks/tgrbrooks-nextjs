import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

export default function Projects () {
  return (
    <PageLayout title="Projects" type={3}>
      <Head>
        <title>Projects | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I usually have a few side projects on the go at varying levels of completion, most of which can be found on my <Link href="https://github.com/tgrbrooks">GitHub page</Link>.</p>
        <p>Below are some extra details on some of the more interesting ones.</p>
      </section>
      <br/>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/projects/ada.png"/>
          <Card.Body>
            <Card.Title>ADA: Algal Data Analyser</Card.Title>
            <Card.Text>
              <p>A GUI based tool for plotting algae growth curves and measuring growth rates.</p>
              <p>Written in python with PyQt5 and matplotlib.</p>
              <Button href="https://github.com/tgrbrooks/ADA">GitHub</Button>{' '}
              <Button href="https://algaeplotter.readthedocs.io/en/latest/">Documentation</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Maintained</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/projects/xsecplotter.png"/>
          <Card.Body>
            <Card.Title>Cross Section Plotter</Card.Title>
            <Card.Text>
              <p>A configuration file based tool for calculating expected neutrino-argon interaction rates and statistical and systematic uncertainties.</p>
              <p>Written as part of my PhD on the Short-Baseline Near Detector.</p>
              <Button href="https://github.com/tgrbrooks/XSecPlotter">GitHub</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Maintained</Card.Footer>
        </Card>
      </CardDeck>
      <br/>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/projects/phdorg.png"/>
          <Card.Body>
            <Card.Title>PhD Organiser</Card.Title>
            <Card.Text>
              <p>A terminal based calendar/organiser for PhD students with no external dependencies.</p>
              <p>Written for a short masters project on C++ object orientated programming.</p>
              <Button href="https://github.com/tgrbrooks/PhDOrganiser">GitHub</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Maintained</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/projects/roboai.png"/>
          <Card.Body>
            <Card.Title>RoboAI</Card.Title>
            <Card.Text>
              <p>Audio, video and accelerometer processing on the Raspberry Pi.</p>
              <p>The ultimate goal is to used trained language and image neural networks to respond to commands and navigate.</p>
              <Button href="https://github.com/tgrbrooks/RoboAI">GitHub</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">In development</Card.Footer>
        </Card>
      </CardDeck>
      <br/>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/projects/website.png"/>
          <Card.Body>
            <Card.Title>tgrbrooks.github.io</Card.Title>
            <Card.Text>
              <p>This very website!</p>
              <p>A page for storing all things useful and testing out new web development techniques.</p>
              <Button href="https://github.com/tgrbrooks/tgrbrooks.github.io">GitHub</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Maintained</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/projects/racepoints.png"/>
          <Card.Body>
            <Card.Title>SLSC Race Points</Card.Title>
            <Card.Text>
              <p>An application for recording swimming race times and storing in an SQLite database.</p>
              <p>Made a long long time ago when I was just discovering the world of coding.</p>
              <Button href="https://github.com/tgrbrooks/SLSCRacePoints">GitHub</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">No longer supported</Card.Footer>
        </Card>
      </CardDeck>
    </PageLayout>
  )
}