import ExchangeCard from '../ExchangeCard';
import { screen, render } from '@testing-library/react';
import getMockExchange from 'test-utils/mockedData/exchange/getMockExchange';

test('render information in the card', () => {
  const { country, image, name, trust_score_rank, url } =
    getMockExchange('binance');
  render(
    <ExchangeCard
      country={country}
      id="binane"
      image={image}
      name={name}
      trust_score_rank={trust_score_rank}
      url={url}
    />
  );
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${country}`))).toBeInTheDocument();
  expect(screen.getByText(`rank: ${trust_score_rank}`)).toBeInTheDocument();
  expect(screen.getByText(`url: ${url}`)).toBeInTheDocument();
  expect(screen.getByAltText(name)).toBeInTheDocument();
});
