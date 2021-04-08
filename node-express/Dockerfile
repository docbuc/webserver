# Datei: webserver/node-express/Dockerfile (docbuc/node-express)
FROM node:15
WORKDIR /src
COPY ./src/package.json /src/
RUN npm i --production
COPY /src/ /src/
EXPOSE 3000
USER node
CMD [ "node", "/src/bin/www" ]

