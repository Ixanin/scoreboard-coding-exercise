import { CountryCode, MatchStatus } from '../enums';

export interface Team {
  code: CountryCode;
  score: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: MatchStatus;
  matchMinute: number;
  startTime: number;
}
