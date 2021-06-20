import styles from '../styles/skilltree.module.scss'
import React, { useState, useEffect } from 'react'
import Sunburst from './Sunburst.js'
import data from '../utils/skills.js'

function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function updateSize() {
      let totalWidth = Math.min(600, window.innerWidth)
      setSize([totalWidth, totalWidth]);
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const SkillTree = () => {
  const [width, height] = useWindowSize()

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
        width={width}
        height={height}
        tooltipContent={tooltipContent}
      >
      </Sunburst>
    </div>
  )
}

export default SkillTree
