import React from 'react';
import { render, fireEvent } from 'test-utils';
import { Select } from './select';

const onSelect = jest.fn();

describe('<Select/>', () => {
  it('Should render Select with options', () => {
    const { getAllByRole } = render(
      <Select onChange={onSelect}>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Select>
    );

    expect(getAllByRole('option')).toHaveLength(3);
  });

  it('Should call onChange when selecting option', () => {
    const { getByTestId } = render(
      <Select onChange={onSelect}>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Select>
    );

    fireEvent.change(getByTestId('select'), { target: { value: 1 } });
    expect(onSelect).toHaveBeenCalled();
  });
});
