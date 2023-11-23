import styled from "styled-components";

export const InfoBlockStyled = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: 10px;
  width: 200px;
  height: 150px;
  border-radius: 15px;
  color: #fff;
`;
