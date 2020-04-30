/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {getDeliveryClient} from '../../scripts/server-config-utils';
import {fetchImageURLs} from '../../scripts/services';
import {CONTACT_US_IMAGE} from '../../scripts/constants';

/**
 * Component for the Contact Us page.
 */
@Component({
    selector: 'app-contact-us',
    templateUrl: '../contact-us-page/contact-us-page.component.html'
})
export class ContactUsPageComponent implements OnInit {

    /*
    * Set the title in the constructor.
    */
   constructor(private titleService: Title) {
       this.titleService.setTitle('Contact Us - Angular');
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

        // get the URLs for the image to display in this component
        fetchImageURLs(deliveryClient, [CONTACT_US_IMAGE])
        .then((urls) => {
            this.imageURL = urls[CONTACT_US_IMAGE]
        })
        .catch(error => {
            console.error(error);
        });
    }

}
