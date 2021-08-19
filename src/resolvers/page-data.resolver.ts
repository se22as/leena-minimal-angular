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
 * Gets all the data required for a page defined by a slug.
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
   * Otherwise a call to Oracle Content Management is made to get the data.
   *
   * The transfer state will already have data when hydrating the client when content was rendered
   * on the server.  The transfer state will not already have the data when rendering server side
   * or rendering client side after a client side navigation.
   *
   * @param route the current route
   */
  resolve(route: ActivatedRouteSnapshot) {
    let pageSlug = route.paramMap.get('slug');

    // two pieces of information is obtained, the main minimal content item (APPDATA)
    // and the data for the specific page identified by the slug (PAGEDATA)
    // these two pieces of data are serialized out seperately on the transfer state
    // but this resolver returns them in a single object
    const APP_KEY = makeStateKey('APPDATA');
    const PAGE_KEY = makeStateKey('PAGEDATA');
    if (this.transferState.hasKey(APP_KEY)) {
      // client is hydrating, server rendered content has
      // already added the data to the transfer state
      const appData = this.transferState.get(APP_KEY, null);
      const pageData = this.transferState.get(PAGE_KEY, null);
      this.transferState.remove(APP_KEY);
      this.transferState.remove(PAGE_KEY);
      // return the two pieces of data in a single object
      const fullData = { appData, pageData };
      return fullData;
    }

    // server side rendering or client side rendering on client side navigation,
    // there is no transfer state therefore get the data from the OCE server
    return fetchOceMinimalMain()
      .then((appData) => {
        if (pageSlug === null || pageSlug === '') {
          pageSlug = appData.fields.pages[0].slug;
        }
        return fetchPage(pageSlug).then((pageData) => {
          if (isPlatformServer(this.platformId)) {
            // add the two pieces of data to the transfer state separately
            this.transferState.set(APP_KEY, appData);
            this.transferState.set(PAGE_KEY, pageData);
          }

          // return the two pieces of data in a single object
          const fullData = { appData, pageData };
          return fullData;
        });
      });
  }
}
