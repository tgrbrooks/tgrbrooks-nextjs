import styles from '../styles/timeline.module.scss'
import React, { Component } from 'react';
import TimelineDate from './timelineDate'
import TimelineLabel from './timelineLabel'
import TimelineBox from './timelineBox'

class TimelineEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { showText: false }
        this.dateRef = React.createRef();
        this.labelRef = React.createRef();
        this.handleMouse = this.handleMouse.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMouse() {
        this.labelRef.current.play();
        this.dateRef.current.play();
    };

    handleClick() {
        console.log("Clicked");
    }

    render() {
        return (
            <>
                <div className={styles.timelineLine} onMouseEnter={this.handleMouse}></div>
                <TimelineBox image={this.props.image} onClick={this.handleClick}/>
                <TimelineDate date={this.props.date} ref={this.dateRef} />
                <TimelineLabel label={this.props.label} ref={this.labelRef} />
            </>
        )
    }
}

export default TimelineEvent;