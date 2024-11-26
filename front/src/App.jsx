import { BrowserRouter } from "react-router-dom";
import { useState, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Router from "./Router";
import AuthProvider from "./providers/AuthProvider";
import Header from "./providers/Header";
import Footer from "./providers/Footer";

const App = () => {
  // מצב כהה/בהיר - קריאה מ-localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // המרה למצב בוליאני
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
        },
      }),
    [isDarkMode]
  );

  // פונקציה להחלפת מצב
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode); // שמירת המצב ב-localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Router />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
