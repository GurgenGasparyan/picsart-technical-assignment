import React from 'react';
import { render } from 'test-utils';
import { Header } from './header';

describe('<Header/>', () => {
  it('Should render Header with logo', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('logo')).toBeInTheDocument();
  });

  it('Should render Header with navigation Links', () => {
    const { getAllByRole } = render(<Header />);
    expect(getAllByRole('link')).toHaveLength(2);
  });

  it('Should render Header theme switcher', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('theme-switcher')).toBeInTheDocument();
  });
});
