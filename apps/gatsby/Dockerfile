FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add turbo@1.12.2 gatsby@5.13.3
COPY . .
RUN turbo prune @apps/gatsby --docker

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

RUN yarn turbo run build --filter=gatsby...

FROM nginx:stable-alpine AS runner

COPY --from=installer /app/apps/gatsby/public /usr/share/nginx/html

EXPOSE 5060

ENV PORT 5060

CMD ["nginx", "-g", "daemon off;"]