import styles from '../styles/timeline.module.scss'
import React, { Component } from 'react';
import TimelineText from './timelineText'

class TimelineLabel extends Component {

    constructor(props) {
        super(props);
        this.state = { show: false }
        this.labelRef = React.createRef();
    }

    play = () => {
        this.labelRef.current.play();
    }

    render() {
        return (
            <div className={styles.timelineLabel}>
                <TimelineText text={this.props.label} ref={this.labelRef} />
            </div>
        )
    }
}

export default TimelineLabel;