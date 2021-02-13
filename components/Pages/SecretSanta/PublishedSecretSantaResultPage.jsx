import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import PropTypes from 'prop-types';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import secretSantaOgImage from './secret_santa_og_image.png';
import STYLES from './PublishedSecretSantaResultPage.module.scss';
import GifteeName from './GifteeName.jsx';

const PublishedSecretSantaResultPage = ({ result }) => {
  const { t } = useTranslation('DrawSecretSanta');
  const { source: participantName, target: gifteeName } = result;

  return (
    <Page
      ogImage={secretSantaOgImage}
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Secret Santan Published"
    >
      <DrawHeading title={t('page_title')} />
      <Typography className={STYLES.description} variant="body2">
        <Trans
          i18nKey="DrawSecretSanta:published_details"
          components={[<p />, <GifteeName />]}
          values={{ participantName, gifteeName }}
        />
      </Typography>
    </Page>
  );
};

PublishedSecretSantaResultPage.propTypes = {
  result: PropTypes.shape({
    source: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublishedSecretSantaResultPage;
