import { renderHook } from '@testing-library/react-hooks';
import useExchange from './useExchange';
import { createWrapper } from 'test-utils/wrapper';
import { server } from 'test-utils/mocks/server';
import { exchangeHandlerException } from 'test-utils/mocks/handlers';

import getMockExchange from 'test-utils/mockedData/exchange/getMockExchange';

let exchangeId = 'binance';
describe('testing useExchange hook', () => {
  test('successful query hook', async () => {
    const { result, waitFor } = renderHook(() => useExchange(exchangeId), {
      wrapper: createWrapper(),
    });
    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.data).toEqual({ ...getMockExchange(exchangeId) });
  });

  test('failure query hook', async () => {
    exchangeId = 'test';
    server.use(exchangeHandlerException);
    const { result, waitFor } = renderHook(() => useExchange(exchangeId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
