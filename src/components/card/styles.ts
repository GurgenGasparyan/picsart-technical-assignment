import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-inline: auto;
  border-radius: 16px;
  border: ${(props) => `1px solid ${props.theme.border}`};
  overflow: hidden;
  box-shadow: none;
  transform-origin: center center;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const CartHeaderStyled = styled.div`
  border-bottom: 1px solid grey;
  padding: 5px 0 10px;
`;

export const CardContentStyled = styled.div`
  flex-grow: 1;
  padding: 10px 0 5px;
`;
