import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic component - handling the basic table with navbar and content
 */
export class BasicComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Tables', path: '/' }, { label: 'Basic Tables', path: '/', active: true }];
  }

}
