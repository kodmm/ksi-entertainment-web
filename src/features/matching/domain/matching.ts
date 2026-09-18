/**
 * マッチング1件を表すエンティティ。
 *
 * まだ結線前のプレースホルダーのため、フィールドは仮のもの。
 */
export type Match = {
  id: string;
  userId: string;
  matchedUserId: string;
  status: "pending" | "accepted" | "declined";
};
