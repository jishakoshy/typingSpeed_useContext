import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme } = useTheme();  // Get current theme

  return (
    <header>
      <h1>Current Mode: {theme}</h1>
    </header>
  );
};

export default Header;