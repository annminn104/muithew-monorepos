FROM node:16-alpine AS builder

WORKDIR /app

RUN yarn global add turbo

COPY package.json yarn.lock ./
COPY . .

RUN turbo prune @apps/admin --docker

RUN yarn install --ignore-scripts

RUN yarn turbo build --filter=admin

FROM nginx:1.21-alpine AS production

ENV NODE_ENV production

RUN rm -rf /usr/share/nginx/html/* && rm -rf /docker-entrypoint.d/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5010

CMD ["nginx", "-g", "daemon off;"]
