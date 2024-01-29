import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HeaderStyled, NavigationStyled, ThemeToggleStyled, LogoStyled } from './styles';

import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import picsartLogo from '../../../public/assets/picsart-logo.png';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <HeaderStyled>
      <LogoStyled alt="logo" src={picsartLogo} />
      <NavigationStyled>
        <Link to={'/'} className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to={'/users'} className={pathname.includes('/users') ? 'active' : ''}>
          Users
        </Link>
      </NavigationStyled>
      <ThemeToggleStyled onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
      </ThemeToggleStyled>
    </HeaderStyled>
  );
};
