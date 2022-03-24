import ExchangeDetails from '../index';
import { screen } from '@testing-library/react';
import getMockExchange from 'test-utils/mockedData/exchange/getMockExchange';
import { renderWithClient } from 'test-utils/wrapper';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'binance',
  }),
}));

test('show the details of the exchange', async () => {
  const {
    country,
    name,
    trust_score_rank,
    facebook_url,
    description,
    telegram_url,
    slack_url,
    reddit_url,
    year_established,
  } = getMockExchange('binance');

  const socialLinks = [facebook_url, telegram_url, slack_url, reddit_url];

  renderWithClient(<ExchangeDetails />);

  expect(await screen.findByText(name)).toBeInTheDocument();
  expect(await screen.findByText(new RegExp(`${country}`))).toBeInTheDocument();
  expect(
    await screen.findByText(`rank: ${trust_score_rank}`)
  ).toBeInTheDocument();
  expect(
    await screen.findByText(new RegExp(`${year_established}`))
  ).toBeInTheDocument();
  expect(
    await screen.findByText(new RegExp(`${description}`))
  ).toBeInTheDocument();
  const links = await (
    await screen.findAllByRole('link')
  ).map((link) => link.getAttribute('href'));
  expect(links).toEqual(socialLinks);
});
