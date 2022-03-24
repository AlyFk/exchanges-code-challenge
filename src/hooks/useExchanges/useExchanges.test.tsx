import { renderHook } from '@testing-library/react-hooks';
import useExchanges from './useExchanges';
import { createWrapper } from 'test-utils/wrapper';
import getMockExchanges from 'test-utils/mockedData/exchanges/getMockExchanges';

describe('testing useExchanges hook', () => {
  test('fetchNextPage works fine in hook', async () => {
    const { result, waitFor } = renderHook(() => useExchanges({ limit: 5 }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.pages).toStrictEqual([
      {
        exchanges: getMockExchanges(1, 5),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
      },
    ]);

    result.current.fetchNextPage();

    await waitFor(() => result.current.isFetching);
    await waitFor(() => !result.current.isFetching);
    expect(result.current.data?.pages).toStrictEqual([
      {
        exchanges: getMockExchanges(1, 5),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
      },
      {
        exchanges: getMockExchanges(2, 5),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
      },
    ]);
  });
});
