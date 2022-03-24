import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getExchanges } from 'gate';
import type { AxiosRequestConfig } from 'axios';
import type { AsyncReturnType } from 'types';

function useExchanges<
  TData = AsyncReturnType<typeof getExchanges>,
  TError = Error
>(
  { limit }: { limit: number },
  options?: {
    query?: UseInfiniteQueryOptions<
      AsyncReturnType<typeof getExchanges>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
) {
  const { query: queryOptions, axios: axiosOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? 'exchanges';
  const queryFn = async ({ pageParam = 1 }) =>
    getExchanges({ per_page: limit, page: pageParam }, axiosOptions);

  return useInfiniteQuery<AsyncReturnType<typeof queryFn>, TError, TData>(
    queryKey,
    queryFn,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage! + 1;
      },
      ...queryOptions,
    }
  );
}

export default useExchanges;
