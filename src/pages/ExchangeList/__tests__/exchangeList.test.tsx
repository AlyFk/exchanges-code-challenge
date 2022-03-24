import ExchangeList from '../index';
import { screen } from '@testing-library/react';
import { renderWithClient } from 'test-utils/wrapper';

let limit = 10;

describe('test exchange list page', () => {
  it(`should show ${limit} exchanges on page`, async () => {
    renderWithClient(<ExchangeList />);
    const cards = await screen.findAllByTestId(/^exchanges_link\W/i);
    expect(cards).toHaveLength(1 * limit);
  });
});
