import styled from "styled-components";

export const RangeStyled = styled.input`
  /* -webkit-appearance: none;
  appearance: none; */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 4px;

  background: #ccc;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: ${({ theme }) => theme.blue.main};
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: ${({ theme }) => theme.blue.main};
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
    border: none;
  }

  &::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.blue.transparent};
  }
  &:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px ${({ theme }) => theme.blue.transparent};
  }
  &:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px ${({ theme }) => theme.blue.transparent};
  }

  &::-moz-range-thumb:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.blue.transparent};
  }
  &:active::-moz-range-thumb {
    box-shadow: 0 0 0 10px ${({ theme }) => theme.blue.transparent};
  }
  &:focus::-moz-range-thumb {
    box-shadow: 0 0 0 10px ${({ theme }) => theme.blue.transparent};
  }
`;
