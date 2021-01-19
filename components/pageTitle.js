import utilStyles from '../styles/utils.module.scss'
import React, { Component } from 'react';
import Anime from 'react-anime';
import AnimeTimeline from './animeTimeline';
import anime from 'animejs'
import { phraseToArray } from '../lib/letters'

const grid = [50, 15];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

class AnimatedTitle extends Component {
    constructor(props) {
        super(props);
        this.text_array = phraseToArray('Hello', col, row);
        this.div_elements = [];
        for (let i = 0; i < numberOfElements; i++) {
            this.div_elements.push(<div key={i} className={utilStyles.staggerVisualizerDiv} />);
        }

        // Store the elements with different colours in another variable
        this.col_elements = [];
        for (let i = 0; i < numberOfElements; i++) {
            if (this.text_array[i]) {
                this.col_elements.push(this.div_elements[i])
            }
        }
    }

    render() {
        let timelineProps = {
            easing: 'easeInOutSine',
            loop: false,
            autoplay: true
        }
        let timeline1 = {
            rotate: 0,
            scaleX: 2.5,
            scaleY: .25,
            delay: anime.stagger(4, { from: 'center' }),
        };
        let timeline2 = {
            scale: .5,
            scaleX: 1,
            rotate: 180,
            duration: 500,
            delay: anime.stagger(100, { grid: grid, from: 'center' })
        }
        let timeline3 = {
            backgroundColor: ["#343a40", "#FFF"],
            borderColor: "#343a40",
            delay: anime.stagger(0, { grid: grid, from: 'center' }),
            easing: 'easeInOutSine'
        }
        let timeline4 = {
            rotate: 0,
            scaleY: 1,
            scaleX: 1,
            scale: 1,
            borderRadius: '0%',
            delay: anime.stagger(20, { grid: grid, from: 'center' })
        }
        let timelineArray = [timelineProps, timeline1, timeline2, timeline3, timeline4];
        return (
            <article className={utilStyles.animationBackground}>
                <div className={utilStyles.staggerVisualizer}>
                    <AnimeTimeline timeline={timelineArray} text_array={this.text_array}>
                        {this.div_elements}
                    </AnimeTimeline>
                </div >
            </article>
        )
    }
}

export default AnimatedTitle;