import React from 'react';
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
      <span>BOOP</span>
      <button onClick={switchTheme}>
        SWITCH THEME
      </button>
    </div>
  );
}

export default App;
