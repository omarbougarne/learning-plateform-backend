FROM node:22-alpine AS builder

RUN npm install -g pnpm@9 && \
    rm -rf /root/.cache/node/corepack

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build


FROM node:22-alpine AS runner

RUN npm install -g pnpm@9 && \
    rm -rf /root/.cache/node/corepack

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY --from=builder /app/dist ./dist

ENV PORT=9090

EXPOSE 9090

CMD ["node", "dist/main"]
