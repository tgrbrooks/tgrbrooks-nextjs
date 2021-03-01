import * as d3 from 'd3v4'

// Opening animation
export function arcTweenData(d, i, node, x, arc) {
    const oi = d3.interpolate({ x0: (d.x0s ? d.x0s : 0), x1: (d.x1s ? d.x1s : 0) }, d);
    function tween(t) {
        const b = oi(t);
        return arc(b);
    }
    if (i === 0) {
        const xd = d3.interpolate(x.domain(), [node.x0, node.x1]);
        return function (t) {
            x.domain(xd(t));
            return tween(t);
        };
    } else {
        return tween;
    }
}

// Control animation behaviour when clicking on node
export function arcTweenZoom(d, x, y, radius, arc) {
    const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
        yd = d3.interpolate(y.domain(), [d.y0, 1]),
        yr = d3.interpolate(y.range(), [d.y0 ? 40 : 0, radius]);
    return function (data, i) {
        return i
            ? () => arc(data)
            : (t) => { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(data); };
    };
}

// Set name of tooltip
export function formatNameTooltip(d) {
  let skillMap = new Map();
  skillMap.set(1, 'Basic');
  skillMap.set(2, 'Intermediate');
  skillMap.set(3, 'Advanced');
  skillMap.set(4, 'Expert');
  const name = d.data.name;
  return  (d.data.base ? `<b>${name}</b>` : `<b>${name}</b><br> Level: ${skillMap.get(d.data.size)}`);
}

// Check if label will fit in arc
export function textFits(d, x, y) {
  let CHAR_PX = 6
  const deltaAngle = x(d.x1) - x(d.x0);
  const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
  const perimeter = r * deltaAngle;
  const textLength = d.data.name.toString().length * CHAR_PX
  return textLength < perimeter;
}