import { useReducer, useCallback, useEffect } from 'react';
import {
  matchesReducer,
  initialState,
  updateMatchStatus,
  tickMatchMinute,
  getFinishedMatchesSummary,
} from '../reducers/matchesReducer';
import { MatchStatus } from '../../../enums';
import { DurationOfHalfTimeBreak, TickTime } from '../../../constants';

export const useMatchesReducer = () => {
  const [state, dispatch] = useReducer(matchesReducer, initialState);

  useEffect(() => {
    const intervalIds: number[] = [];

    state.matches.forEach((match) => {
      if (match.status === MatchStatus.IN_PROGRESS) {
        const id = window.setInterval(() => {
          dispatch(tickMatchMinute(match.id));
        }, TickTime);
        intervalIds.push(id);
      }

      if (match.status === MatchStatus.HALF_TIME) {
        const id = window.setTimeout(() => {
          dispatch(updateMatchStatus(match.id, MatchStatus.IN_PROGRESS));
        }, DurationOfHalfTimeBreak);
        intervalIds.push(id);
      }
    });

    return () => {
      intervalIds.forEach((id) => {
        window.clearInterval(id);
        window.clearTimeout(id);
      });
    };
  }, [state.matches]);

  const getSummary = useCallback(() => {
    return getFinishedMatchesSummary(state);
  }, [state]);

  return {
    state,
    dispatch,
    getSummary,
  };
};
