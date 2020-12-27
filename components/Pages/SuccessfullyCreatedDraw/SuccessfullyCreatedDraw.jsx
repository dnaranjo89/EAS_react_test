import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import RouterButton from '../../Button.jsx';
import RecentDraws from '../../../services/recentDraws';
import Page from '../../Page/Page.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import STYLES from './SuccessfullyCreatedDraw.module.scss';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import { analyticsTypesBySlug } from '../../../constants/analyticsTypes';

const SuccessfullyCreatedDraw = () => {
  const { t } = useTranslation('CommonCreateDraw');
  const router = useRouter();
  const drawUrl = router.asPath.replace('/success', '');
  // Get the draw type from the url
  const drawType = router.pathname.match(/\/([a-zA-Z]+)\/\[id\]/)[1];
  const { id: drawId } = router.query;
  const isOwnedByUser = RecentDraws.exists(drawId);
  const routerPath = router.pathname.replace('/success', '');

  // TODO I would like to reconsider how this is done
  // E.g we could move all of this page to be part of the actual PublishedGroupsPage
  // so that it's shown when the user is owner, this page is show
  useEffect(() => {
    if (!isOwnedByUser) {
      router.push(`${routerPath}/`, `${drawUrl}/`);
    }
  });

  const pathUrl = `/${drawType}/${drawId}`;
  return (
    <Page
      htmlTitle={t('html_title')}
      pageType="Public Draw Successfully Created"
      noIndex
      contentClassName={STYLES.Page}
    >
      {isOwnedByUser ? (
        <>
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
              url={drawUrl}
              types={['facebook', 'twitter', 'telegram', 'whatsapp', 'url']}
            />
            <RouterButton
              variant="contained"
              color="primary"
              href={routerPath}
              hrefAs={pathUrl}
              className={STYLES.Cta}
              data-testid="SuccessfullyCreatedDraw_GoToRaffleButton"
            >
              {t('go_to_the_raffle')}
            </RouterButton>
          </SectionPanel>
        </>
      ) : null}
    </Page>
  );
};

SuccessfullyCreatedDraw.propTypes = {};

export default SuccessfullyCreatedDraw;
