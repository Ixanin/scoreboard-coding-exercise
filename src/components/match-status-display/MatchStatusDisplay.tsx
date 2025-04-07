import React from 'react';
import { MatchStatus } from '../../enums/';

interface MatchStatusProps {
  status: MatchStatus;
  matchMinute?: number;
}

const MatchStatusDisplay: React.FC<MatchStatusProps> = ({
  status,
  matchMinute,
}) => {
  const getStatusText = () => {
    switch (status) {
      case MatchStatus.IN_PROGRESS:
        return `${matchMinute}'`;
      case MatchStatus.HALF_TIME:
        return 'Half-time';
      case MatchStatus.FINISHED:
        return 'Full-time';
      case MatchStatus.NOT_STARTED:
        return 'Not Started';
      default:
        return status;
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{getStatusText()}</span>
    </div>
  );
};

export default MatchStatusDisplay;
