import { Component, OnInit } from '@angular/core';

import { Slider } from './rangeslider.model';

import { sliderData } from './data';

@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.scss']
})

/**
 * Range slider component - handling the range-slider with navbar and content
 */
export class RangesliderComponent implements OnInit {

  // bread crumb data
  breadCrumbItems: Array<{}>;

  // slider data
  sliderData: Slider[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Admin UI', path: '/' }, { label: 'Range Slider', path: '/', active: true }];
    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the slider value
   */
  private _fetchData() {
    this.sliderData = sliderData;
  }

}
