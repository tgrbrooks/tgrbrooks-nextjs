import styles from '../styles/timeline.module.scss'
import React, { Component } from 'react';
import anime from 'animejs'

const PREFIX = '__anime__';

class TimelineBox extends Component {

    constructor(props) {
        super(props);
        this.state = { playOpen: false, width: 0., height: 0. };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.event_ref = React.createRef();
        this.mask_ref = React.createRef();
        this.event_element = <div ref={this.event_ref} key={"event"} className={styles.timelineEvent}
            style={{ backgroundImage: `url(${props.image})` }}
            onClick={() => this.setState({ playOpen: !this.state.playOpen })}>
            <div ref={this.mask_ref} key={"mask"} className={styles.timelineMask} />
        </div>
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate() {
        this.createAnime();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    createAnime = () => {
        if (this.timeline != undefined) {
            anime.remove(this.event_ref.current)
            anime.remove(this.mask_ref.current)
        }

        // Event expansion animation: fill with colour, expand out, hide mask
        this.timeline = anime.timeline({
            targets: this.event_ref.current,
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
        this.timeline.add({
            targets: this.mask_ref.current,
            backgroundColor: "#343a40",
            opacity: 1,
            duration: 400
        })
        // Expand the event window outwards, remove the left and right borders
        this.timeline.add({
            targets: this.event_ref.current,
            scaleX: [1, 0.45 * this.state.width / 20.],
            scaleY: [1, 0.3 * this.state.width / 20.],
            borderTopWidth: ['5px', '1px'],
            borderBottomWidth: ['5px', '1px'],
            borderLeftWidth: ['5px', '0px'],
            borderRightWidth: ['5px', '0px'],
            duration: 700
        })
        // Hide the mask that was covering the background image
        this.timeline.add({
            targets: this.mask_ref.current,
            backgroundColor: "#FFF",
            opacity: 0,
            duration: 400
        })
        if (this.state.playOpen) {
            this.timeline.play();
            //this.setState({ playOpen: false });
        }
    };

    render() {
        return (
            <>
                {this.event_element}
            </>
        )
    }
}

export default TimelineBox;