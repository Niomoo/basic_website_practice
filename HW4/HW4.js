const w = 600, h = 400, padding = 40;

let dataset = [];
let dataset_cos = [];

for (let i = 0; i < (25 * Math.PI); i++) {
    let sinX = i * 0.1;
    let sinY = Math.sin(sinX);
    let cosX = i * 0.1;
    let cosY = Math.cos(cosX);
    dataset.push([sinX, sinY]);
    dataset_cos.push([cosX, cosY]);
}
console.table(dataset);

let xScale = d3.scaleLinear().domain([0, 3 * Math.PI]).range([padding, w - padding]);
let yScale = d3.scaleLinear().domain([-2, 2]).range([h - padding, padding]);

let svg = d3.select('.chart').append('svg').attr('width', w).attr('height', h);

let wave = d3.line()
    .x(function(d) { return xScale(d[0]);})
    .y(function(d){ return yScale(d[1]);});

svg.append('path')
    .attr('d', wave(dataset))
    .attr('fill', 'none')
    .attr('stroke-width', '1.5px')
    .attr('stroke', 'rgb(82, 78, 181)')

svg.append('path')
    .attr('d', wave(dataset_cos))
    .attr('fill', 'none')
    .attr('stroke-width', '1.5px')
    .attr('stroke', 'rgb(105, 151, 175)')

// svg.selectAll('circle').data(dataset).enter()
//     .append('circle')
//     .attr('cx', function(d){return xScale(d[0])})
//     .attr('cy', function(d){return yScale(d[1])})
//     .attr('r', '2px')
//     .attr('fill', 'black');

// svg.selectAll('text').data(dataset).enter() 
//     .append('text')
//     .text(function(d){ return d[0] + ',' + d[1]})
//     .attr('x', function(d){return xScale(d[0])})
//     .attr('y', function(d){return yScale(d[1])})
//     .attr('fill', 'red')
//     .attr('font-size', '10px');

let xAxis = d3.axisBottom(xScale)
    .ticks(6)
    .tickValues([0, Math.PI/2, Math.PI, 3*Math.PI/2, 2* Math.PI, 5*Math.PI/2, 3*Math.PI])
    .tickFormat(function(d){
        switch (d) {
            case 0: return '0'
            case Math.PI/2: return 'π/2'
            case Math.PI: return 'π'
            case 3 * Math.PI/2: return '3π/2'
            case 2 * Math.PI: return '2π'
            case 5 * Math.PI/2: return '5π/2'
            case 3 * Math.PI: return 
            default: return
        }
    })
let yAxis = d3.axisLeft(yScale).ticks(5)
let yAxisR = d3.axisRight(yScale).ticks(5)
let yGrid = d3.axisRight(yScale)
    .ticks(5)
    .tickFormat("")
    .tickSize((w - 2 * padding),0) //左右內縮

svg.append('g').attr('class', 'grid')
   .attr('transform', 'translate('+ (padding) + ',0)')
   .call(yGrid)

svg.append('g').attr('class', 'axis')
   .attr('transform', 'translate(0, '+ (h - padding) + ')')
   .call(xAxis)

svg.append('g').attr('class', 'axis')
   .attr('transform', 'translate(' + (w - padding) + ',0)')
   .call(yAxisR)

svg.append('g').attr('class', 'axis')
   .attr('transform', 'translate(' + (padding) + ',0)')
   .call(yAxis)

svg.append('text')
   .attr('text-anchor', 'end')
   .attr('x', w/2)
   .attr('y', h)
   .text('X')
   .attr('font-size', '16px')
   .attr('fill', 'rgb(90, 90, 90');

svg.append('text')
   .attr('text-anchor', 'end')
   .attr('x', -(h/2))
   .attr('dy', '1em')
   .attr('transform', 'rotate(-90)')
   .text('Y')
   .attr('font-size', '16px')
   .attr('fill', 'rgb(90, 90, 90');

let legend = d3.select('.legend').append('svg').attr('width', 200).attr('height', 400);

legend.append('rect')
    .attr('x', 20)
    .attr('y', 200)
    .attr('width', 150)
    .attr('height', 80)
    .attr('fill', 'none')
    .attr('stroke', 'rgb(90, 90, 90')
    .attr('stroke-width', '1px');

legend.append('line')
    .attr('x1', 40)
    .attr('y1', 225)
    .attr('x2', 80)
    .attr('y2', 225)
    .attr('stroke', 'rgb(82, 78, 181)')
    .attr('stroke-width','1.5px')

legend.append('line')
    .attr('x1', 40)
    .attr('y1', 255)
    .attr('x2', 80)
    .attr('y2', 255)
    .attr('stroke', 'rgb(105, 151, 175)')
    .attr('stroke-width','1.5px')

legend.append('text')
    .attr('x', 90)
    .attr('y', 230)
    .text('Sine')
    .attr('font-size', '14px')
    .attr('fill', 'rgb(90, 90, 90');

legend.append('text')
    .attr('x', 90)
    .attr('y', 260)
    .text('Cosine')
    .attr('font-size', '14px')
    .attr('fill', 'rgb(90, 90, 90');