import React from 'react';
import { Link } from 'react-router-dom';
import { useExchanges } from 'hooks/useExchanges';
import { ExchangeCard } from 'components/cards';
import { Spinner } from 'components/spinners';
import styles from './styles.module.scss';

const ExchangeList = () => {
  const { data, isLoading, isSuccess } = useExchanges({ limit: 10 });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.container}>
      {isSuccess &&
        data.pages.map((page) =>
          page.exchanges.map((exchange) => (
            <Link
              data-testid={`exchanges_link-${exchange.id}`}
              to={`/${exchange.id}`}
              key={exchange.id}
            >
              <ExchangeCard {...exchange} />
            </Link>
          ))
        )}
    </div>
  );
};

export default ExchangeList;
