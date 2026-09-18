"use client";

import type { ReactNode } from "react";
import { Provider } from "urql";

import { graphqlClient } from "@/shared/infrastructure/graphql-client";

/**
 * アプリ全体に urql の Client を配布する Provider。
 *
 * `useQuery` 等の urql フックはこの内側でのみ使える。
 */
export function UrqlProvider({ children }: { children: ReactNode }) {
  return <Provider value={graphqlClient}>{children}</Provider>;
}
