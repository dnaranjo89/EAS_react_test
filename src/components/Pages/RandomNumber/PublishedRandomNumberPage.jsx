import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';
import Page from '../../Page/Page';
import RandomNumberResult from './RandomNumberResult';
import ResultsBox from '../../ResultsBox/ResultsBox';
import Countdown from '../../Countdown/Countdown';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import STYLES from './PublishedRandomNumberPage.scss';

const c = classNames.bind(STYLES);

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
    <Page htmlTitle={title} noIndex className={c('PublishedRandomNumberPage')}>
      <div>
        {title && (
          <div>
            <Typography
              variant="h1"
              align={'center'}
              data-component={'PublishedRandomNumberPage__Title'}
            >
              {title}
            </Typography>
          </div>
        )}
        {result.value ? (
          <ResultsBox title={t('generated_numbers')}>
            <RandomNumberResult result={result.value} />
          </ResultsBox>
        ) : (
          <div>
            <Countdown date={result.schedule_date} />
            {isOwner && <Button type="submit" onClick={onToss} />}
          </div>
        )}
        <section className={c('PublishedRandomNumberPage__details')}>
          <div>
            <Typography variant="h5">{t('published_draw_details')}</Typography>
            {description && (
              <p>
                <Typography variant="body2">{description}</Typography>
              </p>
            )}
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
  rangeMin: PropTypes.number.isRequired,
  rangeMax: PropTypes.number.isRequired,
  numberOfResults: PropTypes.number.isRequired,
  allowRepeated: PropTypes.bool.isRequired,
  description: PropTypes.string,
  result: PropTypes.arrayOf(PropTypes.object),
  isOwner: PropTypes.bool,
  isLoading: PropTypes.bool,
  onToss: PropTypes.func,
  t: PropTypes.func.isRequired,
};

PublishedRandomNumberPage.defaultProps = {
  title: '',
  description: '',
  result: [],
  isOwner: false,
  isLoading: false,
  onToss: () => {},
};

export default translate('RandomNumber')(PublishedRandomNumberPage);
