/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { BrowserModule, Title, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section';

import { PageDataResolver } from '../resolvers/page-data.resolver';

const appRoutes: Routes = [
  // no path specified, redirect to /page/ with no slug param specified
  {
    path: '',
    redirectTo: '/page/',
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'page/:slug',
    component: PageComponent,
    resolve: { routeData: PageDataResolver },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    RouterModule.forRoot( // <-- debugging purposes only
      appRoutes, { enableTracing: false, initialNavigation: 'enabled', onSameUrlNavigation: 'reload' },
    ),
  ],
  providers: [
    Title,
    PageDataResolver,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
