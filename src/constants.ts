export const LIGHT_THEME = {
  theme: "#fff",
  text: "#4c4c4c",
  subtitle: "#8e8e8e",
  background: "#ebebeb",
  block: "#fff",
  menu: "#f9f9f9",
  button: {
    background: "#ffffff54",
    border: "1px solid #ffffff21",
  },
  toggle: "#cbcbcb",
  red: { main: "#ff6969", transparent: "" },
  orange: { main: "#f2b65d", transparent: "" },
  blue: { main: "#4e7cff", transparent: "#4e7cff36" },
  green: { main: "#53ca75", transparent: "#53ca752b" },
  purple: { main: "#8d5ee2", transparent: "" },
  pink: { main: "#c559a5", transparent: "" },
  transparent: "#2b2b2b1a",
};
export const DARK_THEME = {
  theme: "#000",
  text: "#afb9e5",
  subtitle: "#e0e0e0",
  background: "radial-gradient(#232a4a, black)",
  menu: "#202342",
  toggle: "#0000006e",
  block: "#232a4a",
  button: {
    background: "#00000054",
    border: "1px solid #ffffff21",
  },
  red: { main: "#ffa1a1", transparent: "" },
  orange: { main: "#ffd597", transparent: "" },
  blue: { main: "#799cff", transparent: "#799cff36" },
  green: { main: "#53ca75", transparent: "" },
  purple: { main: "#c3a3ff", transparent: "" },
  pink: { main: "#ffa3e4", transparent: "" },
  transparent: "#ffffff1a",
};

export enum Themes {
  light,
  dark,
}

export const DEFAULT_PASSWORD_PROPS = {
  length: 16,
  hasLowerLetters: true,
  hasUpperLetters: true,
  hasNumbers: true,
  hasSymbols: true,
};

export type PasswordProperties = typeof DEFAULT_PASSWORD_PROPS;

export const NEW_PASSWORD_ANIMATION_DURATION = 400;
export const COPY_MESSAGE_TIMEOUT = 5000;
