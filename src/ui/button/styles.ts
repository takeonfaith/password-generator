import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0px 8px;
  gap: 8px;
  min-width: 35px;
  border-radius: 7px;
  color: ${({ theme }) => theme.text};

  cursor: pointer;
  transition: 0.1s transform, 0.1s background, 0.2s filter;

  &:hover {
    filter: brightness(0.8);
    background: ${({ theme }) => theme.button.background};
    outline: ${({ theme }) => theme.button.border};
  }

  &:active {
    transform: scale(0.99);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
