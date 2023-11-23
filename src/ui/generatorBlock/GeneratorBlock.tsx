import { IconMoon, IconReload, IconSun } from "@tabler/icons-react";
import { useRef, useState } from "react";
import {
  DEFAULT_PASSWORD_PROPS,
  NEW_PASSWORD_ANIMATION_DURATION,
  PasswordProperties,
  Themes,
} from "../../constants";
import { generatePassword } from "../../lib/generatePassword";
import { Button } from "../button/Button";
import { Menu } from "../menu/Menu";
import {
  GeneratorBlockStyled,
  NewPasswordAnimationLayer,
  NewPasswordWrapper,
  PasswordStyled,
  ToggleIcon,
} from "./styles";
import { Toggle } from "../toggle/Toggle";
import { Flex } from "../flex/Flex";

type Props = {
  theme: Themes;
  toggleTheme: () => void;
};

const getColor = (len: number) => {
  if (len < 7) return "red";

  if (len < 12) return "orange";

  if (len < 20) return "blue";

  if (len < 30) return "green";

  if (len < 45) return "purple";

  return "pink";
};

export const GeneratorBlock = ({ theme, toggleTheme }: Props) => {
  const [passwordProps, setPasswordProps] = useState<
    typeof DEFAULT_PASSWORD_PROPS
  >(DEFAULT_PASSWORD_PROPS);
  const strengthColor = getColor(passwordProps.length);
  const [slider, setSlider] = useState(passwordProps.length);
  const timeout = useRef(0);
  const [password, setPassword] = useState(
    generatePassword(
      slider,
      passwordProps.hasLowerLetters,
      passwordProps.hasUpperLetters,
      passwordProps.hasNumbers,
      passwordProps.hasSymbols
    )
  );

  const [newPassword, setNewPassword] = useState<string | null>(null);

  const regenerate = (rules?: PasswordProperties) => {
    return () => {
      const final = rules ?? passwordProps;

      const generated = generatePassword(
        final.length,
        final.hasLowerLetters,
        final.hasUpperLetters,
        final.hasNumbers,
        final.hasSymbols
      );
      setNewPassword(generated);
      setTimeout(() => {
        setPassword(generated);
        setNewPassword(null);
      }, NEW_PASSWORD_ANIMATION_DURATION);
    };
  };

  const handleLengthChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSlider(+e.target.value);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setPasswordProps((prev) => ({ ...prev, length: +e.target.value }));
      regenerate({ ...passwordProps, length: +e.target.value })();
    }, 200);
  };

  const handleToggleChange = (togglePlace: string) => {
    return () => {
      setPasswordProps((prev) => {
        const result = {
          ...prev,
          [togglePlace]: !prev[togglePlace as keyof typeof prev] as boolean,
        };

        regenerate(result)();

        return result;
      });
    };
  };

  return (
    <GeneratorBlockStyled>
      <Button
        className="theme-toggle"
        onClick={toggleTheme}
        icon={theme === Themes.dark ? <IconMoon /> : <IconSun />}
      ></Button>
      <Menu>
        <input
          value={slider}
          type="range"
          onChange={handleLengthChange}
          min={4}
          max={64}
        />
        {slider}
        <Flex d="column">
          <Toggle
            disabled={newPassword !== null}
            onChange={handleToggleChange("hasLowerLetters")}
            checked={passwordProps.hasLowerLetters}
          >
            <Flex>
              <ToggleIcon>a</ToggleIcon>
              Включить обыч. буквы
            </Flex>
          </Toggle>
          <Toggle
            disabled={newPassword !== null}
            onChange={handleToggleChange("hasUpperLetters")}
            checked={passwordProps.hasUpperLetters}
          >
            <Flex>
              <ToggleIcon>A</ToggleIcon>
              Включить загл. буквы
            </Flex>
          </Toggle>
          <Toggle
            disabled={newPassword !== null}
            onChange={handleToggleChange("hasNumbers")}
            checked={passwordProps.hasNumbers}
          >
            <Flex>
              <ToggleIcon>7</ToggleIcon> Включить цифры
            </Flex>
          </Toggle>
          <Toggle
            disabled={newPassword !== null}
            onChange={handleToggleChange("hasSymbols")}
            checked={passwordProps.hasSymbols}
          >
            <Flex>
              <ToggleIcon>#</ToggleIcon>Включить спец. знаки
            </Flex>
          </Toggle>
        </Flex>
      </Menu>
      <NewPasswordWrapper
        passwordLength={passwordProps.length}
        strengthColor={strengthColor}
      >
        <NewPasswordAnimationLayer
          passwordLength={passwordProps.length}
          $strengthColor={strengthColor}
          duration={NEW_PASSWORD_ANIMATION_DURATION}
          className={newPassword !== null ? "animating" : ""}
        >
          {newPassword}
        </NewPasswordAnimationLayer>
        <PasswordStyled
          duration={NEW_PASSWORD_ANIMATION_DURATION}
          passwordLength={passwordProps.length}
          $strengthColor={strengthColor}
          className={newPassword !== null ? "animating" : ""}
        >
          {password}
        </PasswordStyled>
        <Button
          disabled={newPassword !== null}
          icon={<IconReload />}
          onClick={regenerate()}
        >
          Сгенерировать новый пароль
        </Button>
      </NewPasswordWrapper>
    </GeneratorBlockStyled>
  );
};
