import { v4 as uuidv4 } from 'uuid';
import { CountryCode, MatchStatus } from '../enums';
import {
  Match,
  MatchesState,
} from '../components/matches-table/reducers/matchesReducer.ts';

export const createRandomInitialState = (): MatchesState => {
  const countryCodes = Object.values(CountryCode);

  const numberOfMatches = Math.floor(Math.random() * 6) + 5;

  const matches: Match[] = [];
  const usedCountryCodes: CountryCode[] = [];

  for (let i = 0; i < numberOfMatches; i++) {
    const homeTeamCode = getRandomUnusedCountry(countryCodes, usedCountryCodes);
    usedCountryCodes.push(homeTeamCode);

    const awayTeamCode = getRandomUnusedCountry(countryCodes, usedCountryCodes);
    usedCountryCodes.push(awayTeamCode);

    if (usedCountryCodes.length > countryCodes.length - 4) {
      usedCountryCodes.length = 0;
    }

    const startTime = Date.now() + Math.floor(Math.random() * 15000);

    matches.push({
      id: uuidv4(),
      status: MatchStatus.NOT_STARTED,
      homeTeam: {
        code: homeTeamCode,
        score: 0,
      },
      awayTeam: {
        code: awayTeamCode,
        score: 0,
      },
      matchMinute: 0,
      startTime,
    });
  }

  return {
    matches,
    finishedGames: [],
  };
};

const getRandomUnusedCountry = (
  allCountries: CountryCode[],
  usedCountries: CountryCode[]
): CountryCode => {
  const availableCountries = allCountries.filter(
    (code) => !usedCountries.includes(code)
  );

  if (availableCountries.length === 0) {
    return allCountries[Math.floor(Math.random() * allCountries.length)];
  }

  return availableCountries[
    Math.floor(Math.random() * availableCountries.length)
  ];
};
