/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { fetchOceMinimalMain, fetchPage } from '../scripts/services';


/**
 * Gets all the data required for the Home Page.
 */
@Injectable()
export class PageDataResolver implements Resolve<any> {
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState,
  ) {}

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
   resolve(route: ActivatedRouteSnapshot) {
    const pageSlug = route.paramMap.get('slug');
    const APP_KEY = makeStateKey('APPDATA');
    // const DATA_KEY = makeStateKey(`PAGE${pageSlug}`);
    if (this.transferState.hasKey(APP_KEY)) {
      // client is hydrating, server rendered content has
      // already added the data to the transfer state
      const data = this.transferState.get(APP_KEY, null);
      this.transferState.remove(APP_KEY);
      return data;
    }
    // server side rendering or client side rendering on client side navigation,
    // there is no transfer state therefore get the data from the OCE server
    return fetchOceMinimalMain()
      .then((appData) => {
        fetchPage(pageSlug).then((pageData) => {
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(APP_KEY, appData);
            // this.transferState.set(DATA_KEY, pageData);
          }
          console.log('IN PAGE DATA RESOLVER');
          console.log(appData);
          // return {appData, pageData};
          return appData;
        });
      });
  }
}
