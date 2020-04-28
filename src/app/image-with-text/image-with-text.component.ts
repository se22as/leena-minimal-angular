/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input, OnInit } from '@angular/core';

/**
 * Component for the Image With Text component.
 *
 * This component recieves all the data which it is to display.
 */
@Component({
    selector: 'app-image-with-text',
    templateUrl: './image-with-text.component.html',
    styleUrls: ['./image-with-text.component.css']
})
export class ImageWithTextComponent implements OnInit {

    // variables passed into this component from another component
    // (note: these could also be referenced in the HTML)
    @Input() backgroundImage: string;
    @Input() mainTitle: string;
    @Input() subText: string;
    @Input() buttonText: string;
    @Input() buttonUrl: string;

    // determined styles
    textClassNames: string;
    imageBackgroundStyle: string;

    /*
     * Get the data from the server and populate above variables
     */
    ngOnInit() {
        this.textClassNames = this.buttonText ? 'text adjust-margins' : 'text';

    }

}
