import styles from '../styles/skilltree.module.scss'
import React, { Component } from 'react';
import Sunburst from './sunburst'
import data from '../lib/skills'

class SkillTree extends Component {

    onSelect(event) {
        console.log(event);
    }

    render() {
        const tooltipContent = <div className="sunburstTooltip" style="display: inline;
                                                                           position: absolute;
                                                                           max-width: 320px;
                                                                           white-space: nowrap;
                                                                           font: 12px sans-serif;
                                                                           color: white;
                                                                           z-index: 10;
                                                                           font-weight: bold;
                                                                           background: rgba(0,0,0,0.65);
                                                                           border-radius: 3px;
                                                                           padding: 5px;
                                                                           opacity: 0;
                                                                           text-align: center;
                                                                           margin-bottom: 5px;" />
        return (
            <div className={styles.skilltreeBackground}>
                <Sunburst
                    data={data}
                    onSelect={this.onSelect}
                    scale="linear" // or exponential
                    keyId="skilltree"
                    width="580"
                    height="725"
                    tooltipContent = {tooltipContent}
                >
                </Sunburst>
            </div>
        )
    }
}

export default SkillTree;