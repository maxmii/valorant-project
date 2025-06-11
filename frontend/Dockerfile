# Frontend Dockerfile
FROM node:20 AS builder
WORKDIR /app
COPY frontend/. .
COPY shared ./shared
RUN cp -r ./shared ../shared
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN ROLLUP_USE_NODE_JS=true pnpm build

FROM node:20 AS runner
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/index.html ./index.html
COPY --from=builder /app/public ./public
COPY --from=builder /app/shared ./shared
EXPOSE 5173
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]
