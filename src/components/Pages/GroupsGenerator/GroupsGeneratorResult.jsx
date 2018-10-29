import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import STYLES from './GroupsGeneratorResult.scss';

const c = classnames.bind(STYLES);

const GroupsGeneratorResult = ({ result }) =>
  console.log('result', result) || (
    <div className={c('GroupsGeneratorResult')}>
      {result.map(group => (
        <Typography
          className={c('GroupsGeneratorResult__results')}
          variant="body1"
          align="center"
          data-component={'GroupsGeneratorResult__result'}
          key={group[0].id}
        >
          {group.map(participant => participant.name).join()}
        </Typography>
      ))}
    </div>
  );

GroupsGeneratorResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupsGeneratorResult;
