FROM debian

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 8080:8080

CMD yarn dev --port 8080 --host 0.0.0.0