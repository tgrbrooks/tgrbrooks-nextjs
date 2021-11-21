import utilStyles from '../styles/utils.module.scss'
import React, { useEffect, useState } from 'react'
import anime from 'animejs'
import { phraseToArray } from '../utils/letters.js'

const PREFIX = '__anime__';

function useWindowSize(nrows, ncols, width, minWidth) {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function updateSize() {
      let divWidth = Math.floor(Math.min(width, window.innerWidth) / ncols)
      if (width < 1) {
        let totalWidth = Math.max(window.innerWidth * width, minWidth)
        totalWidth = Math.min(totalWidth, window.innerWidth)
        divWidth = Math.floor(totalWidth / ncols)
      }
      setSize([divWidth * ncols, divWidth * nrows])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

function createStartAnime(type, targets, colTargets, grid) {
  let timeline = anime.timeline({
    targets: targets,
    easing: 'easeInOutSine',
    loop: false,
    autoplay: false
  });
  if (type === 1) {
    timeline.add({
      rotate: 0,
      scaleX: 2.5,
      scaleY: .25,
      delay: anime.stagger(4, { from: 'center' }),
    });
    timeline.add({
      scale: .5,
      scaleX: 1,
      rotate: 180,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: 'center' })
    })
  }
  if (type === 2) {
    // Make smaller and rotate at same time
    timeline.add({
      scaleX: .25,
      scaleY: .25,
      rotate: anime.stagger([180, 0], { grid: grid, from: 'center' }),
      delay: anime.stagger(20, { from: 'center' })
    })
  }
  if (type === 3) {
    // Change the squares to circles
    timeline.add({
      borderRadius: ['0%', '50%']
    })
    // Make a wave
    timeline.add({
      scale: [
        { value: 2, easing: 'easeInOutQuad', duration: 500 },
        { value: .1, easing: 'easeOutSine', duration: 500 }
      ],
      delay: anime.stagger(200, { grid: grid, from: 'center' })
    })
  }
  if (type === 4) {
    // Lift up the squares
    timeline.add({
      translateY: -50,
      scaleX: .5,
      scaleY: .5,
      delay: anime.stagger(5, { from: 'first' })
    })
    // Drop them back down again
    timeline.add({
      translateY: 0,
      duration: 500,
      delay: anime.stagger(5, { from: 'last' }),
      easing: 'easeOutElastic'
    })
  }
  timeline.add({
    targets: colTargets,
    backgroundColor: "#FFF",
    borderColor: "#343a40",
    delay: anime.stagger(0, { grid: grid, from: 'center' }),
    easing: 'easeInOutSine'
  })
  timeline.add({
    targets: targets,
    rotate: 0,
    scaleY: 1,
    scaleX: 1,
    scale: 1,
    borderRadius: '0%',
    delay: anime.stagger(20, { grid: grid, from: 'center' })
  })
  return timeline
};

function createWaveAnime(targets, grid, index) {
  // Button press animation
  let timeline = anime.timeline({
    targets: targets,
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: false,
    autoplay: false
  })
  // Make a wave animation and reduce scale by half
  timeline.add({
    translateX: [
      { value: anime.stagger('-.1rem', { grid: grid, from: index, axis: 'x' }) },
      { value: anime.stagger('.1rem', { grid: grid, from: index, axis: 'x' }) },
      { value: anime.stagger('0', { grid: grid, from: index, axis: 'x' }) }
    ],
    translateY: [
      { value: anime.stagger('-.1rem', { grid: grid, from: index, axis: 'y' }) },
      { value: anime.stagger('.1rem', { grid: grid, from: index, axis: 'y' }) },
      { value: anime.stagger('0', { grid: grid, from: index, axis: 'y' }) }
    ],
    duration: 800,
    scale: [
      { value: .8 },
      { value: 1 }
    ],
    delay: anime.stagger(70, { grid: grid, from: index })
  })
  return timeline
};

const AnimatedTitle = ({title, ncols, nrows, width, minWidth, type}) => {
  const [windowWidth, windowHeight] = useWindowSize(nrows, ncols, width, minWidth)
  const [targets, setTargets] = useState([])
  const [colTargets, setColTargets] = useState([])
  const [startAnimation, setStartAnimation] = useState()
  const [waveAnimation, setWaveAnimation] = useState()
  const [index, setIndex] = useState(null)
  const grid = [ncols, nrows]
  const targetRefs = React.useRef([])
  let indices = []
  for (let i = 0; i < nrows * ncols; i++) {
    indices.push(i)
  }

  useEffect(() => {
    if (windowWidth === 0) {
      return
    }

    const textArray = phraseToArray(title, ncols, nrows)
    let tempTargets = []
    let tempColTargets = []
    for (let i = 0; i < nrows * ncols; i++) {
      if (targetRefs.current[i]) {
        tempTargets.push(targetRefs.current[i])
        if (textArray[i]) {
          tempColTargets.push(targetRefs.current[i])
        }
      }
    }
    setTargets(tempTargets)
    setColTargets(tempColTargets)
  }, [windowWidth, windowHeight])
 
  useEffect(() => {
    if(targets.length !== 0 && colTargets.length !== 0) {
      setStartAnimation(createStartAnime(type, targets, colTargets, grid))
    }
  }, [targets, colTargets])
  useEffect(() => {
    if(startAnimation){
      startAnimation.play()
    }
  }, [startAnimation])

  useEffect(() => {
    if (index) {
      setWaveAnimation(createWaveAnime(targets, grid, index))
      setIndex(null)
    }
  }, [index, targets])
  useEffect(() => {
    if(waveAnimation){
      waveAnimation.play()
    }
  }, [waveAnimation])

  return (
    <article className={utilStyles.animationBackground}>
      <div className={utilStyles.staggerVisualizer} style={{ width: windowWidth, height: windowHeight }}>
        {indices.map((i) => {
          return <div ref={el => targetRefs.current[i] = el}
            key={`${PREFIX}${i}`}
            className={utilStyles.staggerVisualizerDiv}
            onClick={() => {setIndex(i)}}
            style={{ width: windowWidth/ncols, height: windowWidth/ncols }}
          />
        })}
      </div >
    </article>
  ) 
}

export default AnimatedTitle;