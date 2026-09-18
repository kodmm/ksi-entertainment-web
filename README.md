# ksi-entertainment-web

音楽ライブの参戦記録を残してシェアし、趣味の合う人とマッチングする個人開発サービスのフロントエンド。

## 機能スコープ

- **v1: 記録とシェア** — 参戦記録を CRUD で保存し、Canvas で1枚のビジュアルカードに合成して SNS にシェアする
- **v2: マッチングとリアルタイム体験** — 趣味の合うユーザーとマッチングして WebRTC で通話し、通話中は Canvas 上のペンライトの光を WebSocket でリアルタイム同期する

現時点では Next.js プロジェクトの雛形のみで、上記のビジネスロジックは未実装。

## 構成

- Next.js (App Router) + TypeScript
- Tailwind CSS
- ESLint

## コマンド

```bash
npm run dev    # ローカル開発サーバー起動 (http://localhost:3000)
npm run build  # プロダクションビルド
npm run start  # ビルド済みアプリの起動
npm run lint   # ESLint チェック
```
