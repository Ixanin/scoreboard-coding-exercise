import React from 'react';
import { Country } from '../../enums/';
import TeamItem from '../team-item/TeamItem';

interface Team {
  name: string;
  code: Country;
  score: number;
}

interface MatchItemProps {
  match: {
    id: number;
    homeTeam: Team;
    awayTeam: Team;
  };
}

const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
  return (
    <tr data-testid={`match-item-${match.id}`}>
      <td className="border px-4 py-2 text-center">
        <TeamItem name={match.homeTeam.name} code={match.homeTeam.code} />
      </td>
      <td className="border px-4 py-2 text-center">
        <TeamItem name={match.awayTeam.name} code={match.awayTeam.code} />
      </td>
      <td className="border px-4 py-2 text-center">
        {match.homeTeam.score} - {match.awayTeam.score}
      </td>
    </tr>
  );
};

export default MatchItem;
