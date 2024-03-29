FROM node:18-alpine AS builder

WORKDIR /app

RUN yarn global add turbo gatsby

COPY . .

RUN turbo prune @apps/gatsby --docker

FROM node:18-alpine AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock

RUN yarn install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN yarn turbo build --filter=gatsby...

FROM nginx:stable-alpine AS runner

COPY --from=installer /app/apps/gatsby/public /usr/share/nginx/html

EXPOSE 5060

ENV PORT 5060

CMD ["nginx", "-g", "daemon off;"]