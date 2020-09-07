import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

/**
 * progress component - handling the progress with navbar and content
 */
export class ProgressComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'UI Elements', path: '/' }, { label: 'Progress', path: '/', active: true }];
  }

}
