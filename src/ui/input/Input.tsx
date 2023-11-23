import { InputStyled, InputWrapper } from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...restProps }: Props) => {
  return (
    <InputWrapper>
      <InputStyled {...restProps} />
    </InputWrapper>
  );
};
