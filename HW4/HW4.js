const w = 600, h = 400, padding = 30;

let dataset = [];

let xScale = d3.scaleLinear().domain([0, 5*Math.PI/2]).range([padding, w - padding]);
let yScale = d3.scaleLinear().domain([-2, 2]).range([h - padding, padding]);

let svg = d3.select('.demo').append('svg').attr('width', w).attr('height', h);

svg.selectAll('circle').data(dataset).enter()
    .append('circle')
    .attr('cx', function(d){return xScale(d[0])})
    .attr('cy', function(d){return yScale(d[1])})
    .attr('r', '2px')
    .attr('fill', 'black');

svg.selectAll('text').data(dataset).enter() 
    .append('text')
    .text(function(d){ return d[0] + ',' + d[1]})
    .attr('x', function(d){return xScale(d[0])})
    .attr('y', function(d){return yScale(d[1])})
    .attr('fill', 'red')
    .attr('font-size', '10px');

let xAxis = d3.axisBottom(xScale)
    .ticks(6)
    .tickValues([0, Math.PI/2, Math.PI, 3*Math.PI/2, 2* Math.PI, 5*Math.PI/2])
    .tickFormat(function(d){
        switch (d) {
            case 0: return 0
            case Math.PI/2: return 'π/2'
            case Math.PI: return 'π'
            case 3 * Math.PI/2: return '3π/2'
            case 2 * Math.PI: return '2π'
            case 5 * Math.PI: return '5π/2'
            default: return
        }
    })
let yAxis = d3.axisLeft(yScale).ticks(5)
let yAxisR = d3.axisRight(yScale).ticks(5)
let yGrid = d3.axisRight(yScale)
    .ticks(5)
    .tickFormat("")
    .tickSize((w - 2*padding),0) //左右內縮

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