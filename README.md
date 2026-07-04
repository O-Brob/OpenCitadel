# OpenCitadel
$\dots$

## Overview
*`OpenCitadel`* is an open-source, private, self-hosted full-stack team workspace platform. 

`Current Stage:` Solidifying architectural design and improving roadmap, prior to production of an MVP.

## Table of Contents
1. [Project Structure](#project-structure)

## Project Structure
````
OpenCitadel/                    (Monorepo project directory)
├── apps/                       (Deployable applications)
│   ├── client/                 (React + Vite web frontend)
│   │   ├── public/             (Client static assets)
│   │   ├── src/                (Client source code)
│   │   ├── Dockerfile          (Dockerfile for containerization)
│   │   ├── index.html          (Client HTML entry point)
│   │   ├── nginx.conf          (Nginx config for getting static assets)
│   │   ├── package.json        (Client-specific package dependencies)
│   │   ├── tsconfig.app.json   (TS sub-config for the browser code)
│   │   ├── tsconfig.json       (Client main TS config)
│   │   ├── tsconfig.node.json  (TS sub-config for build tools)
│   │   └── vite.config.ts      (Vite build/dev config)
│   └── server/                 (Node + Express backend)
│       ├── src/                (Server source code)
│       ├── Dockerfile          (Dockerfile for containerization)
│       ├── package.json        (Server-specific package dependencies)
│       └── tsconfig.json       (Server main TS config)
├── packages/                   (Shared packages for deployable apps)
│   ├── typescript-config/      (Shared TS configs)
│   │   ├── base.json           (Shared TS settings for all projects)
│   │   ├── node.json           (Node-specific TS config)
│   │   ├── package.json        (Package file for pnpm-workspace)
│   │   └── react.json          (React-specific TS config)
│   └── ui/                     (Shared UI Package)
│       ├── components/         (Modular UI Components)
│       ├── index.ts            (Centralized export of components)
│       ├── package.json        (Package file for pnpm-workspace)
│       └── tsconfig.json       (UI package TS config)
├── .dockerignore               (files to ignore in docker COPY cmds)
├── .env.example                (.env example/template file)
├── .gitignore                  (Main .gitignore of non-source files)
├── .npmrc                      (Package manager configurations)
├── docker-compose.dev.yaml     (Compose file for dev w/ hot reloads)
├── docker-compose.yaml         (Compose file for building/init all apps)
├── eslint.config.mjs           (Flat configuration file for ESLint)
├── LICENSE.md                  (Legal usage/distribution terms)
├── package.json                (Monorepo root package)
├── pnpm-lock.yaml              (Package lockfile)
├── pnpm-workspace.yaml         (PNPM workspace declaration)
├── README.md                   (Project description & instructions)
└── turbo.json                  (Turborepo configuration)
````