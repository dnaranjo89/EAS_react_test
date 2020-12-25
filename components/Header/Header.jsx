import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import HistoryIcon from '@material-ui/icons/History';
import useTranslation from 'next-translate/useTranslation';
import { isMobile } from 'react-device-detect';
import Button, { IconButton } from '../Button.jsx';
import STYLES from './Header.module.scss';
import logo from './logo_vector.svg';

const showRecentDrawsEnabled = true;

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('Common');
  return (
    <header className={STYLES.container}>
      <a href="/" className={STYLES.link}>
        <img className={STYLES.logo} src={logo} alt={t('brand_name')} />
        <Typography variant="h4" component="span" className={STYLES.title}>
          {t('brand_name')}
        </Typography>
      </a>
      {showRecentDrawsEnabled && router.pathname !== '/recent' && (
        <span className={STYLES.links}>
          {isMobile ? (
            <IconButton href="/recent" className={STYLES.button} aria-label={t('recent_draws')}>
              <HistoryIcon />
            </IconButton>
          ) : (
            <Button href="/recent" className={STYLES.button} startIcon={<HistoryIcon />}>
              {t('recent_draws')}
            </Button>
          )}
        </span>
      )}
    </header>
  );
};

Header.propTypes = {};

export default Header;
