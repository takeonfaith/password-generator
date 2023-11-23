export const LIGHT_THEME = {
  theme: "#fff",
  text: "#4c4c4c",
  background: "#ebebeb",
  block: "#fff",
  menu: "#f9f9f9",
  button: {
    background: "#ffffff54",
    border: "1px solid #ffffff21",
  },
  red: "#ff6969",
  orange: "#f2b65d",
  toggle: "#cbcbcb",
  blue: "#4e7cff",
  green: "#53ca75",
  purple: "#8d5ee2",
  pink: "#c559a5",
};
export const DARK_THEME = {
  theme: "#000",
  text: "#afb9e5",
  background: "radial-gradient(#232a4a, black)",
  menu: "#202342",
  toggle: "#0000006e",
  block: "#232a4a",
  button: {
    background: "#00000054",
    border: "1px solid #ffffff21",
  },
  red: "#ffa1a1",
  orange: "#ffd597",
  blue: "#799cff",
  green: "#53ca75",
  purple: "#c3a3ff",
  pink: "#ffa3e4",
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
