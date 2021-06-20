import styles from '../styles/timeline.module.scss'
import React, { useState } from 'react'
import TimelineText from './TimelineText.js'
import TimelineBox from './TimelineBox.js'

const TimelineEvent = ({image, date, label}) => {
  const [dateTimeline, setDateTimeline] = useState()
  const [labelTimeline, setLabelTimeline] = useState()
  const [visible, setVisible] = useState(false)

  const showText = () => {
    if (visible === false) {
      dateTimeline.play()
      labelTimeline.play()
      setVisible(true)
    }
  }

  return (
    <div className={styles.timelineEventWrapper}>
      <div className={styles.timelineLine} />
      <TimelineBox image={"/images/events/" + image} handler={showText} />
      <div className={styles.timelineDate}>
        <TimelineText text={date} setTimeline={setDateTimeline} />
      </div>
      <div className={styles.timelineLabel}>
        <TimelineText text={label} setTimeline={setLabelTimeline} />
      </div>
    </div>
  )
}

export default TimelineEvent
