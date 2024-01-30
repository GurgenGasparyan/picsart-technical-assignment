import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';

import { useTheme } from '../hooks';

interface ComponentProps {
  children: React.ReactElement;
}

export const withThemeProvider = (Component: React.ComponentType<ComponentProps>) => {
  return (props: any) => {
    const { theme } = useTheme();

    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
};
