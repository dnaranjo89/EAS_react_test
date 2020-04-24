import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';
import { RandomNumberResult as RandomNumberResultClass } from 'echaloasuerte-js-sdk';
import { withTranslation } from '../../i18n';
import Page from '../../Page/Page.jsx';
import RandomNumberResult from './RandomNumberResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import STYLES from './PublishedRandomNumberPage.scss';

const c = classNames.bind(STYLES);

// It's pending to align this published page with the others
// As it not using hooks etc
const PublishedRandomNumberPage = props => {
  const {
    title,
    result,
    isOwner,
    rangeMin,
    rangeMax,
    numberOfResults,
    allowRepeated,
    description,
    onToss,
    isLoading,
    t,
  } = props;
  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }
  return (
    <Page htmlTitle={title} noIndex contentClassName={c('PublishedRandomNumberPage')}>
      <div>
        <Typography variant="h1" align="center" data-testid="PublishedRandomNumberPage__Title">
          {title}
        </Typography>
        {result.value ? (
          <ResultsBox title={t('generated_numbers')}>
            <RandomNumberResult result={result} />
          </ResultsBox>
        ) : (
          <div>
            <Countdown date={result.schedule_date} />
            {isOwner && (
              <Button type="submit" onClick={onToss}>
                {' '}
              </Button>
            )}
          </div>
        )}
        <section className={c('PublishedRandomNumberPage__details')}>
          <div>
            <Typography variant="h5">{t('published_draw_details')}</Typography>
            {description && <Typography variant="body2">{description}</Typography>}
            <div>
              <Typography variant="body2">
                {t('field_label_from')} {rangeMin}
              </Typography>
            </div>
            <div>
              <Typography variant="body2">
                {t('field_label_to')} {rangeMax}
              </Typography>
            </div>
            <div>
              <Typography variant="body2">
                {t('field_label_number_of_results')} {numberOfResults}
              </Typography>
            </div>
            {numberOfResults > 1 && (
              <div>
                <Typography variant="body2">
                  {t('field_label_allow_repeated')} {allowRepeated ? 'yes' : 'no'}
                </Typography>
              </div>
            )}
          </div>
        </section>
      </div>
    </Page>
  );
};

PublishedRandomNumberPage.propTypes = {
  title: PropTypes.string,
  rangeMin: PropTypes.number,
  rangeMax: PropTypes.number,
  numberOfResults: PropTypes.number,
  allowRepeated: PropTypes.bool,
  description: PropTypes.string,
  result: PropTypes.instanceOf(RandomNumberResultClass),
  isOwner: PropTypes.bool,
  isLoading: PropTypes.bool,
  onToss: PropTypes.func,
  t: PropTypes.func.isRequired,
};

PublishedRandomNumberPage.defaultProps = {
  title: '',
  description: '',
  rangeMin: null,
  rangeMax: null,
  numberOfResults: null,
  allowRepeated: null,
  result: null,
  isOwner: false,
  isLoading: false,
  onToss: () => {},
};

export default withTranslation('RandomNumber')(PublishedRandomNumberPage);
