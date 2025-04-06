import { render, screen } from '@testing-library/react';
import MatchesTable from './MatchesTable';
import { initialState } from './MatchesTable';

describe('MatchesTable', () => {
  it('renders match items with correct data-testid', () => {
    render(<MatchesTable />);

    initialState.matches.forEach((match) => {
      const matchItem = screen.getByTestId(`match-item-${match.id}`);
      expect(matchItem).toBeInTheDocument();
    });
  });
});
