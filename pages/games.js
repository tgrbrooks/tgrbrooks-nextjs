import Head from 'next/head'
import DarkLink from '../components/UI/DarkLink'
import DarkButton from '../components/UI/DarkButton'
import CardDeck from 'react-bootstrap/CardDeck'
import Alert from 'react-bootstrap/Alert'
import utilStyles from '../styles/utils.module.scss'
import PageLayout from '../components/PageLayout.js'
import GameCard from '../components/GameCard.js'

export default function Games() {
  return (
    <PageLayout title="Games" type={4}>
      <Head>
        <title>Games | Tom Brooks</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I occasionally dabble with game development but my skill with pixel art is severely lacking so I rely a lot on some great free resources such as <DarkLink link="https://www.kenney.nl/" name="Kenny" /> and <DarkLink link="https://opengameart.org/" name="OpenGameArt" />. Take a look at some of the more or less finished examples below.</p>
      </section>
      <br/>
      <CardDeck>
        <GameCard title={"Valentine's Adventure"} images={["adventure1.png", "adventure2.png", "adventure3.png"]} repo={"AdventureGame"} status={"Maintained"}>
          <p>I thought this would be a fun way of learning some JavaScript and it was, but I probably spent about 10% of the time writing code and the rest doing pixel art.</p>
          <p>I used <DarkLink link="https://phaser.io/" name="Phaser" /> as the framework, while I don't have much experience with other frameworks I thought it was pretty great as a piece of free software.</p>
          <p>I also used <DarkLink link="https://www.piskelapp.com/" name="Piskel" /> for creating sprites and other assets and <DarkLink link="https://www.mapeditor.org" name="Tiled" /> for creating tile maps, both of which I would recommend.</p>
          <Alert variant='warning'>WARNING: I made this as a Valentine's day present for my partner so it's a bit soppy. (Play at your own risk)</Alert>
          <DarkButton link="/AdventureGame/index.html" name="Play" />
        </GameCard>
        <GameCard title={"Cheese Quest"} images={["cheesebag1.png", "cheesebag2.png"]} repo={"CheeseQuest"} status={"Maintained"}>
          <p>I made this game as a christmas present for a friend using the same tech stack as Valentine's Adventure.</p>
          <p>I thought it would be super quick as I already knew what I was doing and wasn't putting a lot of effort into creating the assets, but it turned out to be a big time suck as I ended up experimenting with making it mobile friendly.</p>
          <p>It's a very dumb concept and much shorter than Valentine's Adventure, but I made up for that by making it almost unenjoyably hard.</p>
          <DarkButton link="https://cheese-bag.com" name="Play" />
        </GameCard>
      </CardDeck>
    </PageLayout>
  )
}