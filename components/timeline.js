import TimelineEvent from './timelineEvent.js'
import styles from '../styles/timeline.module.scss'

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineBackground}>
        <div className={styles.timelineTitle}>
          Timeline
        </div>
        <TimelineEvent image={"birth.png"} date={"16/03/1994"} label={"Born"} />
        <TimelineEvent image={"Graveney.png"} date={"2006 - 2012"} label={"Graveney school"} />
        <TimelineEvent image={"MPhys.png"} date={"2012 - 2016"} label={"University of Manchester - MPhys"} />
        <TimelineEvent image={"Mantid.png"} date={"2015"} label={"Mantid Project - Intern"} />
        <TimelineEvent image={"Phd.png"} date={"2016 - 2020"} label={"University of Sheffield - PhD"} />
        <TimelineEvent image={"Postdoc.png"} date={"2020"} label={"University of Sheffield - Researcher"} />
        <TimelineEvent image={"Phd.png"} date={"2020 -"} label={"Applied Blockchain - Software Developer"} />
        <div className={styles.timelineEndLine}></div>
      </div>
    </div>
  )
}
