/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import getDeliveryClient from '../../scripts/server-config-utils';
import fetchImageURLs from '../../scripts/services';
import appConfig from '../../config/data.js';
import { ImageUrls } from '../../interfaces/interfaces';

/**
 * Component for the Contact Us page.
 */
@Component({
  selector: 'app-contact-us',
  templateUrl: '../contact-us-page/contact-us-page.component.html'
})
export class ContactUsPageComponent implements OnInit {

  /*
   * Set the title in the constructor.
   */
  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact Us');
  }

  // variables whoses values are set in ngOnInit from data returned
  // from the server and are referenced from the html file
  headerLogoURL: string;
  footerLogoURL: string;
  imageURL: string;

  /*
   * Get the data from the server and populate above variables
   */
  ngOnInit() {
    // get the client to connect to CEC
    const deliveryClient = getDeliveryClient();

    // get the URLs for the image to display in this component
    fetchImageURLs(deliveryClient, [appConfig.contactUs])
    .then((urls: ImageUrls) => {
      this.imageURL = urls[appConfig.contactUs];
    })
    .catch(error => {
      console.error(error);
    });
  }

}
