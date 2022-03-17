import React from 'react';
import { useExchanges } from 'hooks/useExchanges';
import { ExchangeCard } from 'components/cards';
export const ExchangeList = () => {
  const { data, isLoading, isSuccess } = useExchanges({ limit: 10 });

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <div>
      {isSuccess &&
        data.pages.map((page) =>
          page.exchanges.map((exchange) => (
            <ExchangeCard key={exchange.id} {...exchange} />
          ))
        )}
    </div>
  );
};
