import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Page from '../../Page/Page.jsx';
import STYLES from './SuccessPage.module.scss';

const SuccessPage = () => {
  const { t } = useTranslation('DrawSecretSanta');

  return (
    <Page htmlTitle={t('html_title')} pageType="Secret Santa Successfully Created" noIndex>
      <Typography align="center" variant="h1" className={STYLES.title}>
        {t('congratulations')} <br />
        {t('draw_created')}
      </Typography>
      <div className={STYLES.description}>
        <Trans i18nKey="DrawSecretSanta:success_details" components={[<p />]} />
      </div>
    </Page>
  );
};

SuccessPage.propTypes = {};

export default SuccessPage;
