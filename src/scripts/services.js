/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

/**
  * This file contains a number of utility methods used to obtain data
  * from the server using the ContentSDK JavaScript Library.
  */

import getClient from './server-config-utils';

/**
 * Fetch the URLs for the specified named images.
 *
 * The data returned is a map of image name to image url.
 *
 * @param {DelivryClient} client - the delivery client
 * @param {array} imageNames - Array of item names to get from the server
 * @returns {Promise({Object})} - A Promise containing the data
 */
export default function fetchImageURLs(imageNames) {
  const client = getClient();
  // Build up the query predicate of the format :
  // 'name eq "name1" OR name eq "name2" OR name eq "name3"'
  let predicate = '';
  for (let i = 0; i < imageNames.length; i += 1) {
    if (i > 0) {
      predicate += ' OR ';
    }
    predicate += `name eq "${imageNames[i]}"`;
  }
  const queryString = `(${predicate})`;

  // Search for the items and get the Rendition URL for each item
  return client.queryItems({
    q: queryString,
    fields: 'all',
  }).then((result) => {
    const imageURLs = {};

    const guids = result.items;
    for (let i = 0; i < guids.length; i += 1) {
      const url = client.getRenditionURL({
        id: guids[i].id,
      });

      imageURLs[guids[i].name] = url;
    }

    return imageURLs;
  });
}
