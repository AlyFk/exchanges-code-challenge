import exchanges from './exchanges.json';
import type { AllExchangesResponse } from 'types';
const getMockExchanges = (
  page: number,
  limit: number
): AllExchangesResponse[] => {
  return exchanges.slice(
    (page - 1) * limit,
    page * limit
  ) as unknown as AllExchangesResponse[];
};

export default getMockExchanges;
