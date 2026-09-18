import type { Match } from "../domain/matching";

/**
 * マッチングをリクエストするユースケース。
 *
 * infrastructure 層との結線はまだ行っていないプレースホルダー。
 * UI 層は domain/infrastructure を直接参照せず、この層経由で呼び出す。
 */
export const useCreateMatch = () => {
  const createMatch = async (
    input: Omit<Match, "id" | "status">,
  ): Promise<Match> => {
    void input; // プレースホルダーのため未使用。infrastructure 層と結線する際に使う
    throw new Error("Not implemented");
  };

  return { createMatch };
};
