import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
  it('renders the footer with GitHub link', () => {
    render(<Footer />);

    expect(screen.getByText(/view this project on/i)).toBeInTheDocument();

    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.tagName).toBe('A');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/Ixanin/scoreboard-coding-exercise'
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
