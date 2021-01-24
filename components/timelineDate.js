import styles from '../styles/timeline.module.scss'
import React, { Component } from 'react';
import TimelineText from './timelineText'

class TimelineDate extends Component {

    constructor(props) {
        super(props);
        this.state = { show: false }
        this.dateRef = React.createRef();
    }

    play = () => {
        this.dateRef.current.play();
    }

    render() {
        return (
            <div className={styles.timelineDate}>
                <TimelineText text={this.props.date} ref={this.dateRef} />
            </div>
        )
    }
}

export default TimelineDate;