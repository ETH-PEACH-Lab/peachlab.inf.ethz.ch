import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const InteractiveChart = () => {
  const svgRef = useRef(null);

  const width = 600;
  const height = 100;
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = d3.scaleLinear().domain([0, 1]).range([0, innerWidth]);
  const usabilityY = d3.scaleLinear().domain([0, 1]).range([innerHeight, 10]);
  const effortY = d3.scaleLinear().domain([0, 1]).range([10, innerHeight]);

  const usabilityColor = '#bb80ea';
  const effortColor = '#F79646';

  const curve = d3.range(0, 1.01, 0.01);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const g = svg.select('g');
    g.selectAll('*').remove();

    // Curves
    const lineUsability = d3.line()
      .x(d => x(d))
      .y(d => usabilityY(d3.easeCubicInOut(d)));

    const lineEffort = d3.line()
      .x(d => x(d))
      .y(d => effortY(d3.easeCubicInOut(d)));

    g.append('path')
      .datum(curve)
      .attr('fill', 'none')
      .attr('stroke', usabilityColor)
      .attr('stroke-width', 2)
      .attr('d', lineUsability);

    g.append('path')
      .datum(curve)
      .attr('fill', 'none')
      .attr('stroke', effortColor)
      .attr('stroke-width', 2)
      .attr('d', lineEffort);

    // Dots
    g.append('circle').attr('r', 4).attr('fill', usabilityColor).attr('id', 'dot-usability');
    g.append('circle').attr('r', 4).attr('fill', effortColor).attr('id', 'dot-effort');

    // Labels
    g.append('text')
      .text('Usability')
      .attr('x', x(0.05))
      .attr('y', usabilityY(d3.easeCubicInOut(0.05)) - 10)
      .attr('fill', usabilityColor)
      .style('font-size', '16px')

    g.append('text')
      .text('Cognitive Effort')
      .attr('x', x(0.75))
      .attr('y', effortY(d3.easeCubicInOut(0.75)) - 10)
        .attr('fill', effortColor)
        .style('font-size', '16px')
      }, [curve, effortY, usabilityY, x]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if(svgRef.current === null) return;
      const svgLeft = svgRef.current.getBoundingClientRect().left;
      const t = Math.max(0, Math.min(1, (event.clientX - svgLeft) / innerWidth));
      const ux = x(t);
      const uy = usabilityY(d3.easeCubicInOut(t));
      const ey = effortY(d3.easeCubicInOut(t));

      const g = d3.select(svgRef.current).select('g');
      g.select('#dot-usability').attr('cx', ux).attr('cy', uy);
      g.select('#dot-effort').attr('cx', ux).attr('cy', ey);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [effortY, innerWidth, usabilityY, x]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`} />
    </svg>
  );
};

export default InteractiveChart;
