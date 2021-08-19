/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input, OnInit } from '@angular/core';
import { filterXSS } from 'xss';
import { ImageRenditions, Section } from '../../interfaces/interfaces';
import { getRenditionURLs } from '../../scripts/services';

/**
 * Component for Page Section.
 *
 * This component receives all the data which it is to display.
 * @param section Section type
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.html',
})
export class SectionComponent implements OnInit {
  // variables passed into this component from another component
  // (note: these could also be referenced in the HTML)
  @Input() section: Section;

  // determined styles
  heading: string;

  type: string;

  body: string;

  renditionURLs: ImageRenditions;

  actions: any;

  /*
  * Populate above variables from the data passed in. If an image is specified for a section,
  * make a call to get its rendition urls from the server.
  */
  ngOnInit() {
    this.heading = this.section.fields.heading;
    this.type = this.section.fields.type;
    // sanitize the content for html display
    // eslint-disable-next-line prefer-destructuring
    const content = this.section.fields.body;
    const options = {
      stripIgnoreTag: true, // filter out all HTML not in the whitelist
      stripIgnoreTagBody: ['script'], // the script tag is a special case, we need
      // to filter out its content
    };
    this.body = filterXSS(content, options);
    this.actions = this.section.fields.actions;
    if (this.section.fields.image) {
      getRenditionURLs(this.section.fields.image.id).then((urls) => {
        this.renditionURLs = urls;
      });
    }
  }
}
