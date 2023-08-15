FROM debian

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN apt-get update -y

RUN apt install nodejs npm -y

RUN npm install --global yarn

RUN yarn

EXPOSE 8080:8080

CMD yarn dev --port 8080 --host 0.0.0.0