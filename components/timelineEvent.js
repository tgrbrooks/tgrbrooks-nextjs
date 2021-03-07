import styles from '../styles/timeline.module.scss'
import React, { Component } from 'react';
import TimelineDate from './timelineDate'
import TimelineLabel from './timelineLabel'
import TimelineBox from './timelineBox'

class TimelineEvent extends Component {

    constructor(props) {
        super(props);
        this.dateRef = React.createRef();
        this.labelRef = React.createRef();
        this.showText = this.showText.bind(this);
    }

    showText() {
        this.labelRef.current.play();
        this.dateRef.current.play();
    }

    render() {
        return (
            <div className={styles.timelineEventWrapper}>
                <div className={styles.timelineLine} />
                <TimelineBox image={"/images/events/" + this.props.image} handler={this.showText}/>
                <TimelineDate date={this.props.date} ref={this.dateRef} />
                <TimelineLabel label={this.props.label} ref={this.labelRef} />
            </div>
        )
    }
}

export default TimelineEvent;