// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3'); 

// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')


// Make circle change color on click
rect.addEventListener('click',(circle.attr("fill", '#'+Math.floor(Math.random()*16777215).toString(16))))
if (rect.getClickCount() == 1) {
  circle.attr("fill", '#'+Math.floor(Math.random()*16777215).toString(16))
}


// Make rect & circle change color on double click
circle.addEventListener('click',(rect.attr("fill", '#'+Math.floor(Math.random()*16777215).toString(16))))
if (rect.getClickCount() == 2) {
  circle.attr("fill", '#'+Math.floor(Math.random()*16777215).toString(16))
  rect.attr("fill", '#'+Math.floor(Math.random()*16777215).toString(16))
}

// Make either shape have a thicker border when mouse hovers over
circle.on('mouseover', function() {
    document.getElementById("circle").style.borderWidth = "thick";
});
rect.on('mouseover', function() {
    document.getElementById("rect").style.borderWidth = "thick";
});
/*
// Add drag to both shapes
.call(d3.drag()
  .on('start', dragStart)
  .on('drag', dragRect)
  .on('end', drageEnd)
);

function dragStart(event, d){
  event.stopPropagation();
}

function dragRect(event, d){
  var xCoor = event.x;
  var yCoor = event.y;
  d3.select(this)
  .attr("x", xCoor)
  .attr("y", yCoor)
  this.parentNode.appendChild(this)
}

function dragCircle(event, d){
  var xCoordinates = event.x;
  var yCoordinates = event.y;
  d3.select(this)
    .attr("cx", xCoordinates)
    .attr("cy", yCoordinates);
  this.parentNode.appendChild(this);
}

function dragEnd(event, d){
}*/
