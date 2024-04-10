FROM node:18-alpine AS base

FROM base AS builder
RUN apt install -y libc6-compat
RUN apt update -y
WORKDIR /app

RUN yarn add global turbo@1.12.2 @remix-run/serve@2.8.1 
COPY . .
RUN turbo prune @apps/remix --docker

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

RUN yarn turbo run build --filter=remix...

FROM base AS runner
WORKDIR /app

COPY --from=installer /app .

ENV HOST=0.0.0.0

EXPOSE 5050

ENV PORT 5050

CMD ["yarn", "start", "--filter=remix"]