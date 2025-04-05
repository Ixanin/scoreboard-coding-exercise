import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Vite + React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders count button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /count is/i });
  expect(buttonElement).toBeInTheDocument();
});
