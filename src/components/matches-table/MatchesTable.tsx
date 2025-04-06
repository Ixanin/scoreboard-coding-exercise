import { useState } from 'react';

enum MatchStatus {
  NOT_STARTED = 'NOT_STARTED',
  HALF_TIME = 'HALF_TIME',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export const initialState = {
  matches: [
    {
      id: 0,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Mexico', countryCode: 'mx', score: 0 },
      awayTeam: { name: 'Canada', countryCode: 'ca', score: 0 },
    },
    {
      id: 1,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Spain', countryCode: 'es', score: 0 },
      awayTeam: { name: 'Brazil', countryCode: 'br', score: 0 },
    },
    {
      id: 2,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Germany', countryCode: 'de', score: 0 },
      awayTeam: { name: 'France', countryCode: 'fr', score: 0 },
    },
    {
      id: 3,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Uruguay', countryCode: 'uy', score: 0 },
      awayTeam: { name: 'Italy', countryCode: 'it', score: 0 },
    },
    {
      id: 4,
      status: MatchStatus.NOT_STARTED,
      homeTeam: { name: 'Argentina', countryCode: 'ar', score: 0 },
      awayTeam: { name: 'Australia', countryCode: 'au', score: 0 },
    },
  ],
};

const MatchesTable = () => {
  const [state, setState] = useState(initialState);

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
            <tr key={match.id}>
              <td className="border px-4 py-2">{match.homeTeam.name}</td>
              <td className="border px-4 py-2">{match.awayTeam.name}</td>
              <td className="border px-4 py-2">
                {match.homeTeam.score} - {match.awayTeam.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
