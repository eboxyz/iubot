FROM node:8
WORKDIR /usr/src/iubot 

COPY package*.json ./

RUN npm install 

COPY . . 
EXPOSE 8000

CMD [ "npm", "start" ]