import styled from "styled-components";

export const ToggleChanged = styled.div`
  min-width: 32px;
  height: 16px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 20px;
  position: relative;
  transition: 0.2s background;

  .circle {
    display: block;
    width: 12px;
    height: 12px;
    top: 2px;
    left: 2px;
    position: absolute;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 0 10px #00000038;
    transition: 0.2s;
  }
`;

export const ToggleStyled = styled.label`
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 10px;

  &:hover {
    background: #f2f2f2;
  }

  .original-input {
    display: none;
  }

  .original-input:checked + ${ToggleChanged} {
    background: ${({ theme }) => theme.blue};
  }

  .original-input:checked + ${ToggleChanged} .circle {
    left: calc(100% - 14px);
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 8px;
  user-select: none;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;
