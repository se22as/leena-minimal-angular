/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input } from '@angular/core';

/**
 * Component for the Header.
 *
 * This component recieves all the data which it is to display.
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    // variables passed into this component from another component
    // (note: these could also be referenced in the HTML)
    @Input() logoUrl: string;

}
