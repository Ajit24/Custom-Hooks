import { createContext } from "react";

export const themes = {
  dark: "",
  light: "black-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});