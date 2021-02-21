import React from 'react';
import { isEqual } from 'lodash/lang';
import * as d3 from 'd3v4';
import * as utils from '../lib/sunburstUtils';
import styles from '../styles/skilltree.module.scss'
/**
 * Sunburst Chart React Stateless Component with the following allowable Props *
 * data => JSON Array - Typically same for every Sunburst Chart *
 * scale => String - Options: linear | exponential - Linear renders each arc with same radii, Exponential reduces gradually by SquareRoot *
 * onSelect => Function - Called on Arc Click for re-rendering the chart and passing back to User as props *
 * tooltip => Boolean - Display Tooltip or not *
 * tooltipContent => HTMLNode - Customized Node for Tooltip rendering *
 * keyId => String - Unique Id for Chart SVG *
 * width => Integer - Width of the Chart Container *
 * height => Integer - Height of the Chart Container *
 */
class Sunburst extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { mouse_x: 0, mouse_y: 0 };
      }

      _onMouseMove(e) {
        this.setState({ mouse_x: e.screenX, mouse_y: e.screenY });
      }

    componentDidMount() {
        this.renderSunburst(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!isEqual(this.props, nextProps)) {
            this.renderSunburst(nextProps);
        }
    }    

    update(root, firstBuild, svg, partition, hueDXScale, x, y, radius, arc, middleArc, node, self) {
        if (firstBuild) {
            firstBuild = false;
            // Handle clicking on the different levels
            function click(d) {
                node = d;
                self.props.onSelect && self.props.onSelect(d);
                svg.selectAll('path.main-arc')
                    .transition().duration(1000)
                    .attrTween('d', utils.arcTweenZoom(d, x, y, radius, arc));
                svg.selectAll('path.hidden-arc')
                    .transition().duration(1000)
                    .attrTween('d', utils.arcTweenZoom(d, x, y, radius, middleArc));
                svg.selectAll('.path-label')
                    .transition().duration(1000)
                    .styleTween('display', d => () => utils.textFits(d, x, y) ? null : 'none')
            }
            // Create the tooltip div
            const tooltipContent = this.props.tooltipContent;
            //const tooltipContent = <div className={styles.sunburstTooltip}/>;
            const tooltip = d3.select(`#${self.props.keyId}`)
                .append(tooltipContent.type)
            Object.keys(tooltipContent.props).forEach((key) => {
                tooltip.attr(key, tooltipContent.props[key]);
            });
            const slice = svg.selectAll('slice').data(partition(root).descendants()).enter().append('g')
                .attr('class', 'slice')
                .style('opacity', 1);
            slice.append('path')
                .attr('class', 'main-arc')
                // Set the fill colour
                .style('fill', (d) => {
                    let hue;
                    const current = d;
                    // Set the color of the root node
                    if (current.depth === 0) {
                        //return '#33cccc';
                        return '#eee';
                    }
                    // Set the color of the first level nodes
                    if (current.depth <= 1) {
                        hue = hueDXScale(d.x0);
                        current.fill = d3.hsl(hue, 0.5, 0.6);
                        return current.fill;
                    }
                    // Set the child nodes in the subsequent levels as different shades
                    current.fill = current.parent.fill.brighter(0.35);
                    const hsl = d3.hsl(current.fill);
                    hue = hueDXScale(current.x0);
                    const colorshift = hsl.h + (hue / 4);
                    return d3.hsl(colorshift, hsl.s, hsl.l);
                })
                // Style the lines between segments
                .attr('stroke', '#eee')
                .attr('stroke-width', '1')
                // Set the function that handles click events
                .on('click', d => click(d, node, svg, self, x, y, radius, arc))
                // Create the tooltip and set the content
                .on('mouseover', function (d) {
                    d3.select(this).style('cursor', 'pointer');
                    tooltip.html(() => { const name = utils.formatNameTooltip(d); return name; });
                    return tooltip.transition().duration(50).style('opacity', 1);
                })
                // Set the tooltip position
                .on('mousemove', () => {
                    tooltip
                        .style('top', `${this.state.mouse_y - 440}px`)
                        .style('left', `${this.state.mouse_x - 620}px`);
                    return null;
                })
                // Set the tooltip back to normal
                .on('mouseout', function () {
                    d3.select(this).style('cursor', 'default');
                    tooltip.transition().duration(50).style('opacity', 0);
                    return null;
                });
            slice.append('path')
                .attr('class', 'hidden-arc')
                // Set ID for the text to get the reference of
                .attr('id', d => `hidden-arc-${d.data.name}`)
                .style('fill', 'none');
            // Create the arcs for each node
            const label = slice.append('text')
                .attr('class', 'path-label')
                .attr('dominant-baseline', 'middle')
                .attr('text-anchor', 'middle')
                .attr('pointer-events', 'none')
            label.append('textPath')
                .attr('class', 'text-contour')
                .attr('startOffset', '25%')
                .attr('stroke', 'white')
                .attr('stroke-width', 5)
                .attr('stroke-linejoin', 'round')
                .attr('href', d => `#hidden-arc-${d.data.name}`)
                .text(d => `${d.data.name}`);
            label.append('textPath')
                .attr('class', 'text-stroke')
                .attr('startOffset', '25%')
                .attr('href', d => `#hidden-arc-${d.data.name}`)
                .text(d => `${d.data.name}`);
        } else {
            // If the sunburst has already been created just select all visible paths
            svg.selectAll('path').data(partition(root).descendants());
        }
        // Control initial opening animation
        svg.selectAll('path.main-arc')
            .transition().duration(1000)
            .attrTween('d', (d, i) => utils.arcTweenData(d, i, node, x, arc));
        svg.selectAll('path.hidden-arc')
            .transition().duration(1000)
            .attrTween('d', (d, i) => utils.arcTweenData(d, i, node, x, middleArc));
        svg.selectAll('.path-label')
            .transition().duration(1000)
            .styleTween('display', d => () => utils.textFits(d, x, y) ? null : 'none')
        svg.selectAll('text.path-label').select('textPath.text-contour');
        svg.selectAll('text.path-label').select('textPath.text-stroke');
    }

    renderSunburst(props) {
        if (props.data) {
            const self = this,
                // Set total size of chart
                gWidth = props.width,
                gHeight = props.height,
                radius = (Math.min(gWidth, gHeight) / 2) - 10,
                // Create the svg element and put it in the right place
                svg = d3.select('svg').append('g').attr('transform', `translate(${gWidth / 2},${gHeight / 2})`),
                // Controls how far around the sunburst goes
                x = d3.scaleLinear().range([0, 2 * Math.PI]),
                // Controls the relative size of each layer
                y = d3.scaleLinear().range([0, radius]),
                partition = d3.partition(),
                // Controls the arc geometry for each node
                arc = d3.arc()
                    .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
                    .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
                    .innerRadius(d => Math.max(0, y(d.y0)))
                    .outerRadius(d => Math.max(0, y(d.y1))),
                // Line through the middle of each arc to attach text to, flip angle half way to get text orientation right
                middleArc = d3.arc()
                    .startAngle(d => ((x(d.x0) + x(d.x1)) / 2 > Math.PI / 2 && (x(d.x0) + x(d.x1)) / 2 < Math.PI * 3 / 2)
                        ? Math.max(0, Math.min(2 * Math.PI, x(d.x1)))
                        : Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
                    .endAngle(d => ((x(d.x0) + x(d.x1)) / 2 > Math.PI / 2 && (x(d.x0) + x(d.x1)) / 2 < Math.PI * 3 / 2)
                        ? Math.max(0, Math.min(2 * Math.PI, x(d.x0)))
                        : Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
                    .innerRadius(d => Math.max(0, (y(d.y0) + y(d.y1)) / 2))
                    .outerRadius(d => Math.max(0, (y(d.y0) + y(d.y1)) / 2)),
                // Controls to color scaling of the first level nodes
                hueDXScale = d3.scaleLinear()
                    .domain([0, 1])
                    .range([0, 360]),
                // Create a hierarchical layout from the data
                rootData = d3.hierarchy(props.data);
            const firstBuild = true;
            const node = rootData;
            // Add up the values of all children to set sizes of nodes
            rootData.sum(d => d.size);
            self.update(rootData, firstBuild, svg, partition, hueDXScale, x, y, radius, arc, middleArc, node, self); // GO!
        }
    }

    render() {
        return (
            <div id={this.props.keyId} className={styles.skilltree}>
                <div className={styles.skilltreeMask}>Skills</div>
                <div className={styles.sunburstViz}>
                    <svg style={{ width: parseInt(this.props.width, 10) || 480, height: parseInt(this.props.height, 10) || 400 }}
                         id={`${this.props.keyId}-svg`}
                         onMouseMove={this._onMouseMove.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Sunburst;