/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare let process: any;

/**
 * Component for the Contact Us page.
 *
 * The ContactUsPageDataResolver gets all the data before this component is created.
 */
@Component({
  selector: 'app-contact-us',
  templateUrl: '../contact-us-page/contact-us-page.component.html'
})
export class ContactUsPageComponent implements OnInit {
  imageURL: string;

  /*
   * Set the title in the constructor.
   */
  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Contact Us');
  }

  /*
   * Get the data from the route, the data was obtained
   * using a resolver before this component was created
   */
  ngOnInit() {
    const data = this.route.snapshot.data;
    this.imageURL = data.urls[process.env.CONTACTUS_IMAGE_FILE_NAME];
  }

}
