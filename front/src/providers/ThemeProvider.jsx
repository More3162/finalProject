import { createContext, useContext, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // מצב כהה/בהיר - קריאה מ-localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // החלפה למצב בוליאני
  });

  // יצירת Theme דינמי
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: isDarkMode ? "#90caf9" : "#1976d2",
          },
          secondary: {
            main: isDarkMode ? "#f48fb1" : "#d81b60",
          },
          background: {
            default: isDarkMode ? "#121212" : "#ffffff",
            paper: isDarkMode ? "#1d1d1d" : "#f5f5f5",
          },
          text: {
            primary: isDarkMode ? "#ffffff" : "#000000",
            secondary: isDarkMode ? "#aaaaaa" : "#333333",
          },
        },
        typography: {
          h1: {
            color: isDarkMode ? "#ffffff" : "#000000", // כותרות גדולות
          },
          h2: {
            color: isDarkMode ? "#ffffff" : "#000000", // כותרות בינוניות
          },
          body1: {
            color: isDarkMode ? "#ffffff" : "#000000", // טקסט רגיל
          },
        },
      }),
    [isDarkMode]
  );

  // פונקציה להחלפת מצב
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const ctx = { isDarkMode, setIsDarkMode, toggleDarkMode };

  return (
    <ThemeContext.Provider value={ctx}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};

export default ThemeProvider;
