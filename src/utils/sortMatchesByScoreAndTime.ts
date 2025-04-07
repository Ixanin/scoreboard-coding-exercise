import { Match } from '../types/types';

export const sortMatchesByScoreAndTime = (a: Match, b: Match): number => {
  const totalScoreA = a.homeTeam.score + a.awayTeam.score;
  const totalScoreB = b.homeTeam.score + b.awayTeam.score;

  if (totalScoreB !== totalScoreA) {
    return totalScoreB - totalScoreA;
  }

  // If total scores are equal, sort by start time (most recent first)
  // Using nullish coalescing to handle potentially undefined startTime
  return (b.startTime ?? 0) - (a.startTime ?? 0);
};
