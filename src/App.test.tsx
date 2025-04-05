import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe } from 'vitest';

describe('App', () => {
  it('renders hello world', () => {
    render(<App />);
    const element = screen.getByText('Hello world!');
    expect(element).toBeInTheDocument();
  });
});
