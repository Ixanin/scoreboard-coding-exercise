import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MatchItem from './MatchItem';
import { Country } from '../../enums/';

describe('MatchItem', () => {
  const mockedMatch = {
    id: 1,
    homeTeam: { name: 'Spain', code: Country.Spain, score: 2 },
    awayTeam: { name: 'Brazil', code: Country.Brazil, score: 1 },
  };

  it('renders with correct data-testid', () => {
    render(<MatchItem match={mockedMatch} />);
    const matchItem = screen.getByTestId(`match-item-${mockedMatch.id}`);
    expect(matchItem).toBeInTheDocument();
  });

  it('displays correct team names', () => {
    render(<MatchItem match={mockedMatch} />);
    expect(screen.getByText('Spain')).toBeInTheDocument();
    expect(screen.getByText('Brazil')).toBeInTheDocument();
  });

  it('displays correct score', () => {
    render(<MatchItem match={mockedMatch} />);
    expect(screen.getByText('2 - 1')).toBeInTheDocument();
  });

  it('renders flag components', () => {
    render(<MatchItem match={mockedMatch} />);
    const homeFlag = screen.getByTestId(`flag-${mockedMatch.homeTeam.code}`);
    const awayFlag = screen.getByTestId(`flag-${mockedMatch.awayTeam.code}`);

    expect(homeFlag).toBeInTheDocument();
    expect(awayFlag).toBeInTheDocument();
  });
});
