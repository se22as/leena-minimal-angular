/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input} from '@angular/core';

/**
 * Component for the Footer.
 *
 * This component recieves all the data which it is to display.
 */
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    // variables passed into this component from another component
    // (note: these could also be referenced in the HTML)
    @Input() logoUrl: string;
}
