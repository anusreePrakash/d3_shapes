const SHAPE_WIDTH = 1000;
const SHAPE_HEIGHT = 500;

var display = function () {
  var svg = d3.select('.container').append('svg')
    .attr('height',800)
    .attr('width',1000)

  drawLine(svg);
  drawCircle(svg);
  drawRectangle(svg);
  drawTriangle(svg);

}

var drawLine = function (svg) {
  svg.append('line')
    .attr('x1',20)
    .attr('y1',100)
    .attr('x2',100)
    .attr('y2',20)
    .attr('stroke-width','1px')
    .attr('stroke','black')
}

var drawCircle = function (svg) {
  svg.append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r', 30)
    .style('fill','none')
    .attr('stroke-width','1px')
    .attr('stroke','black')
}

var drawRectangle = function (svg) {
  svg.append('rect')
    .attr('x',400)
    .attr('y',50)
    .attr('rx',20)
    .attr('ry',20)
    .attr('width', 100)
    .attr('height',100)
    .style('fill','none')
    .attr('stroke-width','1px')
    .attr('stroke','black')
}

var drawTriangle = function (svg) {
  svg.append('polygon')
    .attr('points','350 100,400 50,450 100')
    .attr('stroke-width','1px')
    .attr('stroke','black')
    .style('fill','none')
  }

window.onload = display;
