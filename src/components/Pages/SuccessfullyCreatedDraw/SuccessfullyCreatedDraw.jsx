import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import classnames from 'classnames/bind';
import ReactRouterPropTypes from 'react-router-prop-types';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import RouterButton from '../../RouterButton/RouterButton.jsx';
import RecentDraws from '../../../services/recentDraws';
// import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
// import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
// import ShareUrl from '../../ShareUrl/ShareUrl.jsx';
import STYLES from './SuccessfullyCreatedDraw.module.scss';
import useCurrentUrl from '../../../hooks/useCurrentUrl';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import { analyticsTypesBySlug } from '../../../constants/analyticsTypes';

// import STYLES from './SuccessfullyCreatedDraw.module.scss';
// import headsIcon from './heads.png';
// import tailsIcon from './tails.png';
// import coinOgImage from './coin_og_image.png';

const SuccessfullyCreatedDraw = ({ t, match }) => {
  const shareUrl = useCurrentUrl().replace('/success', '');
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
      <SectionPanel>
        <Typography align="center" variant="body1">
          {t('share_link')}
        </Typography>
        <br />
        <ShareButtons
          drawType={analyticsTypesBySlug[drawType]}
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
      </SectionPanel>
    </Page>
  );
};

SuccessfullyCreatedDraw.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('SuccessfullyCreatedDraw')(SuccessfullyCreatedDraw);
