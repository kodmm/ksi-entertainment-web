import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Docker イメージをマルチステージビルドで軽量化するため、
  // 依存を含まない standalone 出力 (.next/standalone) を有効化する。
  output: "standalone",
  compiler: {
    // SSR とクライアントで生成されるクラス名を一致させるための styled-components 用設定。
    //
    // Next.js 公式ドキュメントが案内する StyledComponentsRegistry
    // (ServerStyleSheet + useServerInsertedHTML) は、Next.js のメタデータ
    // ストリーミング機構と衝突し、開発時に回復可能なハイドレーションエラーを
    // 起こすため採用していない。styled-components 標準のグローバルスタイル
    // シートで SSR 自体は機能しているが、同時リクエスト間でスタイルシートが
    // 共有される（未確認だが、本番相当の負荷がかかるとスタイル漏れが起きる
    // 可能性がある）。負荷が増える前に registry パターンの再導入を検討すること。
    styledComponents: true,
  },
};

export default nextConfig;
