import React from 'react';
import { LuLoader2 } from 'react-icons/lu';
import { LoaderWrapperStyled } from './styles';

export const Loader = () => {
  return (
    <LoaderWrapperStyled>
      <LuLoader2 size={64} />
    </LoaderWrapperStyled>
  );
};
