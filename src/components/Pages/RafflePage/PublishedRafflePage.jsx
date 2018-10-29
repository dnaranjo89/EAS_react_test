import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';
import { RaffleResult } from 'echaloasuerte-js-sdk';

import Page from '../../Page/Page';
import DrawContent from '../../DrawContent/DrawContent';
import PrizesOverview from '../../PrizesOverview/PrizesOverview';
import WinnersList from '../../WinnersList/WinnersList';
import ResultsBox from '../../ResultsBox/ResultsBox';
import BannerAlert, { ALERT_TYPES } from '../../BannerAlert/BannerAlert';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { getDate, getTime } from '../../../services/datetime';
import STYLES from './PublishedRafflePage.scss';

const c = classNames.bind(STYLES);

const SummaryRaffle = ({ participants, numberOfWinners, description, t }) => (
  <div className={c('PublishedRafflePage__summary-container')}>
    <div className={c('PublishedRafflePage__summary')}>
      <Typography variant="display1">{t('raffle_details')}</Typography>
      <div>
        {t('number_of_participants')} {participants.length}
      </div>
      <div>
        {t('number_of_winners')} {numberOfWinners}
      </div>
      <div>
        {t('description')}
        <p>{description}</p>
      </div>
    </div>
  </div>
);

SummaryRaffle.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfWinners: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

const WithResults = ({ result, t }) => (
  <div className={c('PublishedRafflePage__results')}>
    <ResultsBox title={t('winners')}>
      <WinnersList winners={result.value} />
    </ResultsBox>
  </div>
);

WithResults.propTypes = {
  result: PropTypes.instanceOf(RaffleResult).isRequired,
  t: PropTypes.func.isRequired,
};

const PublishedRafflePage = props => {
  const { isLoading, title, prizes, result, t } = props;
  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }
  console.log('result', result.schedule_date);
  return (
    <Page htmlTitle={title} noIndex>
      <div className={c('PublishedRafflePage__content')}>
        <DrawContent title={title} footer={<SummaryRaffle {...props} />}>
          {result && result.value && result.value.length ? (
            <WithResults {...props} />
          ) : (
            <Fragment>
              <div>
                <PrizesOverview prizes={prizes} />
              </div>
              <div>
                <BannerAlert
                  title={t('results_generated_on', {
                    date: getDate(result.schedule_date),
                    time: getTime(result.schedule_date),
                  })}
                  type={ALERT_TYPES.NEUTRAL}
                />
              </div>
            </Fragment>
          )}
        </DrawContent>
      </div>
    </Page>
  );
};

PublishedRafflePage.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  result: PropTypes.instanceOf(RaffleResult),
  t: PropTypes.func.isRequired,
};

PublishedRafflePage.defaultProps = {
  isLoading: false,
  result: null,
};

export default translate('PublishedRafflePage')(PublishedRafflePage);
