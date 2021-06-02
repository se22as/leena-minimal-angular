/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

const webpack = require('webpack');

// config() will read the .env file, parse the contents, assign it to process.env
require('dotenv').config();

module.exports = {
  plugins: [
    // define variables to be used in the application, this is used for the routers basename
    new webpack.DefinePlugin({
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
      'process.env.API_VERSION': JSON.stringify(process.env.API_VERSION),
      'process.env.CHANNEL_TOKEN': JSON.stringify(process.env.CHANNEL_TOKEN),
      'process.env.PREVIEW': JSON.stringify(process.env.PREVIEW),
      'process.env.AUTH': JSON.stringify(process.env.AUTH),
      'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      'process.env.CLIENT_SECRET': JSON.stringify(process.env.CLIENT_SECRET),
      'process.env.CLIENT_SCOPE_URL': JSON.stringify(process.env.CLIENT_SCOPE_URL),
      'process.env.IDCS_URL': JSON.stringify(process.env.IDCS_URL),
      'process.env.LOGO_FILE_NAME': JSON.stringify(process.env.LOGO_FILE_NAME),
      'process.env.FOOTER_LOGO_FILE_NAME': JSON.stringify(process.env.FOOTER_LOGO_FILE_NAME),
      'process.env.HOME_IMAGE_FILE_NAME': JSON.stringify(process.env.HOME_IMAGE_FILE_NAME),
      'process.env.CONTACTUS_IMAGE_FILE_NAME': JSON.stringify(process.env.CONTACTUS_IMAGE_FILE_NAME),
    }),
  ],
};
