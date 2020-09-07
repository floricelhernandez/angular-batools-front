import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

/**
 * Carousel component - handling the carousel with navbar and content
 */
export class CarouselComponent implements OnInit {

  // bread crumb item
  breadCrumbItems: Array<{}>;
  showNavigationIndicators: any;
  showNavigationArrows: any;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Admin UI', path: '/' }, { label: 'Carousel', path: '/', active: true }];

  }

}
