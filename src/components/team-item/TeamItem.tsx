import React from 'react';
import Flag from 'react-world-flags';
import { Country } from '../../enums/';

interface TeamItemProps {
  name: string;
  code: Country;
}

const TeamItem: React.FC<TeamItemProps> = ({ name, code }) => {
  return (
    <div className="flex items-center justify-center">
      <Flag
        code={code}
        data-testid={`flag-${code}`}
        style={{ width: '48px', marginRight: '8px' }}
      />
      {name}
    </div>
  );
};

export default TeamItem;
