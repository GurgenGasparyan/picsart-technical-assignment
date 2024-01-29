import styled from 'styled-components';

export const LoaderWrapperStyled = styled.div`
  top: 0;
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  @keyframes rotateLoader {
    50% {
      transform: rotate(360deg);
    }
  }
  > svg {
    color: ${({ theme }) => theme.primary};
    animation: rotateLoader 2s infinite;
  }
`;
