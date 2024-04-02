FROM oven/bun:1 AS base

FROM base AS builder
WORKDIR /app

RUN bun install turbo --global
COPY . .
RUN turbo prune @apps/maruhachi --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb
RUN bun install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN bun run turbo build --filter=maruhachi...

FROM node:18-alpine AS runner
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