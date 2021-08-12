/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MinimalMain, ImageRenditions } from '../../interfaces/interfaces';


/**
 * Component for the Home page.
 *
 * The HomePageDataResolver gets all the data before this component is created.
 */
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  appData: MinimalMain;

  headerRenditionURLs: ImageRenditions;

  footerRenditionURLs: ImageRenditions;

  /*
   * Set the title in the constructor.
   */
  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  /*
   * Get the data from the route, the data was obtained
   * using a resolver before this component was created
   */
  ngOnInit() {
    console.log('in page component %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    const { data } = this.route.snapshot;
    this.appData = data.appData;
    console.log(this.appData);
    this.headerRenditionURLs = this.appData.headerRenditionURLs;
    this.footerRenditionURLs = this.appData.footerRenditionURLs;
  }
}
