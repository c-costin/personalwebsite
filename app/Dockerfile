FROM node@sha256:0ed207ef98ec6ecc0b79c6158175c75e27f8ca283afe1ccbcf20d7153fb43047

RUN apt update && apt upgrade -y
RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build
RUN pnpm prune --prod

CMD [ "node", "build/index.js" ]
