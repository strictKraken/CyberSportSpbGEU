FROM node:16-alpine as build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:16-alpine as runner
WORKDIR /app
COPY --from=build /app/package.json .
COPY --from=build /app/yarn.lock .
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]