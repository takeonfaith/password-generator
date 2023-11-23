import React, { FC } from "react";
import { MenuStyled } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Menu: FC<Props> = ({ children }) => {
  return <MenuStyled>{children}</MenuStyled>;
};
