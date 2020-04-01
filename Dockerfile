
FROM node:13.3.0 AS nodeNpm
COPY package.json package-lock.json ./
ENV NODE_ENV=DEV
RUN npm install
FROM node:alpine
RUN mkdir /app
WORKDIR /app
ENV PORT=3001
COPY --from=nodeNpm node_modules node_modules 
COPY . .
EXPOSE $PORT
ENV NODE_ENV=PROD
CMD npm start