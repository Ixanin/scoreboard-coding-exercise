import { render, screen } from '@testing-library/react';
import MatchStatusDisplay from './MatchStatusDisplay';
import { MatchStatus } from '../../enums/';

describe('MatchStatusDisplay', () => {
  it('displays match minute when match is in progress', () => {
    render(
      <MatchStatusDisplay status={MatchStatus.IN_PROGRESS} matchMinute={75} />
    );
    expect(screen.getByText("75'")).toBeInTheDocument();
  });

  it('displays Half-time when match is in half time', () => {
    render(<MatchStatusDisplay status={MatchStatus.HALF_TIME} />);
    expect(screen.getByText('Half-time')).toBeInTheDocument();
  });

  it('displays Full-time when match is finished', () => {
    render(<MatchStatusDisplay status={MatchStatus.FINISHED} />);
    expect(screen.getByText('Full-time')).toBeInTheDocument();
  });

  it('displays Not Started when match has not started yet', () => {
    render(<MatchStatusDisplay status={MatchStatus.NOT_STARTED} />);
    expect(screen.getByText('Not Started')).toBeInTheDocument();
  });

  it('falls back to displaying status text for unknown status', () => {
    // Using 'as MatchStatus' to pass a value not in the enum
    const unknownStatus = 'POSTPONED' as MatchStatus;
    render(<MatchStatusDisplay status={unknownStatus} />);
    expect(screen.getByText('POSTPONED')).toBeInTheDocument();
  });
});
