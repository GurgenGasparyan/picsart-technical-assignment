import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: ${(props) => props.theme.primary};
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const LogoStyled = styled.img`
  width: 100px;
`;

export const ThemeToggleStyled = styled.button`
  height: 48px;
  width: 48px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavigationStyled = styled.div`
  > a {
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
    margin-right: 8px;
    &:hover {
      background-color: white;
      color: black;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      background-color: white;
      color: black;
    }
  }
`;
