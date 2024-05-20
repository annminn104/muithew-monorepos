FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add turbo@1.12.2
COPY . .
RUN turbo prune @apps/portfolio --docker

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

RUN yarn turbo run build --filter=portfolio...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/portfolio/next.config.js .
COPY --from=installer /app/apps/portfolio/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/.next/static ./apps/landing/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/public ./apps/landing/public

EXPOSE 5070

ENV PORT 5070

CMD node apps/portfolio/server.js