FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN apt-get update && apt-get -y upgrade && apt-get install -y git

COPY package*.json ./
RUN npm install

# Copy and Build app
COPY . .
RUN npm run generate

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "start" ]
