FROM node:18-alpine
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN npm install
CMD ["node", "index.js"]
EXPOSE 5000
