/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { BrowserModule, Title, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectWithUsComponent } from './connect-with-us/connect-with-us.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageWithTextComponent } from './image-with-text/image-with-text.component';
import { LocationsComponent } from './locations/locations.component';
import { PageComponent } from './page/page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutComponent } from './layout/layout.component';

import { PageDataResolver } from '../resolvers/page-data.resolver';
import { HomePageDataResolver } from '../resolvers/home-page-data.resolver';
import { ContactUsPageDataResolver } from '../resolvers/contact-us-page-data.resolver';

const appRoutes: Routes = [
  {
    path: 'page/:slug',
    component: PageComponent,
    resolve: { appData: PageDataResolver },
  },
  // home page
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  //   resolve: { urls: HomePageDataResolver },
  // },
  // // Contact us page
  // {
  //   path: 'contact',
  //   component: ContactUsPageComponent,
  //   resolve: { urls: ContactUsPageDataResolver },
  // },
  // // no path specified, go to home
  {
    path: '', redirectTo: '/page/home', pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectWithUsComponent,
    ContactUsPageComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ImageWithTextComponent,
    LocationsComponent,
    WelcomeComponent,
    LayoutComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    RouterModule.forRoot( // <-- debugging purposes only
      appRoutes, { enableTracing: true, initialNavigation: 'enabled' },
    ),
  ],
  providers: [
    Title,
    HomePageDataResolver,
    ContactUsPageDataResolver,
    PageDataResolver,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
