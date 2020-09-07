import { Component, OnInit } from '@angular/core';
import { Ribbon } from './ribbons.model';
import { ribbonsData } from './data';

@Component({
  selector: 'app-ribbons',
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.scss']
})

/**
 * Ribbon component - handling the Ribbon with navbar and content
 */
export class RibbonsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Ribbon data
  ribbonsData: Ribbon[];
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'UI Elements', path: '/' }, { label: 'Ribbons', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the ribbon value
   */
  private _fetchData() {
    // Ribbon data fetch
    this.ribbonsData = ribbonsData;
  }
}
