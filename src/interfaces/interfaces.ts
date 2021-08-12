/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

/**
 * This file contains the definitions of all the data used in this application
 */

export interface ImageRenditions {
  srcset: string;
  jpgSrcset: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  native: string;
  width: string;
  height: string;
}

export interface MinimalMain {
  headerRenditionURLs: ImageRenditions;
  footerRenditionURLs: ImageRenditions;
}

// export interface Page {
//   id: string;
//   name: string;
//   description: string;
//   fields: TopicFields;
//   renditionUrls: ImageRenditions;
// }

// -- PROXY SERVER --

// Note: the headers are optional in the HttpOptions
export interface HttpOptions {
  headers?: {} ;
}
