import { useState } from 'react';
import { Country, MatchStatus } from '../../enums/';
import MatchItem from '../match-item/MatchItem';

export const initialState = {
  matches: [
    {
      id: 0,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Mexico', code: Country.Mexico, score: 0 },
      awayTeam: { name: 'Canada', code: Country.Canada, score: 0 },
    },
    {
      id: 1,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Spain', code: Country.Spain, score: 0 },
      awayTeam: { name: 'Brazil', code: Country.Brazil, score: 0 },
    },
    {
      id: 2,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Germany', code: Country.Germany, score: 0 },
      awayTeam: { name: 'France', code: Country.France, score: 0 },
    },
    {
      id: 3,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Uruguay', code: Country.Uruguay, score: 0 },
      awayTeam: { name: 'Italy', code: Country.Italy, score: 0 },
    },
    {
      id: 4,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Argentina', code: Country.Argentina, score: 0 },
      awayTeam: { name: 'Australia', code: Country.Australia, score: 0 },
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
