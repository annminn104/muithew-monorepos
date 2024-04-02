FROM oven/bun:1 AS base

FROM base AS builder
WORKDIR /app

RUN bun install turbo --global
COPY . .
RUN turbo prune @apps/astro --docker

FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb 
RUN bun install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN bun run turbo build --filter=astro...

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=installer /app .

ENV HOST=0.0.0.0

EXPOSE 5040

ENV PORT 5040

CMD node ./apps/astro/dist/server/entry.mjs