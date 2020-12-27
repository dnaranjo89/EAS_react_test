import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { isMobile } from 'react-device-detect';
import { isServer } from '../../utils';
import STYLES from './Advert.module.scss';

const c = classnames.bind(STYLES);

const Advert = () => {
  useEffect(() => {
    if (!isServer) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  if (isServer) {
    return '';
  }

  return (
    <div className={STYLES.container}>
      {isMobile ? (
        <ins
          className={c('adsbygoogle', 'advertMobile')}
          data-ad-client="ca-pub-9142862842848094"
          data-ad-slot="3953620516"
          // data-adtest="on"
        />
      ) : (
        <ins
          className={c('adsbygoogle', 'advertDesktop')}
          data-ad-client="ca-pub-9142862842848094"
          data-ad-slot="5318673076"
          // data-adtest="on"
        />
      )}
    </div>
  );
};

export default Advert;
