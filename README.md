# ksi-entertainment-web

音楽ライブの参戦記録を残してシェアし、趣味の合う人とマッチングする個人開発サービスのフロントエンド。

## 機能スコープ

- **v1: 記録とシェア** — 参戦記録を CRUD で保存し、Canvas で1枚のビジュアルカードに合成して SNS にシェアする
- **v2: マッチングとリアルタイム体験** — 趣味の合うユーザーとマッチングして WebRTC で通話し、通話中は Canvas 上のペンライトの光を WebSocket でリアルタイム同期する

現時点では Next.js プロジェクトの雛形のみで、上記のビジネスロジックは未実装。

## 構成

- Next.js (App Router) + TypeScript
- styled-components (CSS-in-JS)
- ESLint
- GraphQL クライアント: urql（BFF: ksi-entertainment-bff との通信に使用）

## BFF との接続

GraphQL エンドポイントは環境変数 `NEXT_PUBLIC_BFF_URL` で切り替える。未設定時は
`http://localhost:4000/graphql` を使う。

BFF（ksi-entertainment-bff）は TypeScript(graphql-yoga) から Go(gqlgen) へ移行中で、
Go 版のポート番号はまだ確定していない（未確認）。移行後は `.env.local` などで
`NEXT_PUBLIC_BFF_URL` を実際のエンドポイントに合わせて上書きすること。

## コマンド

```bash
npm run dev    # ローカル開発サーバー起動 (http://localhost:3000)
npm run build  # プロダクションビルド
npm run start  # ビルド済みアプリの起動
npm run lint   # ESLint チェック
```

## Docker

```bash
docker build -t ksi-web --build-arg NEXT_PUBLIC_BFF_URL=http://localhost:4000/graphql .
docker run -p 3000:3000 -e NEXT_PUBLIC_BFF_URL=http://localhost:4000/graphql ksi-web
```

`NEXT_PUBLIC_BFF_URL` はクライアントバンドルにビルド時に埋め込まれるため、
`docker run` の `-e` だけでは反映されない。接続先を変える場合は `docker build`
の `--build-arg` で渡し直してイメージを作り直すこと。
