import React from 'react';
import Flag from 'react-world-flags';
import { Country } from '../../enums/';

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
    <tr key={match.id}>
      <td className="border px-4 py-2 text-center">
        <div className="flex items-center justify-center">
          <Flag
            code={match.homeTeam.code}
            style={{ width: '48px', marginRight: '8px' }}
          />
          {match.homeTeam.name}
        </div>
      </td>
      <td className="border px-4 py-2 text-center">
        <div className="flex items-center justify-center">
          <Flag
            code={match.awayTeam.code}
            style={{ width: '48px', marginRight: '8px' }}
          />
          {match.awayTeam.name}
        </div>
      </td>
      <td className="border px-4 py-2 text-center">
        {match.homeTeam.score} - {match.awayTeam.score}
      </td>
    </tr>
  );
};

export default MatchItem;
