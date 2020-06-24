FROM node

ADD package.json package-lock.json index.js /

RUN npm install

EXPOSE 3000

ENV IP_ADDRESS 0.0.0.0

ENTRYPOINT npm run --silent start