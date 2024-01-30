import styled from 'styled-components';

export const SelectStyled = styled.select`
  width: 300px;
  color: ${(props) => props.theme.text};
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: 10px 20px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
