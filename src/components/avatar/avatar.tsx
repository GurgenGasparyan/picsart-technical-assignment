import React, { FC, ImgHTMLAttributes } from 'react';

import { AvatarStyled } from './styles';

export const Avatar: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  height = 48,
  width = 48,
  ...props
}) => {
  return <AvatarStyled height={height} width={width} {...props} />;
};
