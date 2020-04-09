/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './contactus.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';


const appRoutes: Routes = [
    // home page
    {
        path: 'home',
        component: HomeComponent,
    },
    // Contact us page
    {
        path: 'contact',
        component: ContactUsComponent,
    },
    // no path specified, go to home
    {
        path: '',  redirectTo: '/home', pathMatch: 'full'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactUsComponent,
        HeaderComponent,
        FooterComponent
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
