import utilStyles from '../styles/utils.module.scss'
import React, { Component } from 'react';
import anime from 'animejs'
import { phraseToArray } from '../lib/letters'

const grid = [50, 15];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;
const PREFIX = '__anime__';

class AnimatedTitle extends Component {
    state = { playWave: false, index: 0 };

    constructor(props) {
        super(props);
        this.text_array = phraseToArray(props.title, col, row);
        this.div_elements = [];
        this.targets = [];
        this.col_targets = [];
        this.targetRefs = [];
        for (let i = 0; i < numberOfElements; i++) {
            this.targetRefs.push(React.createRef());
            this.div_elements.push(<div ref={this.targetRefs[i]}
                key={`${PREFIX}${i}`}
                className={utilStyles.staggerVisualizerDiv}
                onClick={() => this.setState({ playWave: true, index: i })}
            />);
        }
    }

    componentDidMount() {
        this.createStartAnime();
    }

    componentDidUpdate() {
        this.createWaveAnime();
    }

    createStartAnime = () => {
        if (this.targets.length > 0 && this.timeline !== undefined) {
            anime.remove(this.targets);
        }

        this.targets = [];
        for (let [i, ref] of this.targetRefs.entries()) {
            if (ref.current) {
                this.targets.push(ref.current);
                if (this.text_array[i]) {
                    this.col_targets.push(ref.current);
                }
            }
        }

        this.timeline = anime.timeline({
            targets: this.targets,
            easing: 'easeInOutSine',
            loop: false,
            autoplay: true
        });
        if (this.props.type === 1) {
            this.timeline.add({
                rotate: 0,
                scaleX: 2.5,
                scaleY: .25,
                delay: anime.stagger(4, { from: 'center' }),
            });
            this.timeline.add({
                scale: .5,
                scaleX: 1,
                rotate: 180,
                duration: 500,
                delay: anime.stagger(100, { grid: grid, from: 'center' })
            })
        }
        if (this.props.type === 2) {
            // Make smaller and rotate at same time
            this.timeline.add({
                scaleX: .25,
                scaleY: .25,
                rotate: anime.stagger([180, 0], { grid: grid, from: 'center' }),
                delay: anime.stagger(20, { from: 'center' })
            })
        }
        if (this.props.type === 3) {
            // Change the squares to circles
            this.timeline.add({
                borderRadius: ['0%', '50%']
            })
            // Make a wave
            this.timeline.add({
                scale: [
                    { value: 2, easing: 'easeInOutQuad', duration: 500 },
                    { value: .1, easing: 'easeOutSine', duration: 500 }
                ],
                delay: anime.stagger(200, { grid: grid, from: 'center' })
            })
        }
        if (this.props.type === 4) {
            // Lift up the squares
            this.timeline.add({
                translateY: -50,
                scaleX: .5,
                scaleY: .5,
                delay: anime.stagger(5, { from: 'first' })
            })
            // Drop them back down again
            this.timeline.add({
                translateY: 0,
                duration: 500,
                delay: anime.stagger(5, { from: 'last' }),
                easing: 'easeOutElastic'
            })
        }
        this.timeline.add({
            targets: this.col_targets,
            backgroundColor: "#FFF",
            borderColor: "#343a40",
            delay: anime.stagger(0, { grid: grid, from: 'center' }),
            easing: 'easeInOutSine'
        })
        this.timeline.add({
            targets: this.targets,
            rotate: 0,
            scaleY: 1,
            scaleX: 1,
            scale: 1,
            borderRadius: '0%',
            delay: anime.stagger(20, { grid: grid, from: 'center' })
        })
    };

    createWaveAnime = () => {
        if (this.targets.length > 0 && this.timeline !== undefined) {
            anime.remove(this.targets);
        }

        this.targets = [];
        for (let [i, ref] of this.targetRefs.entries()) {
            if (ref.current) {
                this.targets.push(ref.current);
                if (this.text_array[i]) {
                    this.col_targets.push(ref.current);
                }
            }
        }

        // Button press animation
        this.wave = anime.timeline({
            targets: this.targets,
            easing: 'easeInOutSine',
            delay: anime.stagger(50),
            loop: false,
            autoplay: false
        })
        // Make a wave animation and reduce scale by half
        this.wave.add({
            translateX: [
                { value: anime.stagger('-.1rem', { grid: grid, from: this.state.index, axis: 'x' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: this.state.index, axis: 'x' }) },
                { value: anime.stagger('0', { grid: grid, from: this.state.index, axis: 'x' }) }
            ],
            translateY: [
                { value: anime.stagger('-.1rem', { grid: grid, from: this.state.index, axis: 'y' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: this.state.index, axis: 'y' }) },
                { value: anime.stagger('0', { grid: grid, from: this.state.index, axis: 'y' }) }
            ],
            duration: 800,
            scale: [
                { value: .8 },
                { value: 1 }
            ],
            delay: anime.stagger(70, { grid: grid, from: this.state.index })
        })
        if (this.state.playWave) {
            this.wave.play();
        }
    };

    render() {
        return (
            <article className={utilStyles.animationBackground}>
                <div className={utilStyles.staggerVisualizer}>
                    {this.div_elements}
                </div >
            </article>
        )
    }
}

export default AnimatedTitle;