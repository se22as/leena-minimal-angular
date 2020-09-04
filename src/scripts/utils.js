/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

 /**
  * Provide functions to get the image names from the environment variables
  * set by WebPack to be used in typescript files.
  * 
  * "process.env" is not available in '.ts' files by default but it is available
  * in '.js' files. The easiest solution is to have wrapper getter methods in 
  * a '.js' file which is called by the '.ts' files.
  */

export function getHeaderImageName() {
  return process.env.LOGO_FILE_NAME;
}

export function getFooterImageName() {
  return process.env.FOOTER_LOGO_FILE_NAME;
}

export function getHomeImageName() {
  return process.env.HOME_IMAGE_FILE_NAME;
}

export function getContactUsImageName() {
  return process.env.CONTACTUS_IMAGE_FILE_NAME;
}