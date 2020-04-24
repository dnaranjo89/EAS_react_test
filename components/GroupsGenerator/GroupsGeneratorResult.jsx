import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { GroupsResult } from 'echaloasuerte-js-sdk';
import classnames from 'classnames/bind';
import { withTranslation } from '../../i18n';
import STYLES from './GroupsGeneratorResult.module.scss';

const c = classnames.bind(STYLES);

const GroupsGeneratorResult = ({ result, t }) => (
  <div className={c('GroupsGeneratorResult')}>
    <div className={c('GroupsGeneratorResult__container')}>
      {result.value.map((group, index) => (
        <div
          key={group[0].id}
          className={c('GroupsGeneratorResult__group')}
          data-testid="GroupsGeneratorResult__group"
        >
          <Typography variant="caption">
            {t('result_label_group', { groupNumber: index + 1 })}
          </Typography>
          <ul>
            {group.map(participant => (
              <li key={participant.id}>
                <Typography variant="body1" data-testid="GroupsGeneratorResult__result">
                  {participant.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

GroupsGeneratorResult.propTypes = {
  result: PropTypes.instanceOf(GroupsResult).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('GroupsDraw')(GroupsGeneratorResult);
