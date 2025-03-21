import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../components/themeContext';
import "./style.css";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="page-container home-page">
      <h1>Добро пожаловать в Pet Shop!</h1>
      <p>Здесь вы найдете все лучшее для ваших питомцев!</p>
      <div className="theme-toggle">
        <h2>Current theme: {theme}</h2>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
}

export default Home;