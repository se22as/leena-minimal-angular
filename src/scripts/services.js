/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

 /**
  * This file contains a number of utility methods used to obtain data 
  * from the server using the ContentSDK JavaScript Library.
 */

/**
 * Fetch the URLs for all images used in the application.
 * 
 * @returns {Promise({object})} - A Promise containing the data to display on the top level page
 * @param {DeliveryClient} client - The delivery client which will execute the search
 */
export function fetchImageURLs(client) { 
    return client.queryItems({
        "q": '(name eq "Banner1.jpg" OR name eq "Banner2.jpg" OR name eq "Logo.png" OR name eq "Powered_by_OCE.png")',
        "fields": "all"
    }).then(function (result) {  
                        
        var homeImageURL, contactUsImageURL, headerLogoURL, footerLogoURL;
        var items = result.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name === "Banner1.jpg"){
                homeImageURL = client.getRenditionURL({"id" : items[i].id});                
            } else if (items[i].name === "Banner2.jpg"){
                contactUsImageURL = client.getRenditionURL({"id" : items[i].id});      
            } else if (items[i].name === "Logo.png"){
                headerLogoURL = client.getRenditionURL({"id" : items[i].id});      
            } else if (items[i].name === "Powered_by_OCE.png"){
                footerLogoURL = client.getRenditionURL({"id" : items[i].id});      
            }            
        }

        const urls = {
            headerLogoURL : headerLogoURL,
            footerLogoURL : footerLogoURL,
            homeImageURL : homeImageURL,
            contactUsImageURL : contactUsImageURL
        }            
        
        return urls;        
    });
}