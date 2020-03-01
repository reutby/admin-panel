
FROM node:13.3.0 AS nodeNpm
COPY . .
ENV BASE_URL '/gp-admin'
RUN npm install
RUN npm run build
FROM node:13.3-alpine
RUN mkdir /app
WORKDIR /app
ENV PORT=3001
COPY --from=nodeNpm node_modules node_modules 
COPY --from=nodeNpm dist dist 
COPY . .
ENV BASE_URL '/gp-admin'
EXPOSE $PORT
CMD npm start
