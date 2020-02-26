import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import classnames from 'classnames/bind';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import RouterButton from '../../RouterButton/RouterButton.jsx';
import RecentDraws from '../../../services/recentDraws';
// import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
// import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
// import ShareUrl from '../../ShareUrl/ShareUrl.jsx';
import STYLES from './SuccessfullyCreatedDraw.module.scss';
import useCurrentUrl from '../../../hooks/useCurrentUrl';

// import STYLES from './SuccessfullyCreatedDraw.scss';
// import headsIcon from './heads.png';
// import tailsIcon from './tails.png';
// import coinOgImage from './coin_og_image.png';

const analyticsDrawTypeMap = {
  groups: 'Groups',
  facebook: 'FacebookRaffle', // complete this list
};

const SuccessfullyCreatedDraw = ({ t, match }) => {
  const shareUrl = useCurrentUrl();
  const { drawType, drawId } = match.params;
  const isOwnedByUser = RecentDraws.exists(drawId);
  if (!isOwnedByUser) {
    const drawUrl = match.url.replace('/success', '');
    return <Redirect to={drawUrl} />;
  }
  const pathUrl = `/${drawType}/${drawId}`;
  return (
    <Page
      htmlTitle={t('html_title')}
      pageType="Public Draw Successfully Created"
      noIndex
      contentClassName={STYLES.Page}
    >
      <Typography align="center" variant="h1" className={STYLES.Title}>
        {t('congratulations')} <br />
        {t('draw_created')}
      </Typography>
      <Typography align="center" variant="body1">
        {t('share_link')}
      </Typography>
      <br />
      <ShareButtons
        drawType={analyticsDrawTypeMap[drawType]}
        url={shareUrl}
        types={['facebook', 'twitter', 'telegram', 'whatsapp', 'url']}
      />
      <RouterButton
        variant="contained"
        color="primary"
        to={pathUrl}
        className={STYLES.Cta}
        data-testid="SuccessfullyCreatedDraw_GoToRaffleButton"
      >
        {t('go_to_the_raffle')}
      </RouterButton>
    </Page>
  );
};

SuccessfullyCreatedDraw.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('SuccessfullyCreatedDraw')(SuccessfullyCreatedDraw);
