import { Component, OnInit } from '@angular/core';

import { pricingData } from './data';

import { Pricing } from './pricing.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

/**
 * Pricing component - handling the pricing with navbar and content
 */
export class PricingComponent implements OnInit {

  // bread crumb data
  breadCrumbItems: Array<{}>;

  // Pricing data
  pricingData: Pricing[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Extras', path: '/' }, { label: 'Pricing', path: '/', active: true }];

    /**
     * fetches data
     */
    this. _fetchData();
  }

  /**
   * fetches the pricing value
   */
  private _fetchData() {
    // Pricing Data
    this.pricingData = pricingData;
  }
}
