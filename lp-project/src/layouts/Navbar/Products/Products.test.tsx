import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarProducts from './Products';

describe('<NavbarProducts />', () => {
  test('it should mount', () => {
    render(<NavbarProducts />);

    const navbarProducts = screen.getByTestId('NavbarProducts');

    expect(navbarProducts).toBeInTheDocument();
  });
});