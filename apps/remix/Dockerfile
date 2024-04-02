FROM oven/bun:1 AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN bun install turbo @remix-run/serve --global
COPY . .
RUN turbo prune @apps/remix --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb
RUN bun install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN bun run turbo build --filter=remix...

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=installer /app .

ENV HOST=0.0.0.0

EXPOSE 5050

ENV PORT 5050

CMD ["yarn", "start", "--filter=remix"]