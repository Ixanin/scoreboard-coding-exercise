import { useEffect, useRef, useCallback, Dispatch } from 'react';
import { MatchStatus } from '../../../enums';
import {
  updateScore,
  updateMatchStatus,
  MatchAction,
} from '../reducers/matchesReducer';
import {
  ChanceOfScoreChange,
  MaxIntervalDuration,
  MinIntervalDuration,
  TickTime,
} from '../../../constants';
import { Match } from '../../../types/types.ts';

export const useMatchIntervals = (
  matches: Match[],
  dispatch: Dispatch<MatchAction>
) => {
  const scoreIntervalIdsRef = useRef<number[]>([]);
  const startCheckIntervalRef = useRef<number | null>(null);

  const setupScoreUpdates = useCallback(() => {
    scoreIntervalIdsRef.current.forEach((id) => window.clearInterval(id));

    matches.forEach((match) => {
      if (match.status === MatchStatus.IN_PROGRESS) {
        const intervalTime =
          Math.floor(Math.random() * MaxIntervalDuration) + MinIntervalDuration;
        const id = window.setInterval(() => {
          const scoreChange = Math.random() > ChanceOfScoreChange;

          if (scoreChange) {
            const homeTeamScores = Math.random() > 0.5;
            const newHomeScore = homeTeamScores
              ? match.homeTeam.score + 1
              : match.homeTeam.score;
            const newAwayScore = !homeTeamScores
              ? match.awayTeam.score + 1
              : match.awayTeam.score;

            dispatch(updateScore(match.id, newHomeScore, newAwayScore));
          }
        }, intervalTime);

        scoreIntervalIdsRef.current.push(id);
      }
    });
  }, [matches, dispatch]);

  const checkAndStartMatches = useCallback(() => {
    matches.forEach((match) => {
      if (
        match.status === MatchStatus.NOT_STARTED &&
        match.startTime <= Date.now()
      ) {
        dispatch(updateMatchStatus(match.id, MatchStatus.IN_PROGRESS));
      }
    });
  }, [matches, dispatch]);

  useEffect(() => {
    checkAndStartMatches();

    startCheckIntervalRef.current = window.setInterval(
      checkAndStartMatches,
      TickTime
    );

    setupScoreUpdates();

    return () => {
      if (startCheckIntervalRef.current) {
        window.clearInterval(startCheckIntervalRef.current);
      }

      scoreIntervalIdsRef.current.forEach((id) => window.clearInterval(id));
      scoreIntervalIdsRef.current = [];
    };
  }, [checkAndStartMatches, setupScoreUpdates]);

  useEffect(() => {
    setupScoreUpdates();
  }, [matches, setupScoreUpdates]);
};
