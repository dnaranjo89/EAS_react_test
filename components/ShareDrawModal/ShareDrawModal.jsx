import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import classnames from 'classnames/bind';
import { withTranslation, Trans } from 'react-i18next';
import PublicModeButton from '../PublicModeButton/PublicModeButton.jsx';
import STYLES from './ShareDrawModal.module.scss';

const c = classnames.bind(STYLES);

class ShareDrawModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { publicDrawUrl, analyticsDrawType, t } = this.props;
    return (
      <div className={c('ShareDrawModal__button-row')}>
        <Button onClick={this.handleClickOpen} data-testid="ShareDrawButton">
          {t('share_result')}
        </Button>
        <Dialog
          fullScreen={this.fullScreen}
          open={open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle>{t('share_result_dialog_title')}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Trans ns="ShareDrawModal" i18nKey="share_result_dialog_body" />
              {/* {t('share_result_dialog_body')} */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              data-testid="ShareDrawButton__cancel"
              onClick={this.handleClose}
              color="primary"
            >
              {t('share_result_dialog_cancel')}
            </Button>
            <PublicModeButton
              to={publicDrawUrl}
              trackingData={{
                mp: {
                  name: `Start Public Draw - ${analyticsDrawType}`,
                  properties: { drawType: analyticsDrawType, source: 'From Quick Result' },
                },
                ga: {
                  category: analyticsDrawType,
                  action: 'Start Public',
                  label: 'From Quick Result',
                },
              }}
              data-testid="ShareDrawButton__confirm"
              color="primary"
            >
              {t('share_result_dialog_ok')}
            </PublicModeButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ShareDrawModal.propTypes = {
  publicDrawUrl: PropTypes.string.isRequired,
  analyticsDrawType: PropTypes.string.isRequired, // eslint-disable-line react/forbid-prop-types
  t: PropTypes.func.isRequired,
};

export default withMobileDialog()(withTranslation('ShareDrawModal')(ShareDrawModal));
