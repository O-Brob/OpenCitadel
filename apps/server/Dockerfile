# Multi-stage build for server backend
# ===== Build dependencies and transpile TypeScript =====
FROM node:22-alpine AS build

WORKDIR /opencitadelapp

RUN npm install -g pnpm@10.33.0

# Copy root workspace configs and packages needed for the build
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/typescript-config ./packages/typescript-config
COPY apps/server ./apps/server

# Install all dependencies and build the server 
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @opencitadel/server build

# ===== Runtime environment with production dependencies only =====
FROM node:22-alpine

WORKDIR /opencitadelapp

RUN npm install -g pnpm@10.33.0

# Copy root workspace configs and packages needed for runbtime
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/typescript-config ./packages/typescript-config

# Copy the built server and the package
COPY --from=build /opencitadelapp/apps/server/dist ./apps/server/dist
COPY apps/server/package.json ./apps/server/

# Install dependencies
RUN pnpm install --frozen-lockfile --production

# New non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

EXPOSE 5050

# Start the server by running transpiled index.ts
CMD ["node", "apps/server/dist/index.js"]