import styles from '../styles/skilltree.module.scss'
import React, { Component } from 'react';
import Sunburst from './sunburst'
import data from '../lib/skills'

class SkillTree extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0., height: 0. };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let totalWidth = Math.min(600, window.innerWidth)
    this.setState({ width: totalWidth, height: totalWidth });
  }

  render() {
    const tooltipContent = <div className="sunburstTooltip" style="display: inline;
                                                                   position: absolute;
                                                                   max-width: 320px;
                                                                   white-space: nowrap;
                                                                   font: 12px sans-serif;
                                                                   pointer-events: none;
                                                                   color: white;
                                                                   z-index: 10;
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
          scale="linear" // or exponential
          keyId="skilltree"
          width={this.state.width}
          height={this.state.height}
          tooltipContent={tooltipContent}
        >
        </Sunburst>
      </div>
    )
  }
}

export default SkillTree
