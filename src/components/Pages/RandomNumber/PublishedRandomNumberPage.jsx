import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import Page from '../../Page/Page';
import RandomNumberResult from './RandomNumberResult';
import ResultsBox from '../../ResultsBox/ResultsBox';
import BannerAlert, { ALERT_TYPES } from '../../BannerAlert/BannerAlert';
import SubmitButton from '../../SubmitButton/SubmitButton';
import STYLES from './PublishedRandomNumberPage.scss';

const c = classNames.bind(STYLES);

const PublishedRandomNumberPage = props => {
  const {
    title,
    results,
    isOwner,
    rangeMin,
    rangeMax,
    numberOfResults,
    allowRepeated,
    description,
    onToss,
    t,
  } = props;
  return (
    <Page htmlTitle={title} noIndex>
      <div className={c('PublishedRandomNumberPage__content')}>
        {title && (
          <div>
            <Typography
              variant="display2"
              align={'center'}
              data-component={'PublishedRandomNumberPage__Title'}
            >
              {title}
            </Typography>
          </div>
        )}
        {results.length ? (
          <ResultsBox title={t('generated_numbers')}>
            <RandomNumberResult result={results} />
          </ResultsBox>
        ) : (
          <div>
            <BannerAlert title={t('results_not_generated_yet')} type={ALERT_TYPES.NEUTRAL} />
            {isOwner && <SubmitButton label={t('generate_resuts')} onClick={onToss} />}
          </div>
        )}
        <section className={c('PublishedRandomNumberPage__details')}>
          <div>
            <Typography variant="display1">{t('published_draw_details')}</Typography>
            <div>
              {t('field_label_from')} {rangeMin}
            </div>
            <div>
              {t('field_label_to')} {rangeMax}
            </div>
            <div>
              {t('field_label_number_of_results')} {numberOfResults}
            </div>
            {numberOfResults > 1 && (
              <div>
                {t('field_label_allow_repeated')} {allowRepeated ? 'yes' : 'no'}
              </div>
            )}
            {description && (
              <div>
                {t('description')}
                <p>{description}</p>
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
  results: PropTypes.arrayOf(PropTypes.object),
  isOwner: PropTypes.bool,
  onToss: PropTypes.func,
  t: PropTypes.func.isRequired,
};

PublishedRandomNumberPage.defaultProps = {
  title: '',
  description: '',
  results: [],
  isOwner: false,
  onToss: () => {},
};

export default translate('RandomNumber')(PublishedRandomNumberPage);
