FROM node:12-alpine

RUN npm install -g @angular/cli

COPY ./ /data/ngapp/
WORKDIR /data/ngapp

CMD npm install && ng serve --host 0.0.0.0
