import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';

import { useTheme } from '../hooks';

export const withThemeProvider = (Component: React.ComponentType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const { theme } = useTheme();

    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
};
