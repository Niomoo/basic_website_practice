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

const w = 600, h = 400, padding = 30, barMargin = 10;

let dataset = [];

for(let i = 0; i < 5; i++) {
    let newNum = 5 + Math.round(Math.random() * 5);
    dataset.push(newNum);
}
console.log(dataset);

let yMax = d3.max(dataset, function(d){return d});
let yMin = d3.min(dataset, function(d){return d});

let xScale = d3.scaleLinear().domain([0, dataset.length]).range([padding, w - padding]);
let yScale = d3.scaleLinear().domain([yMin, yMax]).range([padding, h - padding]);

let barWidth = (w - padding * 2) / dataset.length - barMargin;

let svg = d3.select('.demo')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

svg.selectAll('rect').data(dataset).enter()
    .append('rect')
    .attr('x', function(d, i){return xScale(i)})
    .attr('y', function(d){return h - yScale(d)})
    .attr('width', barWidth)
    .attr('height', function(d){return yScale(d)})
    .attr('fill', function(d){
            var color = 0.2 + d * 0.002;
            return  d3.hsl(200 ,color, color)
        });

svg.selectAll('text').data(dataset).enter() 
    .append('text')
    .text(function(d){ return d})
    .attr('x', function(d, i){return xScale(i) + barWidth/2})
    .attr('y', function(d){return h - yScale(d) + 15})
    .attr('fill', 'white')
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px');
