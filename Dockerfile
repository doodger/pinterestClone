# Node version used
FROM node:13

#Create a directory to work in
RUN mkdir /pinterest
WORKDIR /pinterest
COPY /src /pinterest/src
copy /public /pinterest/public
copy ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

#open port on vm
EXPOSE 3000