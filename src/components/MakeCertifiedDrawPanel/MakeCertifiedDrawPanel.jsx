import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classnames from 'classnames/bind';
import PublicModeButton from '../PublicModeButton/PublicModeButton.jsx';

import STYLES from './MakeCertifiedDrawPanel.scss';

const c = classnames.bind(STYLES);

const MakeCertifiedDrawPanel = ({ buttonLabel, publicDrawUrl, analyticsDrawType, children }) => (
  <Card className={c('MakeCertifiedDrawPanel')}>
    <CardContent>
      <Typography variant="body2" component="p">
        {children}
      </Typography>
    </CardContent>
    <CardActions className={c('MakeCertifiedDrawPanel__actions')}>
      <PublicModeButton
        to={publicDrawUrl}
        data-testid="MakeCertifiedDrawPanel__button"
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

MakeCertifiedDrawPanel.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  publicDrawUrl: PropTypes.string.isRequired,
  analyticsDrawType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
};

export default MakeCertifiedDrawPanel;
