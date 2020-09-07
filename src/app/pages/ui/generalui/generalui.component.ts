import { Component, OnInit } from '@angular/core';

import { UiColor } from './general.model';

import { uiColor } from './data';

@Component({
  selector: 'app-generalui',
  templateUrl: './generalui.component.html',
  styleUrls: ['./generalui.component.scss']
})

/**
 * general-Ui component - handling the general-ui with navbar and content
 */
export class GeneraluiComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Color data
  uiColor: UiColor[];
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'UI Elements', path: '/' }, { label: 'General UI', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the UI value
   */
  private _fetchData() {
    // Fetches the Data
    this.uiColor = uiColor;
  }
}
