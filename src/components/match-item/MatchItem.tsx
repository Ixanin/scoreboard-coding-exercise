import React from 'react';
import { MatchStatus } from '../../enums/';
import TeamItem from '../team-item/TeamItem';
import { Team } from '../../types/types';
import MatchStatusDisplay from '../match-status-display/MatchStatusDisplay';

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
    <div
      data-testid={`match-item-${match.id}`}
      className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500 relative group"
    >
      <button
        onClick={() => handleDeleteMatch(match.id)}
        className="absolute top-2 right-2 bg-transparent text-transparent group-hover:text-red-500 hover:bg-red-50 font-bold py-1 px-2 rounded transition-colors"
        aria-label="Delete match"
      >
        X
      </button>

      <div className="flex justify-between items-center mb-3">
        <MatchStatusDisplay
          status={match.status}
          matchMinute={match.matchMinute}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between p-8">
        <div className="mb-2 sm:mb-0">
          <TeamItem code={match.homeTeam.code} />
        </div>
        <div className="font-semibold text-[36px]">
          {match.homeTeam.score} - {match.awayTeam.score}
        </div>
        <TeamItem code={match.awayTeam.code} />
      </div>
    </div>
  );
};

export default MatchItem;
