import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 6rem 1.5rem;
  background: #fafafa;

  @media (prefers-color-scheme: dark) {
    background: #000000;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #000000;

  @media (prefers-color-scheme: dark) {
    color: #fafafa;
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 42rem;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Card = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  text-decoration: none;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    border-color: transparent;
    background: rgba(0, 0, 0, 0.04);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.145);
    background: #000000;

    &:hover {
      background: #1a1a1a;
    }
  }
`;

export const CardTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;

  @media (prefers-color-scheme: dark) {
    color: #fafafa;
  }
`;

export const CardDescription = styled.span`
  font-size: 0.875rem;
  color: #52525b;

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
  }
`;
