# syntax=docker/dockerfile:1

# --- deps: 依存関係のインストールのみを行う ---
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- builder: Next.js のビルドを行う ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* はクライアントバンドルにビルド時に埋め込まれるため、
# 実行時の環境変数では反映できない。ビルド時に ARG/ENV として渡す。
ARG NEXT_PUBLIC_BFF_URL
ENV NEXT_PUBLIC_BFF_URL=$NEXT_PUBLIC_BFF_URL

RUN npm run build

# --- runner: 実行に必要な最小限のファイルだけを持つ軽量イメージ ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# next.config.ts の output: "standalone" により生成される、
# 依存を含んだ実行専用ディレクトリだけをコピーする。
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
