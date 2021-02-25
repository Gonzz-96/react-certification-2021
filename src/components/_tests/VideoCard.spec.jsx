import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from '../VideoCard';

describe('Tests on VideoCard component', () => {
  it('Check title is being rendered correctly', () => {
    const title = 'Test';
    render(<VideoCard title={title} />);

    expect(screen.getByText(title).tagName).toBe('P');
  });

  it('Check description is being rendered correctly', () => {
    const description = 'Test';
    render(<VideoCard description={description} />);

    expect(screen.getByText(description).tagName).toBe('P');
  });

  it('Check thumbnail is being rendered correctly', () => {
    const thumbnail = 'Test';
    render(<VideoCard alt={thumbnail} />);

    expect(screen.getByAltText(thumbnail).tagName).toBe('IMG');
  });
});
