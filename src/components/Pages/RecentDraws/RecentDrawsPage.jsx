import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames/bind';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withTranslation } from '../../i18n';
import withTracking from '../../withTracking/withTracking.jsx';
import STYLES from './RecentDrawsPage.module.scss';
import Page from '../../Page/Page.jsx';
import RecentDraws from '../../../services/recentDraws';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';

const c = classnames.bind(STYLES);

class RecentDrawsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedDraw: null,
    };
  }

  handleClickRemove = draw => {
    this.setState({ modalOpen: true, selectedDraw: draw });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleClearRecentDraws = () => {
    RecentDraws.clear();
    this.handleClose();
  };

  handleRemoveRecentDraw = drawId => {
    RecentDraws.removeDraw(drawId);
    this.handleClose();
  };

  render() {
    const { t, track } = this.props;
    const { modalOpen, selectedDraw } = this.state;
    const recentDraws = RecentDraws.getAll();
    const listEmpty = !recentDraws.length;
    return (
      <Page
        noIndex
        htmlTitle={t('html_title')}
        pageType="Recent draws"
        contentClassName={c('RecentDrawsPage')}
      >
        <DrawHeading title={t('page_title')} />
        {listEmpty ? (
          <Typography variant="body2" data-testid="RecentDraws__list-empty">
            {t('empty_list')}
          </Typography>
        ) : (
          <Fragment>
            <List>
              {recentDraws.map(draw => (
                <ListItem
                  key={draw.id}
                  button
                  component={props => <Link to={draw.url} {...props} />}
                  data-testid="RecentDraws__list-item"
                  onClick={() =>
                    track({
                      mp: {
                        name: `Link to recent draw`,
                      },
                      ga: { action: 'Link to recent draw', category: 'Recent draw' },
                    })
                  }
                >
                  <ListItemText
                    primary={draw.title}
                    secondary={moment.unix(draw.scheduleDate).format('LLL')}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="Delete"
                      edge="end"
                      onClick={() => this.handleClickRemove(draw)}
                      data-testid="RecentDraws__remove-draw"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              onClick={() => this.handleClickRemove()}
              data-testid="RecentDraws__clear-history"
            >
              {t('delete_recent_raffles_button_label')}
            </Button>
            <Dialog
              open={modalOpen}
              onClose={this.handleClose}
              aria-labelledby="clear-history"
              aria-describedby="dialog-clear-history"
            >
              <DialogTitle id="alert-dialog-title">
                {selectedDraw
                  ? t('delete_recent_draw_modal_title')
                  : t('delete_all_recent_draws_modal_title')}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="dialog-clear-history">
                  {selectedDraw
                    ? t('delete_recent_draw_modal_content')
                    : t('delete_all_recent_draws_modal_content')}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  {t('delete_all_recent_draws_modal_cancel')}
                </Button>
                <Button
                  onClick={
                    selectedDraw
                      ? () => this.handleRemoveRecentDraw(selectedDraw.id)
                      : this.handleClearRecentDraws
                  }
                  color="primary"
                  data-testid="RecentDraws__modal-confirm"
                >
                  {selectedDraw
                    ? t('delete_recent_draw_modal_confirm')
                    : t('delete_all_recent_draws_modal_confirm')}
                </Button>
              </DialogActions>
            </Dialog>
          </Fragment>
        )}
      </Page>
    );
  }
}

RecentDrawsPage.propTypes = {
  track: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTracking(withTranslation('RecentDrawsPage')(RecentDrawsPage));
