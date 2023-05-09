import { FC, useMemo, useState } from "react";
import { LOCALSTORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
