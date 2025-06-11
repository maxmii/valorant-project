# Backend Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk update && apk upgrade

# Copy only package manager files first for better caching
COPY backend/package.json backend/pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

# Now copy the rest of the backend and shared files
COPY backend/. .
COPY shared ./shared
RUN cp -r ./shared /shared

RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN apk update && apk upgrade

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/shared ./shared
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main.js"]