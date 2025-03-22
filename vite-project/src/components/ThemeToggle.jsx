import React, { useContext } from "react";
import ThemeContext from "./themeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default ThemeToggle;