import { ToggleChanged, ToggleStyled, ToggleWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Toggle = ({
  children,
  checked,
  onChange,
  ...restProps
}: Props) => {
  return (
    <ToggleStyled>
      <ToggleWrapper>
        <input
          {...restProps}
          checked={checked}
          onChange={onChange}
          className="original-input"
          type="checkbox"
        />

        <ToggleChanged tabIndex={0}>
          <div className="circle"></div>
        </ToggleChanged>
        {children}
      </ToggleWrapper>
    </ToggleStyled>
  );
};
