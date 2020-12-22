/* eslint-disable no-param-reassign */
/**
 * Copyright (c) 2020 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import { createDeliveryClient, createPreviewClient } from 'contentsdk/content.min';

declare let process: any;

/*
 * This function is called from the ContentSDK before it makes any REST calls
 * when running on the server ()
 *
 * When this method is called from the node server, authorization headers are
 * added. This only needs to be done when rendering on the server as any client
 * requests are proxied through the Express server and therefore are handled in
 * 'src/server/server.js)
 */
function beforeSendCallback(param) {
  param.headers = param.headers || {};
  param.headers.authorization = process.env.AUTH;
}

/**
 * Returns a Delivery Client or a Preview Client to be used to access
 * content from Oracle Content and Experience Cloud server.
 */
export default function getClient() {
  // When creating a client for the browser and authorization is needed for calls to OCE
  // - all requests (content and images) are to be proxied through this application's
  //   Express server
  // - the ServerURL for the ContentSDK client will be this application's host
  //
  // See the following files where proxying is setup/dome
  // - '/src/scripts/utils.getImageUrl' for the code proxying requests for image binaries
  // - 'src/server/server' for the Express server proxying.
  const isBrowser = (typeof window !== 'undefined' && typeof window.document !== 'undefined');
  const serverURL = (process.env.AUTH && isBrowser)
    ? `${window.location.origin}/`
    : process.env.SERVER_URL;

  let serverconfig: any = {};

  serverconfig = {
    contentServer: serverURL,
    contentVersion: process.env.API_VERSION,
    channelToken: process.env.CHANNEL_TOKEN,
  };

  // if authorization is needed to get data from OCE and this is running on the server, add the
  // 'beforeSend' callback so the authorization header can be added to the OCE server requests
  if (process.env.AUTH && !isBrowser) {
    serverconfig.beforeSend = beforeSendCallback;
    serverconfig.authorization = process.env.AUTH;
  }

  // create and return the relevant client
  const client = process.env.PREVIEW
    ? createPreviewClient(serverconfig)
    : createDeliveryClient(serverconfig);

  return client;
}
