import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classnames from 'classnames/bind';
import PublicModeButton from '../PublicModeButton/PublicModeButton.jsx';

import STYLES from './MakePublicDrawPanel.module.scss';

const c = classnames.bind(STYLES);

const MakePublicDrawPanel = ({ buttonLabel, publicDrawUrl, analyticsDrawType, children }) => (
  <Card className={c('MakePublicDrawPanel')}>
    <CardContent>
      <Typography variant="body2" component="p">
        {children}
      </Typography>
    </CardContent>
    <CardActions className={c('MakePublicDrawPanel__actions')}>
      <PublicModeButton
        href={publicDrawUrl}
        hrefAs={publicDrawUrl}
        trackingData={{
          mp: {
            name: `Start Public Draw - ${analyticsDrawType}`,
            properties: { drawType: analyticsDrawType, source: 'From Scratch' },
          },
          ga: { category: analyticsDrawType, action: 'Start Public', label: 'From Scratch' },
        }}
      >
        {buttonLabel}
      </PublicModeButton>
    </CardActions>
  </Card>
);

MakePublicDrawPanel.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  publicDrawUrl: PropTypes.string.isRequired,
  analyticsDrawType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
};

export default MakePublicDrawPanel;
