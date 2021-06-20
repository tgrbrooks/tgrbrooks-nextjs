import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import Timeline from '../components/Timeline.js'
import SkillTree from '../components/SkillTree.js'
import PageLayout from '../components/PageLayout.js'

export default function CV () {
  return (
    <PageLayout title="CV" type={3}>
      <Head>
        <title>CV | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Download my standard PDF CV <Link href="/assets/cv.pdf"><a>here</a></Link>.
        </p>
        <p>
          ...or you can scroll down for a much more fun interactive CV!
        </p>
        <p>
          The timeline animations are handled by anime.js and the skill tree uses a heavily modified version of <Link href="https://github.com/vasturiano/sunburst-chart"><a>this</a></Link> sunburst visualisation package which in turn is built on the D3.js library.
        </p>
        <p>
          While you're at it, why not also request a cover letter from my helpful <Link href="/cover"><a>automated assistant</a></Link>.
        </p>
        <br/>
      </section>
      <Timeline/>
      <SkillTree/>
    </PageLayout>
  )
}