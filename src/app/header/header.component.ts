/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

    // variables whoses values are set in ngOnInit and are referenced from the html file
    currentNavIndex: number;

    /**
     * Determine which Menu Item should be highlighted.
     */
    constructor(private router: Router ) {
        this.currentNavIndex = (this.router.url === '/contact') ? 1 : 0;
    }

    /*
    * Show/hide the drop down menu in narrow screens when the
    * button is clicked.
    */
   onDropDownMenuButtonClicked() {
        const x = document.getElementById('navListItems');
        if (x.className === 'menuItems') {
            x.className += ' displayed';
        } else {
            x.className = 'menuItems';
        }
    }

    /*
     * Handle an item being clicked on from the menu
     */
    onMenuItemClicked(index) {
        // set the current nav index
        this.currentNavIndex = index;

        // Close the menu
        const x = document.getElementById('navListItems');
        x.className = 'menuItems';
    }

}
