const SHAPE_WIDTH = 100;
const SHAPE_HEIGHT = 100;
const MARGIN = 50;
const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 1000;
var initial = 0
var yScale = 5;

var drawLine = function (group,initial) {
  console.log(initial , "lin");
  group.append('line')
    .attr('x1',initial)
    .attr('y1', SHAPE_HEIGHT)
    .attr('x2',initial + SHAPE_WIDTH)
    .attr('y2',yScale)
    .attr('stroke-width','3px')
    .attr('stroke','gray')

}

var drawCircle = function (group,initial) {
  console.log(initial);

  group.append('circle')
    .attr('cx',(initial+(SHAPE_WIDTH/2)))
    .attr('cy',(yScale + (SHAPE_HEIGHT/2)))
    .attr('r', 50)
    .style('fill','none')
    .attr('stroke-width','3px')
    .attr('stroke','red')
}

var drawRectangle = function (group,initial) {
    console.log(initial , "rec");
  group.append('rect')
    .attr('x',initial)
    .attr('y',yScale)
    .attr('rx',10)
    .attr('ry',10)
    .attr('width', SHAPE_WIDTH)
    .attr('height',SHAPE_HEIGHT)
    .style('fill','none')
    .attr('stroke-width','3px')
    .attr('stroke','steelblue')
}

var drawTriangle = function (group,initial) {
  var firstAxis = (initial+','+SHAPE_HEIGHT);
  var thirdAxis = (initial+SHAPE_WIDTH+','+SHAPE_HEIGHT);
  var secondAxis = (initial+(SHAPE_WIDTH/2)+','+yScale);
  group.append('polygon')
    .attr('points',firstAxis+' '+thirdAxis+' '+secondAxis)
    .attr('stroke-width','3px')
    .attr('stroke','green')
    .style('fill','none')
  }



var shapes = [drawLine, drawCircle, drawRectangle, drawTriangle,drawLine, drawCircle, drawRectangle];

var display = function () {
  var svg = d3.select('.container').append('svg')
    .attr('height',CONTAINER_HEIGHT)
    .attr('width',CONTAINER_WIDTH)

  svg.selectAll('g')
    .data(shapes)
    .enter()
    .append('g')
    .each(function(shape){
      shape(d3.select(this),initial);
      initial = initial + SHAPE_WIDTH + (MARGIN);
      if(initial > CONTAINER_WIDTH)
        initial = 0;

    });
}


window.onload = display;
