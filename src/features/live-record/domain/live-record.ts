/**
 * 参戦記録（1回のライブ参戦）を表すエンティティ。
 *
 * まだ結線前のプレースホルダーのため、フィールドは仮のもの。
 */
export type LiveRecord = {
  id: string;
  eventName: string;
  artistName: string;
  venue: string;
  date: string;
};
