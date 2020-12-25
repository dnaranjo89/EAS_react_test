import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import RandomNumberPage from './RandomNumberPage.jsx';
import RandomNumberQuickPage from './RandomNumberQuickPage.jsx';
import withTracking from '../../../hocs/withTracking.jsx';
import { toss, publish } from '../../../utils/api';
import { URL_SLUG_NUMBER } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_NUMBER;

const getInitialValues = (previousDraw, t) => {
  const dateScheduled = new Date();
  dateScheduled.setHours(dateScheduled.getHours() + 1);
  const initialValues = {
    title: t('field_default_title'),
    description: '',
    rangeMin: previousDraw?.values.rangeMin || '1',
    rangeMax: previousDraw?.values.rangeMax || '10',
    numberOfResults: previousDraw?.values.numberOfResults || '1',
    allowRepeated: previousDraw?.values.allowRepeated || false,
    dateScheduled,
  };
  return initialValues;
};
const getInitialPrivateId = previousDraw => previousDraw?.privateId;
const getInitialQuickResult = previousDraw => previousDraw?.results[0];
const initialLoadingRequest = false;
const initialApiError = false;

const RandomNumberPageContainer = props => {
  const { draw: previousDraw, track } = props;
  const { t } = useTranslation('DrawNumber');
  const [privateId, setPrivateId] = useState(getInitialPrivateId(previousDraw));
  const [values, setValues] = useState(getInitialValues(previousDraw, t));
  const [quickResult, setQuickResult] = useState(getInitialQuickResult(previousDraw));
  const [APIError, setAPIError] = useState(initialApiError);
  const [loadingRequest, setLoadingRequest] = useState(initialLoadingRequest);
  const router = useRouter();

  const isPublic = router.asPath.includes('public');

  useEffect(() => {
    setQuickResult(getInitialQuickResult(previousDraw));
    setPrivateId(getInitialPrivateId(previousDraw));
    setLoadingRequest(initialLoadingRequest);
    setAPIError(initialApiError);
    setValues(getInitialValues(previousDraw, t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousDraw]);

  const onFieldChange = (fieldName, value) => {
    setQuickResult(null);
    setPrivateId(null);
    setValues(previousState => ({
      ...previousState,
      [fieldName]: value,
    }));
  };

  const handleToss = () => {
    toss({
      values,
      privateId,
      urlSlug,
      track,
      setLoadingRequest,
      setAPIError,
      setQuickResult,
    });
  };

  const handlePublish = () => {
    publish({
      values,
      urlSlug,
      track,
      setLoadingRequest,
      setAPIError,
    });
  };

  const handleCheckErrorsInConfiguration = () => {
    const rangeMin = parseInt(values.rangeMin, 10);
    const rangeMax = parseInt(values.rangeMax, 10);
    const numberOfResults = parseInt(values.numberOfResults, 10);
    if (rangeMin >= rangeMax) {
      return t('error_form_invalid_ranges', {
        min: values.rangeMin,
        max: values.rangeMax,
      });
    }
    if (!values.allowRepeated && numberOfResults > rangeMax - rangeMin) {
      return t('error_form_range_not_big_enough');
    }
    return undefined;
  };

  return isPublic ? (
    <RandomNumberPage
      apiError={APIError}
      loadingRequest={loadingRequest}
      values={values}
      onFieldChange={onFieldChange}
      handlePublish={handlePublish}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  ) : (
    <RandomNumberQuickPage
      apiError={APIError}
      loadingRequest={loadingRequest}
      values={values}
      quickResult={quickResult}
      onFieldChange={onFieldChange}
      handleToss={handleToss}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  );
};

RandomNumberPageContainer.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      rangeMax: PropTypes.string.isRequired,
      rangeMin: PropTypes.string.isRequired,
      numberOfResults: PropTypes.string.isRequired,
      allowRepeated: PropTypes.bool.isRequired,
    }),
    privateId: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  track: PropTypes.func.isRequired,
};

RandomNumberPageContainer.defaultProps = {
  draw: null,
};

export default withTracking(RandomNumberPageContainer);
