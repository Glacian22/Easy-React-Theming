import React from 'react';
import Square from './components/square/Square';
import useLocalStorage from "use-local-storage";
import './App.scoped.css';


function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <span>Easy Darkmode and Themes in React</span>
      <button onClick={switchTheme}>
        SWITCH THEME
      </button>
      <Square />
    </div>
  );
}

export default App;
