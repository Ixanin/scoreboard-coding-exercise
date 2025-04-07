import MatchItem from '../match-item/MatchItem';
import { useMatchesReducer } from './hooks/useMatchesReducer';
import { useMatchIntervals } from './hooks/useMatchIntervals';
import { deleteMatch } from './reducers/matchesReducer.ts';

const MatchesTable = () => {
  const { state, dispatch } = useMatchesReducer();

  const handleDeleteMatch = (matchId: string) => {
    dispatch(deleteMatch(matchId));
  };

  useMatchIntervals(state.matches, dispatch);

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {state.matches.map((match) => (
          <MatchItem
            key={match.id}
            match={match}
            handleDeleteMatch={handleDeleteMatch}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchesTable;
