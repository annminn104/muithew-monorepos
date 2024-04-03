FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app

RUN yarn add global turbo @remix-run/serve
COPY . .
RUN turbo prune @apps/remix --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN turbo build --filter=remix...

FROM base AS runner
WORKDIR /app

COPY --from=installer /app .

ENV HOST=0.0.0.0

EXPOSE 5050

ENV PORT 5050

CMD ["yarn", "start", "--filter=remix"]