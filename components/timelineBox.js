import styles from '../styles/timeline.module.scss'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import anime from 'animejs'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      let totalWidth = 0.39 * window.innerWidth
      let totalHeight = 0.26 * window.innerWidth
      if (window.innerWidth < 600) {
        totalWidth = Math.min(600, window.innerWidth)
        totalHeight = Math.min(400, window.innerWidth / 1.5)
      }
      setSize([totalWidth, totalHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const TimelineBox = ({image, handler}) => {
  const [width, height] = useWindowSize()
  const [timeline, setTimeline] = useState()
  const eventRef = useRef()
  const maskRef = useRef()

  useEffect(() => {
    if (timeline != undefined) {
      anime.remove(eventRef.current)
      anime.remove(maskRef.current)
    }

    // Event expansion animation: fill with colour, expand out, hide mask
    let tempTimeline = anime.timeline({
      targets: eventRef.current,
      easing: 'easeInOutSine',
      direction: 'normal',
      zIndex: 10,
      loop: false,
      autoplay: false,
      // Play in reverse when clicked twice to hide
      complete: function (anim) {
        anim.direction = (anim.direction == 'normal') ? 'reverse' : 'normal';
      }
    })
    // Fill the background of the mask
    tempTimeline.add({
      targets: maskRef.current,
      backgroundColor: "#343a40",
      opacity: 1,
      duration: 400
    })
    // Expand the event window outwards, remove the left and right borders
    tempTimeline.add({
      targets: eventRef.current,
      scaleX: [1, width / 20],
      scaleY: [1, height / 20.],
      borderTopWidth: ['5px', '1px'],
      borderBottomWidth: ['5px', '1px'],
      borderLeftWidth: ['5px', '0px'],
      borderRightWidth: ['5px', '0px'],
      duration: 700
    })
    // Hide the mask that was covering the background image
    tempTimeline.add({
      targets: maskRef.current,
      backgroundColor: "#FFF",
      opacity: 0,
      duration: 400
    })
    setTimeline(tempTimeline)
  }, [width, height])

  const handleClick = () => {
    timeline.play();
  }

  return (
    <div ref={eventRef} key={"event"} className={styles.timelineEvent}
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClick}
      onMouseEnter={handler}>
      <div ref={maskRef} key={"mask"} className={styles.timelineMask} />
    </div>
  )
}

export default TimelineBox
