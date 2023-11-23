/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { ButtonTypes } from "./constants";
import { ButtonStyled } from "./styles";

type Props = {
  icon: React.ReactNode;
  text?: string;
  type?: ButtonTypes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  icon,
  text,
  type,
  children,
  ...restProps
}: Props) => {
  return (
    <ButtonStyled {...restProps}>
      {icon}
      {children}
    </ButtonStyled>
  );
};
