/* eslint-disable react/jsx-filename-extension */
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { Search } from '../../src/components';
import store from '../../src/store/store';

describe('Search component', () => {
  const component = (
    <Provider store={store}>
      <Search />
    </Provider>
  );

  test('Input writing: Valule must be updated in screen', async () => {
    await waitFor(() => render(component));
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'terms_searched' } });
    expect(input.value).toBe('terms_searched');
    // screen.debug()
  });
});
