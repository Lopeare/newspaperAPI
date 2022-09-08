/* eslint-disable */
import { paginationSlice, initialState } from '../../src/slices';

describe('Pagination Slice', () => {
  test('Initial State', () => {
    const state = paginationSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });
});
