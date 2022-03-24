import api from './config';
import type { AxiosRequestConfig } from 'axios';
import type {
  AllExchangesResponse,
  ExchangeResponse,
  AllExchangesFilter,
} from 'types';

export const getExchanges = async (
  { per_page, page }: AllExchangesFilter,
  options?: AxiosRequestConfig
) => {
  const data = await api.get<AllExchangesResponse[]>(
    `/exchanges?page=${page}&per_page=${per_page}`,
    options
  );
  return {
    exchanges: data.data,
    totalPages: parseInt(data.headers.total),
    currentPage: page,
  };
};

export const getExchange = async (
  exchangeId: string,
  options?: AxiosRequestConfig
): Promise<ExchangeResponse> => {
  const data = await api.get<ExchangeResponse>(
    `/exchanges/${exchangeId}`,
    options
  );
  return data.data;
};
