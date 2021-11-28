import Head from 'next/head'
import DarkLink from '../components/UI/DarkLink'
import utilStyles from '../styles/utils.module.scss'
import PageLayout from '../components/PageLayout'
import ListCard from '../components/ListCard'
import CardDeck from 'react-bootstrap/CardDeck'

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
        <p>You can find out more about my background on my <DarkLink link="/cv" name="CV" /> page, and more about things I've done on the <DarkLink link="/projects" name="projects"/> and <DarkLink link="/games" name="games"/> pages.</p>
      </section>
      <br/>
      <CardDeck>
        <ListCard title="Papers" items={[
          {link: "http://etheses.whiterose.ac.uk/28046/", title: "Selecting Charged Current Muon Neutrino Interactions on Argon with the Short-Baseline Near Detector.", extra: "Thesis (2020)"},
          {link: "https://iopscience.iop.org/article/10.1088/1748-0221/15/06/P06033", title: "Construction of precision wire readout planes for the Short-Baseline Near Detector.", extra: "Journal of Instrumentation (2020)"},
          {link: "https://arxiv.org/abs/1804.05941v2", title: "A Novel Electrical Method to Measure Wire Tensions for Time Projection Chambers.", extra: "NIM A (2019)"}]} />
        <ListCard title="Talks" items={[
          {link: "", title: "Neutrino-nucleus cross sections at the Short-Baseline Near Detector.", extra: "HEP Seminar Series: University of Sheffield (2020)"},
          {link: "https://indico.cern.ch/event/797094/contributions/3367773/", title: "A preliminary charged-current muon neutrino inclusive selection in SBND.", extra: "IOP Conference: Imperial College London (2019)"},
          {link: "https://indico.fnal.gov/event/16384/contributions/37237/", title: "SBND in 10 minutes.", extra: "New Perspectives: Fermilab (2018)"}]} />
      </CardDeck>
    </PageLayout>
  )
}