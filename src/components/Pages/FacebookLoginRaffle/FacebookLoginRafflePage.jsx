import React from 'react';
import { translate, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SectionPanel from '../../SectionPanel/SectionPanel';
import TransparentPanel from '../../TransparentPanel/TransparentPanel';
import PrizeSelector from '../../PrizeSelector/PrizeSelector';
import PublicDetails from '../../PublicDetails/PublicDetails';
import PublishDrawOptions from '../../PublishDrawOptions/PublishDrawOptions';
import SubmitButton from '../../SubmitButton/SubmitButton';
import Page from '../../Page/Page';
import BannerAlert, { ALERT_TYPES } from '../../BannerAlert/BannerAlert';

const FacebookLoginRafflePage = props => {
  const { values, onFieldChange, handlePublish, t } = props;

  return (
    <Page htmlTitle={t('facebook_draw_html_title')}>
      <Grid container spacing={16}>
        <Grid item sm={3} />
        <Grid item xs={6}>
          <div>
            <Typography variant="h1">{t('facebook_login_raffle_default_title')}</Typography>
            <BannerAlert title={t('raffle_explanation')} type={ALERT_TYPES.NEUTRAL} />
            <SectionPanel title={t('general_details_raffle')}>
              <PublicDetails
                title={values.title}
                description={values.description}
                onFieldChange={props.onFieldChange}
              />
            </SectionPanel>
            <SectionPanel title={t('info_about_winners')}>
              <PrizeSelector
                numberOfWinners={values.numberOfWinners}
                prizes={values.prizes}
                onFieldChange={onFieldChange}
              />
              <br />
              <BannerAlert title={t('how_to_participate')} type={ALERT_TYPES.NEUTRAL} />
              {/* <Paper>
                <p>
                  <Trans i18nKey="how_to_participate">
                    Once you publish the raffle, you will get a link that you will be able to share
                    it with others. To participate, they will need to login with facebook.
                  </Trans>
                </p>
              </Paper> */}
            </SectionPanel>
            <SectionPanel title={t('when_to_toss')}>
              <PublishDrawOptions
                whenToToss={values.whenToToss}
                options={['manual', 'schedule']}
                dateScheduled={values.dateScheduled}
                onFieldChange={props.onFieldChange}
              />
              <BannerAlert
                title={t('raffle_when_to_toss_explanation', {
                  toss_button_label: props.t('publish_raffle'),
                })}
                type={ALERT_TYPES.NEUTRAL}
              />
            </SectionPanel>
            <SubmitButton label={props.t('publish_raffle')} handlePublish={handlePublish} />
          </div>
        </Grid>
        <Grid item xs={3}>
          <TransparentPanel>
            <Paper>
              <Trans i18nKey="facebook_draw_seo_description">
                <span>Organize raffles in your Facebook page</span>
              </Trans>
            </Paper>
          </TransparentPanel>
        </Grid>
      </Grid>
    </Page>
  );
};

FacebookLoginRafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    prizes: PropTypes.arrayOf(PropTypes.string),
    numberOfWinners: PropTypes.number,
    dateScheduled: PropTypes.string,
    whenToToss: PropTypes.string.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
};

FacebookLoginRafflePage.defaultProps = {
  isLoggedInFB: false,
  ownedPages: [],
};

export default translate('FacebookLoginRafflePage')(FacebookLoginRafflePage);
