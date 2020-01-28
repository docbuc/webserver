# Datei: webserver/nginx/dockerbuch/Dockerfile (docbuc/dockerbuch-web)
FROM node:12-alpine
WORKDIR /src
COPY package.json /src
RUN npm i --production
COPY server.js /src
EXPOSE 3000
CMD [ "node", "server.js" ]
