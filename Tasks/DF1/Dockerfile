FROM node:alpine

ADD package.json package-lock.json start_flle.js /

RUN npm install

ENTRYPOINT npm run --silent start