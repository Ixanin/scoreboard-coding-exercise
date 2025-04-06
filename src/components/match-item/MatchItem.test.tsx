import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MatchItem from './MatchItem';
import { CountryCode, MatchStatus } from '../../enums/';

describe('MatchItem', () => {
  const mockedMatch = {
    id: '1',
    homeTeam: { code: CountryCode.Spain, score: 2 },
    awayTeam: { code: CountryCode.Brazil, score: 1 },
    status: MatchStatus.IN_PROGRESS,
    matchMinute: 45,
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

  it('displays match status and minute for in-progress matches', () => {
    render(<MatchItem match={mockedMatch} />);
    expect(screen.getByText(/IN_PROGRESS \(45'\)/)).toBeInTheDocument();
  });

  it('does not display minute for matches not in progress', () => {
    const notStartedMatch = {
      ...mockedMatch,
      status: MatchStatus.NOT_STARTED,
    };
    render(<MatchItem match={notStartedMatch} />);
    expect(screen.getByText('NOT_STARTED')).toBeInTheDocument();
    expect(screen.queryByText(/\(\d+'\)/)).not.toBeInTheDocument();
  });
});
