import { Component, OnInit } from '@angular/core';

import { Gallery } from './gallery.model';
import { galleryData } from './data';

import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

/**
 * Gallery component - handling the gallery with navbar and content
 */
export class GalleryComponent implements OnInit {

  // bread crumb data
  breadCrumbItems: Array<{}>;

  // Gallery data
  galleryData: Gallery[];

  // Filter data
  webdesign: Gallery[];
  graphicdesign: Gallery[];
  illustrator: Gallery[];
  photography: Gallery[];

  // tslint:disable-next-line: variable-name
  constructor(private _lightbox: Lightbox) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Extras', path: '/' }, { label: 'Gallery', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * Open the lightbox
   * @param index fetch the index and open lightbox
   */
  open(index: number) {
    // open lightbox
    this._lightbox.open(this.galleryData, index);
  }

  /**
   * fetches the gallery data
   */
  private _fetchData() {
    this.galleryData = galleryData;

    // gallery values
    this.webdesign = galleryData.filter(t => t.id === 'webdesign');
    this.graphicdesign = galleryData.filter(t => t.id === 'graphicdesign');
    this.illustrator = galleryData.filter(t => t.id === 'illustrator');
    this.photography = galleryData.filter(t => t.id === 'photography');
  }
}
