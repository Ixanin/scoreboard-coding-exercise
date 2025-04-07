import { sortMatchesByScoreAndTime } from './sortMatchesByScoreAndTime';
import { Match } from '../types/types';
import { MatchStatus } from '../enums';

describe('sortMatchesByScoreAndTime', () => {
  const createMatch = (
    homeScore: number,
    awayScore: number,
    startTime: number,
    id: string = '1'
  ): Match => ({
    id,
    homeTeam: {
      id: '1',
      name: 'Home Team',
      code: 'HOME',
      score: homeScore,
    },
    awayTeam: {
      id: '2',
      name: 'Away Team',
      code: 'AWAY',
      score: awayScore,
    },
    startTime,
    status: MatchStatus.FINISHED,
    matchMinute: 90,
  });

  test('sorts matches by total score (descending)', () => {
    const matchA = createMatch(3, 2, 1000, 'A'); // Total score: 5
    const matchB = createMatch(2, 1, 1000, 'B'); // Total score: 3
    const matchC = createMatch(0, 1, 1000, 'C'); // Total score: 1

    const matches = [matchB, matchC, matchA];
    const sortedMatches = [...matches].sort(sortMatchesByScoreAndTime);

    expect(sortedMatches[0].id).toBe('A'); // Highest score first
    expect(sortedMatches[1].id).toBe('B');
    expect(sortedMatches[2].id).toBe('C'); // Lowest score last
  });

  test('sorts matches with equal scores by start time (most recent first)', () => {
    const matchA = createMatch(2, 1, 1000, 'A'); // Total score: 3, older
    const matchB = createMatch(1, 2, 2000, 'B'); // Total score: 3, newer
    const matchC = createMatch(2, 1, 1500, 'C'); // Total score: 3, middle

    const matches = [matchA, matchC, matchB];
    const sortedMatches = [...matches].sort(sortMatchesByScoreAndTime);

    expect(sortedMatches[0].id).toBe('B'); // Most recent first
    expect(sortedMatches[1].id).toBe('C');
    expect(sortedMatches[2].id).toBe('A'); // Oldest last
  });

  test('correctly sorts a complex mix of matches', () => {
    const matchA = createMatch(3, 3, 1000, 'A'); // Total score: 6, older
    const matchB = createMatch(4, 1, 2000, 'B'); // Total score: 5, newer
    const matchC = createMatch(2, 3, 1500, 'C'); // Total score: 5, middle
    const matchD = createMatch(1, 0, 3000, 'D'); // Total score: 1, newest

    const matches = [matchD, matchB, matchC, matchA];
    const sortedMatches = [...matches].sort(sortMatchesByScoreAndTime);

    expect(sortedMatches[0].id).toBe('A'); // Highest score
    expect(sortedMatches[1].id).toBe('B'); // Equal score, more recent
    expect(sortedMatches[2].id).toBe('C'); // Equal score, less recent
    expect(sortedMatches[3].id).toBe('D'); // Lowest score
  });
});
