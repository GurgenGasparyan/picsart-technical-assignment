import styled from 'styled-components';

export const ViewUserDetailsStyled = styled.span`
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.border};
  }
  > a {
    color: ${(props) => props.theme.text};
    padding: 10px;
    display: inline-block;
    text-decoration: none;
  }
`;
