/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import getDeliveryClient from '../scripts/server-config-utils';
import fetchImageURLs from '../scripts/services';
import appConfig from '../config/data.js';

/**
 * Gets all the data required for the Home Page.
 */
@Injectable()
export class HomePageDataResolver implements Resolve<any> {
  constructor() {}

  resolve() {
    // get the client to connect to CEC
    const deliveryClient = getDeliveryClient();

    // get the URLs for the images to display in this component
    return fetchImageURLs(deliveryClient, [appConfig.logo, appConfig.footerLogo, appConfig.homePage])
      .then((urls) => urls);
  }
}
