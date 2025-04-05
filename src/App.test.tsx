import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe } from 'vitest';

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
