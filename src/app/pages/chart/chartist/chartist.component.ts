import { Component, OnInit } from '@angular/core';

import {
  smilAnimationChart, simpleLineChart, lineScatter, areaLineChart, lineSmoothingChart, overlappingBarChart, stackBarChart, horizontalBarChart,
  donutAnimateChart, simplePieChart
} from './data';

import { ChartType } from './chartist.model';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})

/**
 * Chartist component - handling the chartist chart with navbar and content
 */
export class ChartistComponent implements OnInit {

  // bread crumb data
  breadCrumbItems: Array<{}>;

  // Advanced Smil Animations
  smilAnimationChart: ChartType;
  // Simple line chart
  simpleLineChart: ChartType;
  // Line Scatter Diagram
  lineScatter: ChartType;
  // Line chart with area
  areaLineChart: ChartType;
  // Line Interpolation / Smoothing
  lineSmoothingChart: ChartType;
  // Overlapping bars on mobile
  overlappingBarChart: ChartType;
  // Stacked bar chart
  stackBarChart: ChartType;
  // Horizontal bar chart
  horizontalBarChart: ChartType;
  // Animating a Donut with Svg.animate
  donutAnimateChart: ChartType;
  // simple pie chart
  simplePieChart: ChartType;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Charts', path: '/' }, { label: 'Chartist', path: '/', active: true }];
    /**
     * getches data
     */
    this._fetchData();
  }

  private _fetchData() {

    // Advanced Smil Animations data
    this.smilAnimationChart = smilAnimationChart;
    // Simple line chart data
    this.simpleLineChart = simpleLineChart;
    // Line Scatter Diagram data
    this.lineScatter = lineScatter;
    // Line chart with area chart data
    this.areaLineChart = areaLineChart;
    // Line Interpolation / Smoothing chart data
    this.lineSmoothingChart = lineSmoothingChart;
    // Overlapping bars on mobile
    this.overlappingBarChart = overlappingBarChart;
    // Stacked bar chart data
    this.stackBarChart = stackBarChart;
    // Horizontal bar chart
    this.horizontalBarChart = horizontalBarChart;
    // Animating a Donut chart data
    this.donutAnimateChart = donutAnimateChart;
    // simple pie chart data
    this.simplePieChart = simplePieChart;
  }
}
