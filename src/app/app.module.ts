/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectWithUsComponent } from './connect-with-us.component';
import { ContactUsPageComponent } from './contact-us-page.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { HomePageComponent } from './home-page.component';
import { ImageWithTextComponent } from './image-with-text.component';
import { LocationsComponent } from './locations.component';
import { WelcomeComponent } from './welcome.component';
import { LayoutComponent } from './layout.component';

const appRoutes: Routes = [
    // home page
    {
        path: 'home',
        component: HomePageComponent,
    },
    // Contact us page
    {
        path: 'contact',
        component: ContactUsPageComponent,
    },
    // no path specified, go to home
    {
        path: '',  redirectTo: '/home', pathMatch: 'full'
    }
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
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [
        Title
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
