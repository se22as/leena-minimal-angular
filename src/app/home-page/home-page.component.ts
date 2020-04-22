/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {getDeliveryClient} from '../../scripts/server-config-utils';
import {fetchImageURLs} from '../../scripts/services';


/**
 * Component for the Home page.
 */
@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

    /*
     * Set the title in the constructor.
     */
    constructor(private titleService: Title) {
        this.titleService.setTitle('Home - Angular');
    }

    // variables whoses values are set in ngOnInit from data returned
    // from the server and are referenced from the html file
    headerLogoURL: string;
    footerLogoURL: string;
    imageURL: string;

    /*
     * Get the data from the server and populate above variables
     */
    ngOnInit() {
        // get the client to connect to CEC
        const deliveryClient = getDeliveryClient();

        // get the URLS for the images to display in this application
        fetchImageURLs(deliveryClient)
        .then((urls) => {
            this.headerLogoURL = urls.headerLogoURL;
            this.footerLogoURL = urls.footerLogoURL;
            this.imageURL = urls.homeImageURL;
        })
        .catch(error => {
            console.error(error);
        });
    }

}
