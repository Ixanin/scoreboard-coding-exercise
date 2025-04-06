import { describe, it, expect, vi } from 'vitest';
import { createRandomInitialState } from './';
import { MatchStatus, CountryCode } from '../enums';

describe('createRandomInitialState', () => {
  it('should generate between 5 and 10 matches', () => {
    const state = createRandomInitialState();
    expect(state.matches.length).toBeGreaterThanOrEqual(5);
    expect(state.matches.length).toBeLessThanOrEqual(10);
    expect(state.finishedGames).toEqual([]);
  });

  it('should set all matches to NOT_STARTED status', () => {
    const state = createRandomInitialState();
    state.matches.forEach((match) => {
      expect(match.status).toBe(MatchStatus.NOT_STARTED);
    });
  });

  it('should set all teams with score 0', () => {
    const state = createRandomInitialState();
    state.matches.forEach((match) => {
      expect(match.homeTeam.score).toBe(0);
      expect(match.awayTeam.score).toBe(0);
    });
  });

  it('should generate valid country codes for teams', () => {
    const state = createRandomInitialState();
    const countryCodeValues = Object.values(CountryCode);

    state.matches.forEach((match) => {
      expect(countryCodeValues).toContain(match.homeTeam.code);
      expect(countryCodeValues).toContain(match.awayTeam.code);
    });
  });

  it('should set startTime between now and 15 seconds in the future', () => {
    const now = Date.now();
    vi.spyOn(Date, 'now').mockImplementation(() => now);

    const state = createRandomInitialState();

    state.matches.forEach((match) => {
      expect(match.startTime).toBeGreaterThanOrEqual(now);
      expect(match.startTime).toBeLessThanOrEqual(now + 15000);
    });
  });

  it('should generate unique IDs for matches', () => {
    const state = createRandomInitialState();
    const ids = state.matches.map((match) => match.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should set matchMinute to 0 for all matches', () => {
    const state = createRandomInitialState();
    state.matches.forEach((match) => {
      expect(match.matchMinute).toBe(0);
    });
  });
});
