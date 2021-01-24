import TimelineEvent from './timelineEvent.js'
import styles from '../styles/timeline.module.scss'

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineBackground}>
        <div className={styles.timelineTitle}>
          Timeline
        </div>
        <TimelineEvent image={"images/events/birth.png"} date={"16/03/1994"} label={"Born"}/>
        <TimelineEvent image={"images/events/Graveney.png"} date={"2006 - 2012"} label={"Graveney school"}/>
        <TimelineEvent image={"images/events/MPhys.png"} date={"2012 - 2016"} label={"University of Manchester - MPhys"}/>
        <TimelineEvent image={"images/events/Mantid.png"} date={"2015"} label={"Mantid Project - Intern"}/>
        <TimelineEvent image={"images/events/Phd.png"} date={"2016 - 2020"} label={"University of Sheffield - PhD"}/>
        <TimelineEvent image={"images/events/Postdoc.png"} date={"2020"} label={"University of Sheffield - Researcher"}/>
        <TimelineEvent image={"images/events/Phd.png"} date={"2020 -"} label={"Applied Blockchain - Software Developer"}/>
        <div className={styles.timelineLine}></div>
      </div>
    </div>
  )
}
