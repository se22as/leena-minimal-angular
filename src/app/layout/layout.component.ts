/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import {getDeliveryClient} from '../../scripts/server-config-utils';
import {fetchImageNameAndURLs} from '../../scripts/services';

/**
 * Component for main layout for any page in the application.
 *
 * This component recieves all the data which it is to display.
 */
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

    // variables whoses values are set in ngOnInit from data returned
    // from the server and are referenced from the html file
    headerLogoURL: string;
    footerLogoURL: string;

    /*
     * Get the data from the server and populate above variables
     */
    ngOnInit() {
        // get the client to connect to CEC
        const deliveryClient = getDeliveryClient();

        // get the URLs for the images to display in this component
        fetchImageNameAndURLs(deliveryClient, ['Logo.png', 'Powered_by_OCE.png'])
        .then((urls) => {
            this.headerLogoURL = urls['Logo.png'],
            this.footerLogoURL = urls['Powered_by_OCE.png']
        })
        .catch(error => {
            console.error(error);
        });
    }

}