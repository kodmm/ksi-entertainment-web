import type { Match } from "../domain/matching";

/**
 * マッチングの永続化・検索を担うリポジトリのインターフェース。
 *
 * BFF (GraphQL) との結線はまだ行っていないため、関数の型だけを定義したプレースホルダー。
 */
export type MatchingRepository = {
  requestMatch: (input: Omit<Match, "id" | "status">) => Promise<Match>;
  findById: (id: string) => Promise<Match | null>;
};
