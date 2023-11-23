import { InfoBlockStyled } from "./styles";

type Props = {
  img?: string;
  color: string;
};

export const InfoBlock = ({ color }: Props) => {
  return <InfoBlockStyled $color={color}>InfoBlock</InfoBlockStyled>;
};
