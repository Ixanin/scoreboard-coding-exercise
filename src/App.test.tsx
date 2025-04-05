import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe, it } from 'vitest';

describe('App', () => {
  it.skip('renders hello world', () => {
    render(<App />);
    const element = screen.getByText('Hello world!');
    expect(element).toBeInTheDocument();
  });
});
