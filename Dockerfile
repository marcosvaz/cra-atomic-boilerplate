FROM node:15-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install -g yarn --force
RUN yarn
RUN yarn global add react-scripts@3.3.1 --silent
COPY . .
RUN yarn build
RUN yarn global add serve
EXPOSE 5000
CMD ["serve", "-s", "build"]
