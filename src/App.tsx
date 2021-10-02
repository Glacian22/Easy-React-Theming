import React from 'react';
import useLocalStorage from "use-local-storage";
import './App.css';

const Square = () => {
  return (
    <div className='square'>
      Le Square
    </div>
  )
}

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
      <Square/>
    </div>
  );
}

export default App;
