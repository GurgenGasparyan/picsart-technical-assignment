import styled, { createGlobalStyle } from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 16px;
  overflow-y: auto;
  position: relative;
  height: calc(100vh - 70px);
  background: ${({ theme }) => theme.background};
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
`;
