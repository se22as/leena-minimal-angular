/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import {getDeliveryClient} from '../../scripts/server-config-utils';
import {fetchImageURLs} from '../../scripts/services';
import {HEADER_LOGO, FOOTER_LOGO} from '../../scripts/constants';

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
    loading = true;

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
        fetchImageURLs(deliveryClient, [HEADER_LOGO, FOOTER_LOGO])
        .then((urls) => {
            this.headerLogoURL = urls[HEADER_LOGO],
            this.footerLogoURL = urls[FOOTER_LOGO]
            this.loading = false;
        })
        .catch(error => {
            console.error(error);
        });
    }

}