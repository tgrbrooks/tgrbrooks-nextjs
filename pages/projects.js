import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import PageLayout from '../components/PageLayout'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ProjectCard from '../components/projectCard'

export default function Projects() {
  return (
    <PageLayout title="Projects" type={3}>
      <Head>
        <title>Projects | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I usually have a few side projects on the go at varying levels of completion, most of which can be found on my <Link href="https://github.com/tgrbrooks">GitHub page</Link>.</p>
        <p>Below are some extra details on some of the more interesting ones.</p>
      </section>
      <br />
      <CardDeck>
        <ProjectCard title={"ADA: Algal Data Analyser"} image={"ada2.png"} repo={"ADA"} status={"Maintained"}>
          <p>A GUI based tool for plotting algae growth curves and measuring growth rates.</p>
          <p>Written in python with PyQt5 and matplotlib.</p>
          <Button href="https://algaeplotter.readthedocs.io/en/latest/">Documentation</Button>
        </ProjectCard>
        <ProjectCard title={"Cross Section Plotter"} image={"xsecplotter.png"} repo={"XSecPlotter"} status={"Maintained"}>
          <p>A configuration file based tool for calculating expected neutrino-argon interaction rates and statistical and systematic uncertainties.</p>
          <p>Written as part of my PhD on the Short-Baseline Near Detector.</p>
        </ProjectCard>
        <ProjectCard title={"PhD Organiser"} image={"phdorg.png"} repo={"PhDOrganiser"} status={"Maintained"}>
          <p>A terminal based calendar/organiser for PhD students with no external dependencies.</p>
          <p>Written for a short masters project on C++ object orientated programming.</p>
        </ProjectCard>
        <ProjectCard title={"RoboAI"} image={"roboai.png"} repo={"RoboAI"} status={"In development"}>
          <p>Audio, video and accelerometer processing on the Raspberry Pi.</p>
          <p>The ultimate goal is to used trained language and image neural networks to respond to commands and navigate.</p>
        </ProjectCard>
        <ProjectCard title={"tgrbrooks.github.io"} image={"website.png"} repo={"tgrbrooks.github.io"} status={"Maintained"}>
          <p>This very website!</p>
          <p>A page for storing all things useful and testing out new web development techniques.</p>
        </ProjectCard>
        <ProjectCard title={"SLSC Race Points"} image={"racepoints.png"} repo={"SLSCRacePoints"} status={"No longer supported"}>
          <p>An application for recording swimming race times and storing in an SQLite database.</p>
          <p>Made a long long time ago when I was just discovering the world of coding.</p>
        </ProjectCard>
      </CardDeck>
    </PageLayout>
  )
}