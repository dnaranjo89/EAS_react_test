import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames/bind';
import Link from 'next/link';

import STYLES from './DrawCard.module.scss';

const c = classNames.bind(STYLES);

const DrawCard = ({ href, icon, children, legacy, prefetch }) =>
  legacy ? (
    <a href={href} className={c('DrawCard__link')}>
      <div className={c('DrawCard')}>
        <img className={c('DrawCard__icon')} src={icon} alt={children} />
        <Typography className={c('DrawCard__title')}>{children}</Typography>
      </div>
    </a>
  ) : (
    <Link href={href} prefetch={prefetch}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={c('DrawCard__link')}>
        <div className={c('DrawCard')}>
          <img className={c('DrawCard__icon')} src={icon} alt={children} />
          <Typography className={c('DrawCard__title')}>{children}</Typography>
        </div>
      </a>
    </Link>
  );

DrawCard.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  legacy: PropTypes.bool,
  prefetch: PropTypes.bool,
};

DrawCard.defaultProps = {
  legacy: false,
  prefetch: true,
};
export default DrawCard;
