import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { events } from '../data';

const Timeline = ({ onEventClick }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 800;
        const height = 150; 
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };

        // Очищаем SVG перед созданием новой шкалы
        svg.selectAll("*").remove();

        // Создаем шкалу для оси X
        const x = d3.scaleLinear()
            .domain([1980, 2025])
            .range([margin.left, width - margin.right]);

        // Настраиваем ось X с форматированием года без запятых
        const xAxis = d3.axisBottom(x)
            .ticks(10)
            .tickFormat(d3.format("d")); // Форматируем год как целое число

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(xAxis);

        // Добавляем точки (события) на шкалу
        svg.selectAll(".event")
            .data(events)
            .enter()
            .append("circle")
            .attr("class", "event")
            .attr("cx", d => x(d.year))
            .attr("cy", height / 2)
            .attr("r", 8) // Увеличим радиус точек
            .attr("fill", "#007BFF")
            .on("click", (event, d) => onEventClick(d));

        // Добавляем подписи к точкам
        svg.selectAll(".label")
            .data(events)
            .enter()
            .append("text")
            .attr("class", "label")
            .attr("x", d => x(d.year))
            .attr("y", (d, i) => (i % 2 === 0 ? height / 2 - 20 : height / 2 + 20)) // Чередуем подписи
            .text(d => d.title)
            .attr("text-anchor", "middle")
            .attr("fill", "#333")
            .attr("font-size", "12px")
            .attr("font-weight", "bold");
    }, [onEventClick]);

    return <svg ref={svgRef} width={800} height={150}></svg>;
};

export default Timeline;