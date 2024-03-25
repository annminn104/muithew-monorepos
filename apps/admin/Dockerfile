FROM node:18-alpine AS builder

WORKDIR /app

RUN yarn global add turbo

COPY package.json yarn.lock ./

RUN yarn install --ignore-scripts

RUN yarn turbo build --filter=./packages/**

RUN turbo prune @apps/admin --docker


RUN yarn turbo build --filter=admin...

COPY . .

FROM nginx:1.21-alpine AS production

ENV NODE_ENV production

RUN rm -rf /usr/share/nginx/app-admin/* && rm -rf /docker-entrypoint.d/*

COPY --from=builder /app/dist /usr/share/nginx/app-admin

EXPOSE 5010

CMD ["nginx", "-g", "daemon off;"]
