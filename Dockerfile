FROM node:12.2.0-alpine

WORKDIR /dragons

COPY package.json /dragons/package.json
COPY package-lock.json /dragons/package-lock.json
COPY public /dragons/public
COPY src /dragons/src

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]