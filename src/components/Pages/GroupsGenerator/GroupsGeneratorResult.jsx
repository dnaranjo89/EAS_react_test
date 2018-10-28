import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';
import { GroupsResult } from 'echaloasuerte-js-sdk';
import classnames from 'classnames/bind';
import STYLES from './GroupsGeneratorResult.scss';

const c = classnames.bind(STYLES);

const GroupsGeneratorResult = ({ result, t }) => (
  <div className={c('GroupsGeneratorResult')}>
    {result.value.map((group, index) => (
      <div key={group[0].id} className={c('GroupsGeneratorResult__group')}>
        <Typography variant="caption">
          {t('result_label_group', { groupNumber: index + 1 })}
        </Typography>
        <Typography
          className={c('GroupsGeneratorResult__results')}
          variant="body1"
          align="center"
          data-component={'GroupsGeneratorResult__result'}
          key={group[0].id}
        >
          {group.map(participant => participant.name).join(', ')}
        </Typography>
      </div>
    ))}
  </div>
);

GroupsGeneratorResult.propTypes = {
  result: PropTypes.instanceOf(GroupsResult).isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('GroupsGenerator')(GroupsGeneratorResult);
