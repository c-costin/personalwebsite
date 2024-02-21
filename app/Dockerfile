# # Base NodeJS image with pnpm
# FROM node:21-alpine as base
# RUN npm i -g pnpm

# # Install dependencies
# FROM base AS dependencies

# WORKDIR /app
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install

# # Build app
# FROM base AS build

# WORKDIR /app
# COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
# RUN pnpm run build
# # RUN pnpm prune --prod


# # Deploy
# FROM base AS deploy
# COPY --from=build /app/build ./build
# COPY --from=build /app/node_modules ./node_modules

# CMD [ "node", "build" ]


FROM node:21-slim
RUN npm i -g pnpm

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build
RUN pnpm prune --prod

CMD [ "node", "build/index.js" ]
