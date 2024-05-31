FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add turbo@1.12.2
COPY . .
RUN turbo prune @apps/saas-builder --docker

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

RUN yarn turbo run build --filter=saas-builder...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/saas-builder/next.config.js .
COPY --from=installer /app/apps/saas-builder/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/saas-builder/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/saas-builder/.next/static ./apps/saas-builder/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/saas-builder/public ./apps/saas-builder/public

EXPOSE 5080

ENV PORT 5080

CMD node apps/saas-builder/server.js