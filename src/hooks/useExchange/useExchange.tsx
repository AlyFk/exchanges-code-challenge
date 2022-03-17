import { useQuery, UseQueryOptions } from 'react-query';
import { getExchange } from 'gate';
import type { AxiosRequestConfig } from 'axios';
import type { AsyncReturnType } from 'types';

function useExchange<
  TData = AsyncReturnType<typeof getExchange>,
  TError = Error
>(
  exchangeId: string,
  options?: {
    query?: UseQueryOptions<AsyncReturnType<typeof getExchange>, TError, TData>;
    axios?: AxiosRequestConfig;
  }
) {
  const { query: queryOptions, axios: axiosOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? `exchange-${exchangeId}`;
  const queryFn = () => getExchange(exchangeId, axiosOptions);
  return useQuery<AsyncReturnType<typeof queryFn>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!exchangeId, ...queryOptions }
  );
}

export default useExchange;
