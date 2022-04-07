FROM node:16-alpine

WORKDIR /app

ENV DEBUG=*
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN mkdir /app/node_modules/.cache && chown -R node:node /app/node_modules

EXPOSE 3000

CMD ["npm", "start"]
