import React from 'react';
import Flag from 'react-world-flags';
import { CountryCode, CountryName } from '../../enums/';

interface TeamItemProps {
  code: CountryCode;
}

const TeamItem: React.FC<TeamItemProps> = ({ code }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Flag
        code={code}
        data-testid={`flag-${code}`}
        style={{ width: '48px', height: '48px', marginRight: '8px' }}
      />
      {CountryName[code]}
    </div>
  );
};

export default TeamItem;
