import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('Check on submit working correctly', () => {
    let initialValue = 0;
    let counter = initialValue;
    const onSubmit = () => {
      counter++;
    };

    const { container } = render(<Header onSubmit={onSubmit} />);
    fireEvent.submit(container.querySelector('form'));

    expect(counter).toBe(initialValue + 1);
  });

  it('Check onChange working correctly', () => {
    const value = 'Hello, world';

    const onSubmit = (text) => {
      expect(text).toBe(value);
    };

    const { container } = render(<Header onSubmit={onSubmit} />);
    fireEvent.change(container.querySelector('input'), {
      target: { value: 'Hello, world' },
    });

    fireEvent.submit(container.querySelector('form'));
  });
});
