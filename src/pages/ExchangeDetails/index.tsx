import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExchange } from 'hooks/useExchange';
import { Spinner } from 'components/spinners';
import { ReactComponent as FaceookIcon } from 'assets/svgs/facebook-brands.svg';
import { ReactComponent as TelegramIcon } from 'assets/svgs/telegram-brands.svg';
import { ReactComponent as SlackIcon } from 'assets/svgs/slack-brands.svg';
import { ReactComponent as RedditIcon } from 'assets/svgs/reddit-brands.svg';
import styles from './styles.module.scss';

const ExchangeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useExchange(id as string);
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }
  const largeImageSrc = (src: string) => {
    return src.replace('small', 'large');
  };
  return (
    <div className={styles.container}>
      <button
        data-testid="back-button"
        onClick={() => navigate('/')}
        className={styles.backBtn}
      >
        <span>&#8592;</span>
      </button>
      <img
        className={styles.cardImage}
        width={160}
        src={largeImageSrc(data?.image!)}
        alt={data?.name}
      />
      <h1 data-testid="exchange-title">{data?.name}</h1>
      <div className={styles.country}>Country: {data?.country}</div>
      <div className={styles.info}>
        <span className={styles.rank}>rank: {data?.trust_score_rank}</span>
        <span className={styles.separator}>|</span>
        <span>Year of Establishment: {data?.year_established}</span>
      </div>
      <p className={styles.description}>{data?.description}</p>
      <div className={styles.social}>
        {data?.facebook_url && (
          <a href={data?.facebook_url} target="_blank" rel="noreferrer">
            <FaceookIcon width={25} fill="#4267B2" />
          </a>
        )}
        {data?.telegram_url && (
          <a href={data?.telegram_url} target="_blank" rel="noreferrer">
            <TelegramIcon width={25} fill="#229ED9" />
          </a>
        )}
        {data?.slack_url && (
          <a href={data?.slack_url} target="_blank" rel="noreferrer">
            <SlackIcon width={25} />
          </a>
        )}
        {data?.reddit_url && (
          <a href={data?.reddit_url} target="_blank" rel="noreferrer">
            <RedditIcon width={25} fill="#FF4301" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ExchangeDetails;
