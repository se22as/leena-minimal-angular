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
                        
        var homePageImageGUID, contactUsImageGUID, headerLogoGUID, footerLogoGUID;
        var items = result.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name === "Banner1.jpg"){
                homePageImageGUID = items[i].id;
            } else if (items[i].name === "Banner2.jpg"){
                contactUsImageGUID = items[i].id;
            } else if (items[i].name === "Logo.png"){
                headerLogoGUID = items[i].id;
            } else if (items[i].name === "Powered_by_OCE.png"){
                footerLogoGUID = items[i].id;
            }            
        }

        // Header logo
        return getRenditionURL(client, headerLogoGUID)
        .then((url) => {
            var headerLogoURL = url;
            
            // Footer logo
            return getRenditionURL(client, footerLogoGUID)
            .then((url) => {
                var footerLogoURL = url;                

                // Home Page image
                return getRenditionURL(client, homePageImageGUID)
                .then((url) => {
                    var homeImageURL = url;

                    // Contact Us image
                    return getRenditionURL(client, contactUsImageGUID)
                    .then((url) => {
                        var contactUsImageURL = url;

                        const urls = {
                            headerLogoURL : headerLogoURL,
                            footerLogoURL : footerLogoURL,
                            homeImageURL : homeImageURL,
                            contactUsImageURL : contactUsImageURL
                        }                         
                        return urls;                        
                    })
                    .catch(error => console.error(error));                      

                })
                .catch(error => console.error(error));  

            })            
            .catch(error => console.error(error));          

        })
        .catch(error => console.error(error));                              
    });
}

/**
 * Return the rendition URL for the specified item.
 * 
 * @param {DeliveryClient} client - The delivery client which will execute the search
 * @param {String} identifier - the Id of the item whose rendition URL is required
 * @returns {String} - the rendition URL
 */
export function getRenditionURL(client, identifier) { 
    let url = client.getRenditionURL({
        "id" : identifier
    });
    return Promise.resolve(url);
}