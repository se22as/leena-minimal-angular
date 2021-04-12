/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageRenditions } from 'src/interfaces/interfaces';

declare let process: any;

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
  headerLogoURL: ImageRenditions;

  footerLogoURL: ImageRenditions;

  constructor(private route: ActivatedRoute) {}

  /*
   * Get the data from the route, the data was obtained
   * using a resolver before this component was created
   */
  ngOnInit() {
    const { data } = this.route.snapshot;
    this.headerLogoURL = data.urls[process.env.LOGO_FILE_NAME];
    this.footerLogoURL = data.urls[process.env.FOOTER_LOGO_FILE_NAME];
  }
}
