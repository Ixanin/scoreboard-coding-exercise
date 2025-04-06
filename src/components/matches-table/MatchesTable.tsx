import { useState } from 'react';
import { CountryCode, MatchStatus } from '../../enums/';
import MatchItem from '../match-item/MatchItem';
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  matches: [
    {
      id: uuidv4(),
      status: MatchStatus.NOT_STARTED,
      homeTeam: { code: CountryCode.Mexico, score: 0 },
      awayTeam: { code: CountryCode.Canada, score: 0 },
      matchMinute: 0,
    },
    {
      id: uuidv4(),
      status: MatchStatus.IN_PROGRESS,
      homeTeam: { code: CountryCode.Spain, score: 1 },
      awayTeam: { code: CountryCode.Brazil, score: 0 },
      matchMinute: 0,
    },
    {
      id: uuidv4(),
      status: MatchStatus.NOT_STARTED,
      homeTeam: { code: CountryCode.Germany, score: 0 },
      awayTeam: { code: CountryCode.France, score: 0 },
      matchMinute: 0,
    },
    {
      id: uuidv4(),
      status: MatchStatus.IN_PROGRESS,
      homeTeam: { code: CountryCode.Uruguay, score: 2 },
      awayTeam: { code: CountryCode.Italy, score: 2 },
      matchMinute: 0,
    },
    {
      id: uuidv4(),
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Argentina', code: CountryCode.Argentina, score: 0 },
      awayTeam: { name: 'Australia', code: CountryCode.Australia, score: 0 },
      matchMinute: 0,
    },
  ],
};

const MatchesTable = () => {
  const [state] = useState(initialState);

  return (
    <div className="matches-table my-6">
      <h2 className="text-xl font-bold mb-4">Matches</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Home Team</th>
            <th className="py-2">Away Team</th>
            <th className="py-2">Score</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {state.matches.map((match) => (
            <MatchItem key={match.id} match={match} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
