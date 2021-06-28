// var svg = document.getElementById("svg");
d3.select('body')
  .appendChild('svg')
  .attr({
      'width': 600,
      'height': 400,
  });

d3.select('d3')
  .appendChild('circle')
  .attr({
      'cx': 50,
      'cy': 50,
      'r': 50,
      'fill': 'none',
      'stroke': '#c00',
      'stroke-width': '2px',
  });