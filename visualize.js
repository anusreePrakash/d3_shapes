const SHAPE_WIDTH = 100;
const SHAPE_HEIGHT = 100;

var display = function () {
  var svg = d3.select('.container').append('svg')
    .attr('height',800)
    .attr('width',1000)
  drawLine(svg,1);
  drawCircle(svg,2);
  drawRectangle(svg,3);
  drawTriangle(svg,4);

}


var drawLine = function (svg) {
  svg.append('line')
    .attr('x1',0)
    .attr('y1',100)
    .attr('x2',100)
    .attr('y2',0)
    .attr('stroke-width','3px')
    .attr('stroke','gray')
}

var drawCircle = function (svg) {
  svg.append('circle')
    .attr('cx',200)
    .attr('cy',50)
    .attr('r', 50)
    .style('fill','none')
    .attr('stroke-width','3px')
    .attr('stroke','red')
}

var drawRectangle = function (svg) {
  svg.append('rect')
    .attr('x',300)
    .attr('y',0)
    .attr('rx',20)
    .attr('ry',20)
    .attr('width', 100)
    .attr('height',100)
    .style('fill','none')
    .attr('stroke-width','3px')
    .attr('stroke','steelblue')
}

var drawTriangle = function (svg) {
  svg.append('polygon')
    .attr('points','450,100  550,100  500,0')
    .attr('stroke-width','3px')
    .attr('stroke','green')
    .style('fill','none')
  }

window.onload = display;
