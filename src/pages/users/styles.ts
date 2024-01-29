import styled from 'styled-components';

export const ViewUserDetailsStyled = styled.span`
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  background-color: transparent;
  &:hover {
    background-color: white;
  }
  > a {
    color: black;
    padding: 10px;
    display: inline-block;
    text-decoration: none;
  }
`;
