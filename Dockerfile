FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .

CMD [ "node", "server.js" ]