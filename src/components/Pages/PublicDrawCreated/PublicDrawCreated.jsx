import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames/bind';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
// import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
// import ShareUrl from '../../ShareUrl/ShareUrl.jsx';
import STYLES from './PublicDrawCreated.module.scss';

// import STYLES from './PublicDrawCreated.scss';
// import headsIcon from './heads.png';
// import tailsIcon from './tails.png';
// import coinOgImage from './coin_og_image.png';

const analyticsDrawTypeMap = {
  groups: 'Groups',
  facebook: 'FacebookRaffle', // complete this list
};

const PublicDrawCreated = ({ t, match }) => {
  const { drawType, drawId } = match.params;
  const shareUrl = `${window.location.origin}/${drawType}/${drawId}`;
  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      pageType="Public Draw Successfully Created"
      // ogImage={coinOgImage}
      // className={c('PublicDrawCreated')}
    >
      <Typography align="center" variant="h1" className={STYLES.Title}>
        Enhorabuena!
        <br />
        Tu sorteo ha sido creado correctamente
      </Typography>
      <Typography align="center" variant="body1">
        Comparte este link con quien quieras y podrán ver el resultado en directo
      </Typography>
      <ShareButtons
        drawType={analyticsDrawTypeMap[drawType]}
        url={shareUrl}
        types={['facebook', 'twitter', 'telegram', 'whatsapp', 'url']}
      />
      <Button variant="contained" color="primary" component={} href={shareUrl}>
        Ir al sorteo
      </Button>
    </Page>
  );
};

PublicDrawCreated.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('PublicDrawCreated')(PublicDrawCreated);
