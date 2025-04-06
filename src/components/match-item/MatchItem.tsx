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
}

const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
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
      </td>
    </tr>
  );
};

export default MatchItem;
