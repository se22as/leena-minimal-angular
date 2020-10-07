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
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutComponent } from './layout/layout.component';

import { HomePageDataResolver } from '../resolvers/home-page-data.resolver';
import { ContactUsPageDataResolver } from '../resolvers/contact-us-page-data.resolver';

const appRoutes: Routes = [
  // home page
  {
    path: 'home',
    component: HomePageComponent,
    resolve: { urls: HomePageDataResolver },
  },
  // Contact us page
  {
    path: 'contact',
    component: ContactUsPageComponent,
    resolve: { urls: ContactUsPageDataResolver },
  },
  // no path specified, go to home
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
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
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
