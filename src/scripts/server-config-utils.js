/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import {createDeliveryClient} from 'contentsdk/content.min.js';

import data from '../config/tutorial-config.json';

/**
 * Creates a ContentSDK Delivery Client from the data defined in 
 * "tutorial-config.json".
 */
export function getDeliveryClient(){

    // the "tutorial-config.json" has different key names to that
    // which is expected for the ContentSDK code, therefore we have to
    // have a new object with the keys that the ContentSDK is expecting.
    var serverconfig = {
        'contentServer': data.serverUrl,
        'contentVersion': data.apiVersion,
        'channelToken': data.channelToken
    };

    // Obtain the delivery client from the Content Delivery SDK using the specified configuration information
    const deliveryClient = createDeliveryClient(serverconfig);
    
    return deliveryClient;
}

