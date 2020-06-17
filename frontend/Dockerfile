FROM node:14.4.0-alpine

COPY /frontend/package.json /home/node/app/package.json

WORKDIR /home/node/app

ENV NODE_PATH src/

RUN npm install --loglevel warn

COPY /frontend /home/node/app
