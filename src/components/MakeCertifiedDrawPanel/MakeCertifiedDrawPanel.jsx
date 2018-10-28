import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// eslint-disable-next-line react/prop-types
const CurrentDrawCertifiedLink = ({ match, history, location, staticContext, ...rest }) => (
  <Link to={`${match.path}/public`} {...rest} />
);
CurrentDrawCertifiedLink.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

const MakeCertifiedDrawPanel = ({ children, buttonLabel }) => (
  <Card>
    <CardContent>
      <Typography variant="body2" component="p">
        {children}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        component={withRouter(CurrentDrawCertifiedLink)}
        variant="contained"
        data-component="MakeCertifiedDrawPanel__button"
      >
        {buttonLabel}
      </Button>
    </CardActions>
  </Card>
);

MakeCertifiedDrawPanel.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MakeCertifiedDrawPanel;
