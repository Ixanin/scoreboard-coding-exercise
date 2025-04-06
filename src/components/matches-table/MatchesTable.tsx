import { useState } from 'react';
import MatchItem from '../match-item/MatchItem';
import { createRandomInitialState } from '../../utils/createRandomInitialState.ts';

export const initialState = createRandomInitialState();

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
