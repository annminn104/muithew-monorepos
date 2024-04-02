FROM oven/bun:1 AS builder
WORKDIR /app

RUN bun install turbo --global

COPY . .

RUN turbo prune @apps/admin --docker

FROM oven/bun:1 AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/bun.lockb ./bun.lockb

RUN bun install --ignore-scripts

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN bun run turbo build --filter=admin...

FROM nginx:stable-alpine AS runner

COPY --from=installer /app/apps/admin/dist /usr/share/nginx/html
#COPY --from=installer /app/apps/admin/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5010

ENV PORT 5010

CMD ["nginx", "-g", "daemon off;"]