# Multi-stage build for client web frontend
# ===== Build dependencies and transpile TypeScript to static assets =====
FROM node:22-alpine AS build

WORKDIR /opencitadelapp

RUN npm install -g pnpm@10.33.0

# Copy root workspace configs and packages needed for the build
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/typescript-config ./packages/typescript-config
COPY packages/ui ./packages/ui
COPY apps/client ./apps/client

# Install all dependencies and build the client
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @opencitadel/client build

# ===== Runtime environment with static production dependencies only =====
FROM nginx:1.31.2-alpine

WORKDIR /opencitadelapp

# Copy the client's built output
COPY --from=build /opencitadelapp/apps/client/dist /usr/share/nginx/html

# Copy nginx config as default, start Nginx server
COPY ./apps/client/nginx.conf /etc/nginx/conf.d/default.conf

# Nginx image is configured to set user, expose on port 80 & start:
# https://github.com/nginx/docker-nginx/blob/00348041cc12284266751457dcfc10b15645476a/mainline/debian/Dockerfile