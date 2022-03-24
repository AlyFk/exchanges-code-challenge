import exchange from './exchange.json';
import type { ExchangeResponse } from 'types';
const getMockExchange = (exchaneId: string): ExchangeResponse => {
  return exchange as unknown as ExchangeResponse;
};

export default getMockExchange;
