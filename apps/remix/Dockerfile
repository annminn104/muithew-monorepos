FROM node:18-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN yarn global add turbo
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

RUN yarn turbo build --filter=remix...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 remixjs
USER remixjs

COPY --from=installer /app/apps/remix/vite.config.ts .
COPY --from=installer /app/apps/remix/package.json .

COPY --from=installer --chown=remixjs:nodejs /app/apps/remix/build/server ./
COPY --from=installer --chown=remixjs:nodejs /app/apps/remix/build/client ./apps/remix/build/client

EXPOSE 5050

ENV PORT 5050

CMD node apps/remix/index.js