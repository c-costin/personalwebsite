FROM node:21-slim

RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build
RUN pnpm prune --prod

CMD [ "node", "build/index.js" ]
