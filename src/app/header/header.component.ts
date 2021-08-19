/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageRenditions, Page } from '../../interfaces/interfaces';

/**
 * Component for the Header.
 *
 * This component receives all the data which it is to display.
 * @param headerRenditionURLs the rendition URLs for the image to be displayed in the header
 * @param pages the pages collection contained in the MinimalMain content type
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // variables passed into this component from another component
  // (note: these could also be referenced in the HTML)
  @Input() headerRenditionURLs: ImageRenditions;

  @Input() pages: Page[];

  currentPageSlug: string;

  /**
   * Determine the current page slug from the request param
   * which helps to determine which Nav Item should be highlighted.
   */
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.currentPageSlug = params.get('slug');
    });
  }

  ngOnInit() {
    // for the root path, no param is present. Default to the first page slug
    if (this.currentPageSlug === null || this.currentPageSlug === '') {
      this.currentPageSlug = this.pages[0].slug;
    }
  }

  /*
   * Show/hide the drop down menu in narrow screens when the
   * button is clicked and update the button styling.
   */
  onDropDownMenuButtonClicked() {
    const dropDownMenu = document.getElementById('nav-menu-items');
    const menuButton = document.getElementById('nav-menu-button');

    if (dropDownMenu.className === '') {
      dropDownMenu.className = 'displayed';
      menuButton.className = 'active';
    } else {
      dropDownMenu.className = '';
      menuButton.className = '';
    }
  }

  /*
   * Handle an item being clicked on from the menu
   */
  onMenuItemClicked(index: number) {
    // set the current nav index
    // Close the menu and update the button styling
    const dropDownMenu = document.getElementById('nav-menu-items');
    const menuButton = document.getElementById('nav-menu-button');
    dropDownMenu.className = '';
    menuButton.className = '';
  }
}
