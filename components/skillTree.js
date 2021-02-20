import styles from '../styles/skilltree.module.scss'
import React, { Component } from 'react';
import Sunburst from './sunburst'
import data from '../lib/skills'

class SkillTree extends Component {

    onSelect(event) {
        console.log(event);
    }

    render() {
        return (
            <div className={styles.skilltreeBackground}>
                <Sunburst
                    data={data}
                    onSelect={this.onSelect}
                    scale="linear" // or exponential
                    keyId="skilltree"
                    width="580"
                    height="725">
                </Sunburst>
            </div>
        )
    }
}

export default SkillTree;