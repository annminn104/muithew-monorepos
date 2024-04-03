FROM node:18-alpine AS base

FROM oven/bun:1 AS builder
WORKDIR /app

RUN bun install --global turbo
COPY . .
RUN turbo prune @apps/admin --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock

RUN yarn install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN yarn turbo run build --filter=admin...

FROM nginx:stable-alpine AS runner

COPY --from=installer /app/apps/admin/dist /usr/share/nginx/html
#COPY --from=installer /app/apps/admin/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5010

ENV PORT 5010

CMD ["nginx", "-g", "daemon off;"]