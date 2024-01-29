import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { HeaderStyled, NavigationStyled, ThemeToggleStyled, LogoStyled } from './styles';

import { Link } from 'react-router-dom';

import picsartLogo from '../../../public/assets/picsart-logo.png';

export const Header = () => {
  const { pathname } = useLocation();

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
      <ThemeToggleStyled>
        <FaMoon size={24} />
      </ThemeToggleStyled>
    </HeaderStyled>
  );
};
