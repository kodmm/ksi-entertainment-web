import { BffHealthStatus } from "@/shared/ui/bff-health-status";

import {
  Card,
  CardDescription,
  CardTitle,
  Cards,
  Container,
  Title,
} from "./page.styles";

export default function Home() {
  return (
    <Container>
      <Title>ksi-entertainment</Title>
      <Cards>
        <Card href="/live-record">
          <CardTitle>参戦記録</CardTitle>
          <CardDescription>ライブの参戦記録を残してシェアする</CardDescription>
        </Card>
        <Card href="/matching">
          <CardTitle>マッチング</CardTitle>
          <CardDescription>趣味の合う人とマッチングする</CardDescription>
        </Card>
      </Cards>
      <BffHealthStatus />
    </Container>
  );
}
