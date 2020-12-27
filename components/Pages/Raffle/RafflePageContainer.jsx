import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import withTracking from '../../../hocs/withTracking.jsx';
import RafflePage from './RafflePage.jsx';
import RaffleQuickPage from './RaffleQuickPage.jsx';
import { toss, publish } from '../../../utils/api';
import { URL_SLUG_RAFFLE } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_RAFFLE;

const getInitialValues = (previousDraw, t) => {
  const dateScheduled = new Date();
  dateScheduled.setHours(dateScheduled.getHours() + 1);
  const initialValues = {
    title: t('field_default_title'),
    description: '',
    participants: previousDraw?.values.participants || [],
    prizes: previousDraw?.values.prizes || [],
    dateScheduled,
  };
  return initialValues;
};
const getInitialPrivateId = previousDraw => previousDraw?.privateId;
const getInitialQuickResult = previousDraw => previousDraw?.results[0];
const initialLoadingRequest = false;
const initialApiError = false;

const RafflePageContainer = props => {
  const { draw: previousDraw, track } = props;

  const { t } = useTranslation('DrawRaffle');
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

  const handleCheckErrorsInConfiguration = () => {
    const { participants, prizes } = values;
    const numberOfPrizes = prizes.length;
    const numOfParticipants = participants.length;
    if (numOfParticipants < numberOfPrizes) {
      return t('error_form_not_enough_participants', { numberOfPrizes, count: numOfParticipants });
    }
    return undefined;
  };

  return isPublic ? (
    <RafflePage
      apiError={APIError}
      loadingRequest={loadingRequest}
      values={values}
      onFieldChange={onFieldChange}
      handlePublish={handlePublish}
      handleCheckErrorsInConfiguration={handleCheckErrorsInConfiguration}
    />
  ) : (
    <RaffleQuickPage
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

RafflePageContainer.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      participants: PropTypes.arrayOf(PropTypes.string).isRequired,
      prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    privateId: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  track: PropTypes.func.isRequired,
};

RafflePageContainer.defaultProps = {
  draw: null,
};

export default withTracking(RafflePageContainer);
