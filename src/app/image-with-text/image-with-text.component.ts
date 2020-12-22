/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input, OnInit } from '@angular/core';
import getImageUrl from '../../scripts/utils';

/**
 * Component for the Image With Text component.
 *
 * This component receives all the data which it is to display.
 * @param mainTitle the main text
 * @param subText the sub text
 * @param buttonText the text for the button,
 *                   null if no button is to be displayed
 * @param buttonUrl the URL for where the button should take the user when clicked
 *                  null if no button is to be displayed
 * @param backgroundImage the URL of the image to display in the background
 */
@Component({
  selector: 'app-image-with-text',
  templateUrl: './image-with-text.component.html',
  styleUrls: ['./image-with-text.component.css'],
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

  imageBackgroundStyle: {};

  /*
  * Get the data from the server and populate above variables
  */
  ngOnInit() {
    this.textClassNames = this.buttonText ? 'text adjust-margins' : 'text';

    this.imageBackgroundStyle = {
      backgroundImage: `url(${getImageUrl(this.backgroundImage)})`,
    };
  }
}
