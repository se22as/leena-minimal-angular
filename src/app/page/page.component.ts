/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  MinimalMain,
  ImageRenditions,
  Page,
  Section,
} from '../../interfaces/interfaces';

/**
 * Component for the Page.
 *
 * The PageDataResolver gets all the data before this component is created.
 */
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit, OnDestroy {
  appData: MinimalMain;

  pages: Page[];

  pageData: Page;

  sections: Section[];

  headerRenditionURLs: ImageRenditions;

  footerRenditionURLs: ImageRenditions;

  navigationSubscription;

  /*
   * Set the title in the constructor.
   */
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.ngOnInit();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  /*
   * Get the data from the route, the data was obtained
   * using a resolver before this component was created
   */
  ngOnInit() {
    // the data obtained from the resolver before this component is called, is exposed on the
    // ActivatedRoute’s data property. The name of the field on the data object is the variable
    // specified on the route (app.module.ts) which is addied the results of the resolver
    const fullData = this.route.snapshot.data.routeData;
    this.appData = fullData.appData;
    this.headerRenditionURLs = this.appData.headerRenditionURLs;
    this.footerRenditionURLs = this.appData.footerRenditionURLs;

    this.pageData = fullData.pageData;
    if (!this.pageData.hasError) {
      this.sections = this.pageData.fields.sections;
      this.pages = this.appData.fields.pages;
      this.titleService.setTitle(this.pageData.name);
    }
  }
}
