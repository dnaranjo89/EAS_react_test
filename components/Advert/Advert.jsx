import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames/bind';
import STYLES from './Advert.module.scss';

const c = classnames.bind(STYLES);

const Advert = () => {
  useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  const isMobile = useSelector(state => state.userRequest.isMobile);

  return (
    <div className={STYLES.container}>
      {isMobile ? (
        <ins
          className={c('adsbygoogle', 'advertMobile')}
          data-ad-client="ca-pub-9142862842848094"
          data-ad-slot="1221986757"
          // data-adtest="on"
        />
      ) : (
        <ins
          className={c('adsbygoogle', 'advertDesktop')}
          data-ad-client="ca-pub-9142862842848094"
          data-ad-slot="2400047490"
          // data-adtest="on"
        />
      )}
    </div>
  );
};

export default Advert;
