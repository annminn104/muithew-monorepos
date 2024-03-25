FROM node:18-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune @apps/astro --docker

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

RUN yarn turbo build --filter=astro...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 astrojs
USER astrojs

COPY --from=installer /app/apps/astro/astro.config.mjs .
COPY --from=installer /app/apps/astro/package.json .

COPY --from=installer --chown=astrojs:nodejs /app/apps/astro/node_modules ./apps/astro/node_modules
COPY --from=installer --chown=astrojs:nodejs /app/apps/astro/public ./apps/astro/public
COPY --from=installer --chown=astrojs:nodejs /app/apps/astro/dist ./apps/astro/dist

EXPOSE 5040

ENV PORT 5040

CMD node ./apps/astro/server/entry.mjs