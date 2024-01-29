import styled from 'styled-components';

export const AvatarStyled = styled.img`
  width: ${({ width }) => `${width}px`};
  width: ${({ height }) => `${height}px`};
  overflow: hidden;
  border-radius: 50%;
`;
