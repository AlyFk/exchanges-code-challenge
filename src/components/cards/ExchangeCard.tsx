import React from 'react';
import type { AllExchangesResponse } from 'types';

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
  return <div>ExchangeCard</div>;
};

export default ExchangeCard;
