import MatchItem from '../match-item/MatchItem';
import { useMatchesReducer } from './hooks/useMatchesReducer';
import { useMatchIntervals } from './hooks/useMatchIntervals';
import { deleteMatch } from './reducers/matchesReducer.ts';
import { MatchStatus } from '../../enums';
import { sortMatchesByScoreAndTime } from '../../utils';

const MatchesTable = () => {
  const { state, dispatch } = useMatchesReducer();

  const handleDeleteMatch = (matchId: string) => {
    dispatch(deleteMatch(matchId));
  };

  useMatchIntervals(state.matches, dispatch);

  const finishedMatches = state.matches.filter(
    (match) => match.status === MatchStatus.FINISHED
  );

  const notFinishedMatches = state.matches
    .filter((match) => match.status !== MatchStatus.FINISHED)
    .sort(sortMatchesByScoreAndTime);

  return (
    <div className="my-6">
      {notFinishedMatches.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-6">Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notFinishedMatches.map((match) => (
              <MatchItem
                key={match.id}
                match={match}
                handleDeleteMatch={handleDeleteMatch}
              />
            ))}
          </div>
        </>
      )}
      {notFinishedMatches.length === 0 && (
        <>
          <h2 className="text-xl font-bold mb-6">Matches Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {finishedMatches.map((match) => (
              <MatchItem
                key={match.id}
                match={match}
                handleDeleteMatch={handleDeleteMatch}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MatchesTable;
