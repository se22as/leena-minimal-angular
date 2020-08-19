/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import appConfig from '../../config/data.js';

/**
 * Component for the Home page.
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
    this.imageURL = data.urls[appConfig.homePage];
  }

}
