import React, { FC, ReactElement } from 'react';
import { CardContentStyled, CardStyled, CartHeaderStyled } from './styles';

interface CardSharedProps {
  children: ReactElement | Array<ReactElement>;
}

interface CardProps extends CardSharedProps {}

interface CardHeaderProps extends CardSharedProps {}

interface CardContentProps extends CardSharedProps {}

export const Card: FC<CardProps> = ({ children }) => {
  const [cardHeader, cardContent] = React.Children.toArray(children);

  return (
    <CardStyled>
      {cardHeader}
      {cardContent}
    </CardStyled>
  );
};

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return <CartHeaderStyled>{children}</CartHeaderStyled>;
};

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return <CardContentStyled>{children}</CardContentStyled>;
};
