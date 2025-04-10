import { MatchStatus } from '../../../enums';
import { createRandomInitialState } from '../../../utils';
import { Match } from '../../../types/types.ts';

export interface MatchesState {
  matches: Match[];
}

export const initialState = createRandomInitialState();

export enum MatchActionTypes {
  UPDATE_SCORE = 'UPDATE_SCORE',
  UPDATE_MATCH_STATUS = 'UPDATE_MATCH_STATUS',
  FINISH_MATCH = 'FINISH_MATCH',
  TICK_MATCH_MINUTE = 'TICK_MATCH_MINUTE',
  DELETE_MATCH = 'DELETE_MATCH',
}

interface UpdateScoreAction {
  type: MatchActionTypes.UPDATE_SCORE;
  payload: {
    matchId: string;
    homeTeamScore: number;
    awayTeamScore: number;
  };
}

interface DeleteMatchAction {
  type: MatchActionTypes.DELETE_MATCH;
  payload: {
    matchId: string;
  };
}

interface UpdateMatchStatusAction {
  type: MatchActionTypes.UPDATE_MATCH_STATUS;
  payload: {
    matchId: string;
    status: MatchStatus;
  };
}

interface FinishMatchAction {
  type: MatchActionTypes.FINISH_MATCH;
  payload: {
    matchId: string;
  };
}

interface TickMatchMinuteAction {
  type: MatchActionTypes.TICK_MATCH_MINUTE;
  payload: {
    matchId: string;
  };
}

export type MatchAction =
  | UpdateScoreAction
  | UpdateMatchStatusAction
  | FinishMatchAction
  | DeleteMatchAction
  | TickMatchMinuteAction;

export const matchesReducer = (
  state = initialState,
  action: MatchAction
): MatchesState => {
  switch (action.type) {
    case MatchActionTypes.UPDATE_SCORE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.matchId
            ? {
                ...match,
                homeTeam: {
                  ...match.homeTeam,
                  score: action.payload.homeTeamScore,
                },
                awayTeam: {
                  ...match.awayTeam,
                  score: action.payload.awayTeamScore,
                },
              }
            : match
        ),
      };

    case MatchActionTypes.UPDATE_MATCH_STATUS:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.matchId
            ? {
                ...match,
                status: action.payload.status,
                ...(action.payload.status === MatchStatus.IN_PROGRESS &&
                !match.startTime
                  ? { startTime: Date.now() }
                  : {}),
              }
            : match
        ),
      };

    case MatchActionTypes.FINISH_MATCH: {
      const finishedMatch = state.matches.find(
        (match) => match.id === action.payload.matchId
      );
      return finishedMatch
        ? {
            ...state,
            matches: state.matches.filter(
              (match) => match.id !== action.payload.matchId
            ),
          }
        : state;
    }

    case MatchActionTypes.TICK_MATCH_MINUTE:
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.matchId &&
          match.status === MatchStatus.IN_PROGRESS
            ? {
                ...match,
                matchMinute: match.matchMinute + 1,
                ...(match.matchMinute + 1 === 45
                  ? { status: MatchStatus.HALF_TIME }
                  : {}),
                ...(match.matchMinute + 1 === 90
                  ? { status: MatchStatus.FINISHED }
                  : {}),
              }
            : match
        ),
      };

    case MatchActionTypes.DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter(
          (match) => match.id !== action.payload.matchId
        ),
      };

    default:
      return state;
  }
};

// Action creators
export const updateScore = (
  matchId: string,
  homeTeamScore: number,
  awayTeamScore: number
): UpdateScoreAction => ({
  type: MatchActionTypes.UPDATE_SCORE,
  payload: { matchId, homeTeamScore, awayTeamScore },
});

export const updateMatchStatus = (
  matchId: string,
  status: MatchStatus
): UpdateMatchStatusAction => ({
  type: MatchActionTypes.UPDATE_MATCH_STATUS,
  payload: { matchId, status },
});

export const deleteMatch = (matchId: string): DeleteMatchAction => ({
  type: MatchActionTypes.DELETE_MATCH,
  payload: { matchId },
});

export const tickMatchMinute = (matchId: string): TickMatchMinuteAction => ({
  type: MatchActionTypes.TICK_MATCH_MINUTE,
  payload: { matchId },
});
