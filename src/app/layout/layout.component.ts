/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageRenditions } from '../../interfaces/interfaces';

/**
 * Component for main layout for any page in the application.
 *
 * This component receives all the data which it is to display.
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  headerRenditionURLs: ImageRenditions;

  footerRenditionURLs: ImageRenditions;

  constructor(private route: ActivatedRoute) {}

  /*
   * Get the data from the route, the data was obtained
   * using a resolver before this component was created
   */
  ngOnInit() {
    const { data } = this.route.snapshot;
    const { appData } = data;
    this.headerRenditionURLs = appData.headerRenditionURLs;
    this.footerRenditionURLs = appData.footerRenditionURLs;
  }
}
