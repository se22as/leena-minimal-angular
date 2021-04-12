/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input } from '@angular/core';
import { ImageUrls } from 'src/interfaces/interfaces';

/**
 * Component for the Footer.
 *
 * This component receives all the data which it is to display.
 * @param logoUrl the URL for the image to be displayed in the footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  // variables passed into this component from another component
  // (note: these could also be referenced in the HTML)
  @Input() logoUrl: ImageUrls;
}
