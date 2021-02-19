import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Tests on VideoCard component', () => {
  it('Check menu icon is rendered correctly', () => {
    const imageAlt = 'Menu Icon';
    const { getByAltText } = render(<Header />);

    expect(getByAltText(imageAlt).tagName).toBe('IMG');
  });

  it('Check user icon is rendered correctly', () => {
    const imageAlt = 'User Icon';
    const { getByAltText } = render(<Header />);

    expect(getByAltText(imageAlt).tagName).toBe('IMG');
  });

  it('Check dark mode is rendered correctly', () => {
    const text = 'Dark Mode';
    const { getByText } = render(<Header />);

    expect(getByText(text).tagName).toBe('P');
  });
});
