import React, { Component } from 'react';
import anime from 'animejs'

const PREFIX = '__anime__';

class TimelineText extends Component {

    constructor(props) {
        super(props);
        this.state = { show: false, visible: false }
        this.targets = [];
        this.targetRefs = [];
        this.targetChars = [];
        for (let [index, char] of props.text.split("").entries()) {
            this.targetRefs.push(React.createRef());
            this.targetChars.push(<span aria-hidden="true" ref={this.targetRefs[index]} key={index}>{char}</span>);
        }
    }

    componentDidMount() {
        this.createAnime();
    }

    createAnime = () => {
        if (this.anime != undefined) {
            anime.remove(this.targets)
        }

        this.targets = [];
        for (let ref of this.targetRefs) {
            if (ref.current) {
                this.targets.push(ref.current);
            }
        }

        this.timeline = anime.timeline({
            autoplay: false,
            loop: false
        })
        this.timeline.add({
            targets: this.targets,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 75 * (i + 1)
        });
    }

    play = () => {
        if (this.state.visible == false) {
            this.timeline.play();
            this.setState({ visible: true });
        }
    }

    render() {
        return (
            <span aria-label={this.props.text}>
                {this.targetChars}
            </span>
        )
    }
}

export default TimelineText;