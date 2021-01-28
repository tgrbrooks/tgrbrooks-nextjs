import styles from '../styles/skilltree.module.scss'
import React, { Component } from 'react';
import Sunburst from './sunburst'
import data from '../lib/skill'

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
                    tooltipContent={<div class="sunburstTooltip" style="position: fixed; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;"/>}
                    tooltip
                    tooltipPosition="right"
                    keyId="skilltree"
                    width="580"
                    height="725">
                </Sunburst>
            </div>
        )
    }
}

export default SkillTree;