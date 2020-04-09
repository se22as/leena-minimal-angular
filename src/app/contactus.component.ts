/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Component for the Contact Us page.
 */
@Component({
    selector: 'app-contact-us',
    templateUrl: './contactus.component.html'
})
export class ContactUsComponent implements OnInit {

    /*
    * Set the title in the constructor. 
    */
   constructor(private titleService: Title) {
       this.titleService.setTitle("Contact Us");
   }

    ngOnInit(){
        // Do any code to get data from the server
    }

}
