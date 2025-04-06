import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { describe, it } from 'vitest';

describe('Header', () => {
  it('renders the header with the correct text', () => {
    render(<Header />);
    const element = screen.getByText('Live Football World Cup Scoreboard');
    expect(element).toBeInTheDocument();
  });
});
