# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN npm i  

RUN npm i -g vite

RUN ln -s /usr/src/app/node_modules/ ../node_modules


# Copy the rest of the source files into the image.
COPY . .


# Expose the port that the application listens on.
EXPOSE 8090

# Run the application.
CMD npm run dev -- --host
