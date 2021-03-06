# Script to create the Angular DevX tutorial Docker image
# It will be installed into /usr/src/devx
# Reference: https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

# Build the image by cd-ing into the parent directory then:
# `docker build --rm --tag devx/oce-angular-minimal-sample:<release>.<build> .`
# e.g. `docker build --rm --tag devx/oce-angular-minimal-sample:20.11.8 .`

# Run the latest image using a port of your choice -- e.g. 80 -- by:
# `docker run --rm -p80:8080 devx/oce-angular-minimal-sample`

FROM node:10

LABEL maintainer="ben.staveley-taylor@oracle.com"
LABEL description="Oracle Content SDK Tutorials -- Angular (Oracle Content Minimal)"

# Create app directory
WORKDIR /usr/src/devx

# Suppress feedback request prompt during install
ARG NG_CLI_ANALYTICS=ci

# Install app dependencies
# Not copying package-lock.json; it causes mysterious checksum failures in npm install
COPY package.json ./

# Build using Oracle's internal npm proxy
RUN npm config set registry https://artifacthub-tip.oraclecorp.com/api/npm/npmjs-remote ; \
  npm config set noproxy ".oraclecorp.com" ; \
  npm install ; \
  npm install serve

# Bundle the build directory (assumes `ng build` has been run on the host)

# The end-user URL will be like: http://server:8080/samples/oce-angular-minimal-sample
# So the web site needs to be in a samples/oce-angular-minimal-sample subdirectory
COPY dist dist

# Uses port 8080 of the container -- this is remapped to any host port when running
EXPOSE 8080

CMD [ "node", "dist/server/main.js" ]