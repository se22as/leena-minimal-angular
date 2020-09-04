/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Resolve } from '@angular/router';

import getDeliveryClient from '../scripts/server-config-utils';
import fetchImageURLs from '../scripts/services';
import { getHeaderImageName, getFooterImageName, getContactUsImageName } from '../scripts/utils';

/**
 * Gets all the data required for the Contact Us Page.
 */
@Injectable()
export class ContactUsPageDataResolver implements Resolve<any> {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState) {}

  /**
   * Gets all the data required to render the current route.
   *
   * If the transfer state already has the data then the data is returned from the transfer state.
   * Otherwise a call to OCE is made to get the data.
   *
   * The transfer state will already have data when hydrating the client when content was rendered
   * on the server.  The transfer state will not already have the data when rendering server side
   * or rendering client side after a client side navigation.
   *
   * @param route the current route
   */
  resolve() {
    const DATA_KEY = makeStateKey('CONTACTUS');
    if (this.transferState.hasKey(DATA_KEY)) {
      // client is hydrating, server rendered content has
      // already added the data to the transfer state
      const urls = this.transferState.get(DATA_KEY, null);
      this.transferState.remove(DATA_KEY);
      return urls;
    } else {
      // server side rendering or client side rendering on client side navigation,
      // there is no transfer state therefore get the data from the OCE server
      const deliveryClient = getDeliveryClient();
      return fetchImageURLs(
        deliveryClient,
        [
          getHeaderImageName(),
          getFooterImageName(),
          getContactUsImageName()
        ]
      ).then((urls) => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(DATA_KEY, urls);
        }
        return urls;
      });
    }
  }
}
