# Node version used
FROM node:13

#Create a directory to work in
RUN mkdir /backend
WORKDIR /backend
copy ["package.json", "package-lock.json*", "./"]
COPY . ./

RUN npm install --production --silent && mv node_modules ../

#open port on vm
EXPOSE 5000