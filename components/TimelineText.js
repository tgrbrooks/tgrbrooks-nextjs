import React, { useEffect, useState, useRef } from 'react'
import anime from 'animejs'

const TimelineText = ({text, setTimeline}) => {
  let tempTargetRefs = []
  let tempTargetChars = []
  for (let [index, char] of text.split("").entries()) {
    tempTargetRefs.push(useRef())
    tempTargetChars.push(<span aria-hidden="true" ref={tempTargetRefs[index]} key={index}>{char}</span>)
  }

  const [targetRefs] = useState(tempTargetRefs)
  const [targetChars] = useState(tempTargetChars)

  useEffect(() => {
    if (anime != undefined) {
      anime.remove(targetRefs.map(x => x.current))
    }

    let timeline = anime.timeline({
      autoplay: false,
      loop: false
    })
    timeline.add({
      targets: targetRefs.map(x => x.current),
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 75 * (i + 1)
    });
    setTimeline(timeline)
  }, [targetChars])

  return (
    <span aria-label={text}>
      {targetChars}
    </span>
  )
}

export default TimelineText
