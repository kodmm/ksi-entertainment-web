import type { LiveRecord } from "../domain/live-record";

/**
 * 参戦記録を新規作成するユースケース。
 *
 * infrastructure 層との結線はまだ行っていないプレースホルダー。
 * UI 層は domain/infrastructure を直接参照せず、この層経由で呼び出す。
 */
export const useCreateLiveRecord = () => {
  const createLiveRecord = async (
    input: Omit<LiveRecord, "id">,
  ): Promise<LiveRecord> => {
    void input; // プレースホルダーのため未使用。infrastructure 層と結線する際に使う
    throw new Error("Not implemented");
  };

  return { createLiveRecord };
};
