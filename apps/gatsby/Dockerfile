FROM oven/bun:1 AS builder
WORKDIR /app

RUN bun install turbo gatsby --global

COPY . .

RUN turbo prune @apps/gatsby --docker

FROM oven/bun:1 AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb

RUN bun install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN bun run turbo build --filter=gatsby...

FROM nginx:stable-alpine AS runner

COPY --from=installer /app/apps/gatsby/public /usr/share/nginx/html

EXPOSE 5060

ENV PORT 5060

CMD ["nginx", "-g", "daemon off;"]