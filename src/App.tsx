import React from 'react';
import Square from './components/square/Square';
import useLocalStorage from 'use-local-storage';
import './App.scoped.css';


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <span>Easy Darkmode and Themes in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Square />
    </div>
  );
}

export default App;
