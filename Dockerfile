FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0

