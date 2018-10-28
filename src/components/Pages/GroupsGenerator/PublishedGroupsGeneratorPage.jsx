import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';
import { GroupsResult, Participant } from 'echaloasuerte-js-sdk';
import Page from '../../Page/Page';
import GroupsGeneratorResult from './GroupsGeneratorResult';
import ResultsBox from '../../ResultsBox/ResultsBox';
import Countdown from '../../Countdown/Countdown';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import STYLES from './PublishedGroupsGeneratorPage.scss';

const c = classNames.bind(STYLES);

const PublishedGroupsGeneratorPage = props => {
  const {
    title,
    result,
    isOwner,
    participants,
    numberOfGroups,
    description,
    onToss,
    isLoading,
    t,
  } = props;
  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }
  return (
    <Page htmlTitle={title} noIndex className={c('PublishedGroupsGeneratorPage')}>
      {title && (
        <Typography variant="h1" data-component={'PublishedGroupsGeneratorPage__Title'}>
          {title}
        </Typography>
      )}
      {result.value ? (
        <ResultsBox title={t('generated_groups')}>
          <GroupsGeneratorResult result={result.value} />
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
      <section className={c('PublishedGroupsGeneratorPage__details')}>
        <Typography variant="h5">{t('published_draw_details')}</Typography>
        {description && <Typography variant="body2">{description}</Typography>}
        <div>
          <Typography variant="body2">
            {t('field_label_number_of_groups')}: {numberOfGroups}
          </Typography>
        </div>
        <div>
          <Typography variant="body2">
            {t('field_label_participants')}: {participants.map(p => p.name).join(', ')}
          </Typography>
        </div>
      </section>
    </Page>
  );
};

PublishedGroupsGeneratorPage.propTypes = {
  title: PropTypes.string,
  participants: PropTypes.arrayOf(PropTypes.instanceOf(Participant)).isRequired,
  numberOfGroups: PropTypes.number,
  description: PropTypes.string,
  result: PropTypes.instanceOf(GroupsResult),
  isOwner: PropTypes.bool,
  isLoading: PropTypes.bool,
  onToss: PropTypes.func,
  t: PropTypes.func.isRequired,
};

PublishedGroupsGeneratorPage.defaultProps = {
  title: '',
  description: '',
  result: [],
  numberOfGroups: null,
  isOwner: false,
  isLoading: false,
  onToss: () => {},
};

export default translate('GroupsGenerator')(PublishedGroupsGeneratorPage);
