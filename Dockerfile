FROM node:lts-alpine

RUN npm install -g @vue/cli

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve" ]