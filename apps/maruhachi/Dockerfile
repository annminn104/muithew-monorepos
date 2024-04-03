FROM node:18-alpine AS base

FROM oven/bun:1 AS builder
WORKDIR /app

RUN yarn add global turbo
COPY . .
RUN turbo prune @apps/maruhachi --docker

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

RUN yarn turbo run build --filter=maruhachi...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/maruhachi/next.config.js .
COPY --from=installer /app/apps/maruhachi/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/maruhachi/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/maruhachi/.next/static ./apps/maruhachi/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/maruhachi/public ./apps/maruhachi/public

EXPOSE 5030

ENV PORT 5030

CMD node apps/maruhachi/server.js