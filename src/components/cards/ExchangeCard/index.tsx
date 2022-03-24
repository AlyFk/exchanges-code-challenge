import React from 'react';
import type { AllExchangesResponse } from 'types';
import styles from './styles.module.scss';

type ExchangeCardProps = Pick<
  AllExchangesResponse,
  'id' | 'name' | 'country' | 'image' | 'url' | 'trust_score_rank'
>;
const ExchangeCard: React.FC<ExchangeCardProps> = ({
  country,
  id,
  image,
  name,
  trust_score_rank,
  url,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={name} />
      <h2 data-testid="card-title" className={styles.cardName}>
        {name}
      </h2>
      <div>url: {url}</div>
      <div>country: {country}</div>
      <div>rank: {trust_score_rank}</div>
    </div>
  );
};

export default ExchangeCard;
