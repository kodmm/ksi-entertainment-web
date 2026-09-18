"use client";

import { gql, useQuery } from "urql";

import { Status } from "./bff-health-status.styles";

const HEALTH_QUERY = gql`
  query Health {
    health
  }
`;

type HealthQuery = {
  health: string;
};

/**
 * BFF との GraphQL 疎通確認用の表示。
 *
 * `{ health }` クエリを実行し、結果に応じて「ok / 確認中 / エラー」を出す。
 * BFF が起動していない・レスポンスが "ok" 以外の場合は「エラー」表示になる。
 */
export function BffHealthStatus() {
  const [{ data, error, fetching }] = useQuery<HealthQuery>({
    query: HEALTH_QUERY,
  });

  const status = fetching
    ? "確認中"
    : error || data?.health !== "ok"
      ? "エラー"
      : "ok";

  return <Status>BFF接続状態: {status}</Status>;
}
