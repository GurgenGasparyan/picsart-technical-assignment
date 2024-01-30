import styled, { createGlobalStyle } from 'styled-components';
import RobotoFont from '../public/fonts/Roboto-Regular.ttf';

export const WrapperStyled = styled.div`
  padding: 16px;
  overflow-y: auto;
  position: relative;
  height: calc(100vh - 70px);
  background: ${({ theme }) => theme.background};
`;

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${RobotoFont}); 
  font-display: swap;
  
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
`;
