import TimelineBox from './timelineBox.js'
//import TimelineDate from './timelineDate.js'
//import TimelineLabel from './timelineLabel.js'
import TimelineEvent from './timelineEvent.js'
import styles from '../styles/timeline.module.scss'

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineBackground}>

        <div className={styles.timelineTitle}>
          Timeline
        </div>
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/birth.png"} />
        <TimelineEvent image={"images/events/birth.png"} date={"16/03/1994"} label={"Born"}/>
      </div>

        {/*<div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/birth.png"} />
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/Graveney.png"} />
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/MPhys.png"} />
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/Mantid.png"} />
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/Phd.png"} />
        <div className={styles.timelineLine}></div>
        <TimelineBox image={"images/events/Postdoc.png"} />
        <div className={styles.timelineLine}></div>
      </div>
      <div className={styles.timelineText}>
        <TimelineDate date={"16/03/1994"} />
        <TimelineLabel label={"Born"} />
      </div>
  </div>*/}
    </div>
  )
}
