import React, { ChangeEvent, FC, ReactNode } from 'react';
import { SelectStyled } from './styles';

interface SelectProps {
  children: ReactNode;
  value?: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({ children, value, onChange }) => {
  return (
    <SelectStyled value={value} onChange={onChange} data-testid="select">
      {children}
    </SelectStyled>
  );
};
