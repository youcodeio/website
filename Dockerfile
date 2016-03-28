# DoneJS 0.6
FROM node:4.2-slim

RUN apt-get update
RUN apt-get install -y git
# DoneJS works best with npm version 2.x
RUN npm install -g npm@2.14

# Set environment variable for donejs version
ENV DONEJS_VERSION 0.6.0

# Install latest version of DoneJS
RUN npm install -g donejs@v0.6.0
# Add website
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . .
EXPOSE 8080
RUN npm install

CMD [ "donejs", "develop" ]
