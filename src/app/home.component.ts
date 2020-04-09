/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Component for the Home page.
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    /*
     * Set the title in the constructor. 
     */
    constructor(private titleService: Title) {
        this.titleService.setTitle("Home");
    }

    ngOnInit(){
        // Do any code to get data from the server
    }

}
