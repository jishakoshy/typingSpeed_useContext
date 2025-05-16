import { useTheme } from './ThemeContext';

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();

  return <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>;
};


export default ThemeButton;