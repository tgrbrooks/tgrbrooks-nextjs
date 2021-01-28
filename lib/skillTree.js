import * as d3 from 'd3'
import Sunburst from 'sunburst-chart'

var skilltree = document.createElement('div');

const color = d3.scaleOrdinal(d3.schemePaired);

// Map between integer skill levels and strings
let skillMap = new Map();
skillMap.set(1, 'Basic');
skillMap.set(2, 'Intermediate');
skillMap.set(3, 'Advanced');
skillMap.set(4, 'Expert');

fetch('/assets/skills.json').then(res => res.json()).then(data => {
    Sunburst()
      .data(data)
      .label('name')
      .size(d => d.skill)
      .maxLevels(5)
      .color((d, parent) => color(parent ? parent.data.name : null))
      .excludeRoot(true)
      .tooltipTitle(d => d.name)
      .tooltipContent(d => d.base ? `` : `Level: ${skillMap.get(d.skill)}`)
      (skilltree);
  });

export default function SkillTree() {
    return null;
};