import { Client, cacheExchange, fetchExchange } from "@urql/core";

// BFF (ksi-entertainment-bff) は TypeScript(graphql-yoga) から Go(gqlgen) へ移行中で、
// Go 版でのポート番号はまだ確定していない（未確認）。
// そのためエンドポイントはハードコードせず、NEXT_PUBLIC_BFF_URL で切り替える。
// 移行が完了しポートが確定したら、このデフォルト値も見直すこと。
const bffUrl =
  process.env.NEXT_PUBLIC_BFF_URL ?? "http://localhost:4000/graphql";

/**
 * BFF への GraphQL リクエストに使う urql の Client。
 *
 * アプリ全体で1つのインスタンスを共有する。
 */
export const graphqlClient = new Client({
  url: bffUrl,
  exchanges: [cacheExchange, fetchExchange],
});
