// var svg = document.getElementById("svg");
// d3.select('body')
//   .appendChild('svg')
//   .attr({
//       'width': 600,
//       'height': 400,
//   });

// d3.select('d3')
//   .appendChild('circle')
//   .attr({
//       'cx': 50,
//       'cy': 50,
//       'r': 50,
//       'fill': 'none',
//       'stroke': '#c00',
//       'stroke-width': '2px',
//   });

// var svg = document.getElementById('sine_wave');
// var origin = { //origin of axes
//     x: 120,
//     y: 180
// };
// var amplitude = 1; // wave amplitude
// var rarity = 1; // point spacing
// var freq = 0.1; // angular frequency
// var phase = 0; // phase angle

// for (var i = -100; i < 1000; i++) {
//     var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

//     line.setAttribute('x1', (i - 1) * rarity + origin.x);
//     line.setAttribute('y1', Math.sin(freq*(i - 1 + phase)) * amplitude + origin.y);

//     line.setAttribute('x2', i * rarity + origin.x);
//     line.setAttribute('y2', Math.sin(freq*(i + phase)) * amplitude + origin.y);

//     line.setAttribute('style', "stroke:black;stroke-width:1");

//     svg.appendChild(line);
// }