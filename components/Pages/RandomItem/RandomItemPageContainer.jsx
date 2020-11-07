import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { withTranslation } from '../../../i18n';
import withTracking from '../../../hocs/withTracking.jsx';
import RandomItemPage from './RandomItemPage.jsx';
import RandomItemQuickPage from './RandomItemQuickPage.jsx';
import { toss, publish } from '../../../utils/api';
import { URL_SLUG_ITEM } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_ITEM;

const getInitialValues = (previousDraw, t) => {
  const dateScheduled = new Date();
  dateScheduled.setHours(dateScheduled.getHours() + 1);
  const initialValues = {
    title: t('field_default_title'),
    description: '',
    items: previousDraw?.values.items || [],
    numberOfItems: previousDraw?.values.numberOfItems || '1',
    dateScheduled,
  };
  return initialValues;
};
const getInitialPrivateId = previousDraw => previousDraw?.privateId;
const getInitialQuickResult = previousDraw => previousDraw?.results[0];
const initialLoadingRequest = false;
const initialApiError = false;

const RandomItemPageContainer = props => {
  const { draw: previousDraw, t, track } = props;

  const [privateId, setPrivateId] = useState(getInitialPrivateId(previousDraw));
  const [values, setValues] = useState(getInitialValues(previousDraw, t));
  const [quickResult, setQuickResult] = useState(getInitialQuickResult(previousDraw));
  const [APIError, setAPIError] = useState(initialApiError);
  const [loadingRequest, setLoadingRequest] = useState(initialLoadingRequest);
  const router = useRouter();

  const isPublic = router.asPath.includes('public');

  // When the users toss multiple times they get redirected but we can not rely on `useState`
  // setting the initial value there
  useEffect(() => {
    setQuickResult(getInitialQuickResult(previousDraw));
    setPrivateId(getInitialPrivateId(previousDraw));
    setLoadingRequest(initialLoadingRequest);
    setAPIError(initialApiError);
    setValues(getInitialValues(previousDraw, t));
  }, [previousDraw, t]);

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
    const { items, numberOfItems } = values;
    if (numberOfItems > items.length) {
      return t('error_form_not_enough_items', { numberOfItems });
    }
    return undefined;
  };

  return isPublic ? (
    <RandomItemPage
      apiError={APIError}
      loadingRequest={loadingRequest}
      values={values}
      onFieldChange={onFieldChange}
      handlePublish={handlePublish}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  ) : (
    <RandomItemQuickPage
      apiError={APIError}
      values={values}
      quickResult={quickResult}
      loadingRequest={loadingRequest}
      handleToss={handleToss}
      onFieldChange={onFieldChange}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  );
};

RandomItemPageContainer.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
      numberOfItems: PropTypes.string.isRequired,
    }),
    privateId: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  t: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

RandomItemPageContainer.defaultProps = {
  draw: null,
};

export default withTracking(withTranslation('DrawItem')(RandomItemPageContainer));
