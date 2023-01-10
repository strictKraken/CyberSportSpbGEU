FROM node:16
RUN apt update
COPY ./ /app
WORKDIR /app
RUN yarn install && yarn build
FROM nginx
RUN mkdir /app
COPY --from=0 /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf