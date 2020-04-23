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
 * @param imageNames - Array of item names to get from the server
 * @returns map of image file name and its guid
 */
export function fetchImageNameAndURLs(client, imageNames) { 

    // Build up the query predicate of the format :
    // 'name eq "name1" OR name eq "name2" OR name eq "name3"'
    var predicate="";
    for (var i = 0; i < imageNames.length; i++) {
        if (i > 0){
            predicate += " OR "
        }
        predicate += 'name eq "' + imageNames[i] + '"';
    }
    var queryString = '(' + predicate + ')'

    // Search for the items and get the Rendition URL for each item
    return client.queryItems({
        "q": queryString,
        "fields": "all"
    }).then(function (result) {          
        var imageURLs = {}
                
        var guids = result.items;        
        for (var i = 0; i < guids.length; i++) {
            let url = client.getRenditionURL({
                "id" : guids[i].id
            });
            
            imageURLs[guids[i].name] =  url;
        }

        return imageURLs;
    });
}