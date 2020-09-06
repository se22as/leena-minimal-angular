/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare let process: any;

/**
 * Component for the Home page.
 *
 * The HomePageDataResolver gets all the data before this component is created.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  imageURL: string;

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
    const data = this.route.snapshot.data;
    this.imageURL = data.urls[process.env.HOME_IMAGE_FILE_NAME];
  }

}
