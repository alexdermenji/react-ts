import React from "react";

export const enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export const LOCALSTORAGE_THEME_KEY = "theme";
