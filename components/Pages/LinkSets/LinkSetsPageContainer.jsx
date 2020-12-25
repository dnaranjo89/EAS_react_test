import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import withTracking from '../../../hocs/withTracking.jsx';
import LinkSetsPage from './LinkSetsPage.jsx';
import LinkSetsQuickPage from './LinkSetsQuickPage.jsx';
import { toss, publish } from '../../../utils/api';
import { URL_SLUG_SETS } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_SETS;

const getInitialValues = (previousDraw, t) => {
  const dateScheduled = new Date();
  dateScheduled.setHours(dateScheduled.getHours() + 1);
  const initialValues = {
    title: t('field_default_title'),
    description: '',
    set1: previousDraw?.values.set1 || [],
    set2: previousDraw?.values.set2 || [],
    dateScheduled,
  };
  return initialValues;
};
const getInitialPrivateId = previousDraw => previousDraw?.privateId;
const getInitialQuickResult = previousDraw => previousDraw?.results[0];
const initialLoadingRequest = false;
const initialApiError = false;

const LinkSetsPageContainer = props => {
  const { draw: previousDraw, track } = props;

  const { t } = useTranslation('DrawLinkSets');
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

  const handleCheckErrorsInConfiguration = () => undefined;

  return isPublic ? (
    <LinkSetsPage
      apiError={APIError}
      loadingRequest={loadingRequest}
      values={values}
      onFieldChange={onFieldChange}
      handlePublish={handlePublish}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  ) : (
    <LinkSetsQuickPage
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

LinkSetsPageContainer.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      set1: PropTypes.arrayOf(PropTypes.string).isRequired,
      set2: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    privateId: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  track: PropTypes.func.isRequired,
};

LinkSetsPageContainer.defaultProps = {
  draw: null,
};

export default withTracking(LinkSetsPageContainer);
