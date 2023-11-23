import styled from "styled-components";

export const Flex = styled.div<{ d?: "row" | "column" }>`
  display: flex;
  gap: 8px;
  flex-direction: ${({ d }) => d ?? "row"};
`;
