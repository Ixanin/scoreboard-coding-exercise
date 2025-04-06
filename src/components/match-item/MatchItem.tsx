import React from 'react';
import { CountryCode, MatchStatus } from '../../enums/';
import TeamItem from '../team-item/TeamItem';

interface Team {
  code: CountryCode;
  score: number;
}

interface MatchItemProps {
  match: {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    status: MatchStatus;
    matchMinute: number;
  };
  handleDeleteMatch: (matchId: string) => void;
}

const MatchItem: React.FC<MatchItemProps> = ({ match, handleDeleteMatch }) => {
  return (
    <tr data-testid={`match-item-${match.id}`}>
      <td className="border px-4 py-2 text-center">
        <TeamItem code={match.homeTeam.code} />
      </td>
      <td className="border px-4 py-2 text-center">
        <TeamItem code={match.awayTeam.code} />
      </td>
      <td className="border px-4 py-2 text-center">
        {match.homeTeam.score} - {match.awayTeam.score}
      </td>
      <td className="border px-4 py-2 text-center">
        {match.status}
        {match.status === MatchStatus.IN_PROGRESS &&
          match.matchMinute !== undefined &&
          ` (${match.matchMinute}')`}
        <button
          onClick={() => handleDeleteMatch(match.id)}
          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default MatchItem;
