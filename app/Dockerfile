FROM node:10-alpine AS builder

ENV NODE_ENV=production
WORKDIR /home/node/app
COPY . .

RUN npm install \
    && npm cache clean --force

CMD npm start
