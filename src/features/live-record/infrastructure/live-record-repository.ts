import type { LiveRecord } from "../domain/live-record";

/**
 * 参戦記録の永続化を担うリポジトリのインターフェース。
 *
 * BFF (GraphQL) との結線はまだ行っていないため、関数の型だけを定義したプレースホルダー。
 */
export type LiveRecordRepository = {
  create: (input: Omit<LiveRecord, "id">) => Promise<LiveRecord>;
  findById: (id: string) => Promise<LiveRecord | null>;
};
