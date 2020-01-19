import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import * as Sentry from '@sentry/browser';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import withTracking from '../withTracking/withTracking.jsx';
import STYLES from './ShareUrl.module.scss';

const SNACK_CLOSE_DELAY = 2000;

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const ShareUrl = ({ url, drawType, track, t }) => {
  const inputEl = useRef(null);
  const [state, setState] = React.useState({
    open: false,
  });
  const { open } = state;

  const handleClose = () => {
    setState({ open: false });
  };
  const handleOnCopy = (text, result) => {
    const socialType = 'copyUrlToClipboard';
    if (result) {
      track({
        mp: { name: `Social Share Draw - ${drawType}`, properties: { socialType, drawType } },
        ga: { category: drawType, action: 'Social Share Draw', label: socialType },
      });
      setState({ open: true });
      setTimeout(handleClose, SNACK_CLOSE_DELAY);
    } else {
      Sentry.captureMessage('Unable to copy draw url to clipboard');
    }
  };
  const vertical = 'top';
  const horizontal = 'center';
  return (
    <Paper className={STYLES.Container}>
      <InputBase
        className={STYLES.Url}
        inputProps={{ 'aria-label': 'Url', ref: inputEl, className: STYLES.Input }}
        value={url}
      />
      <Divider className={STYLES.Divider} orientation="vertical" />
      <CopyToClipboard text={url} onCopy={handleOnCopy}>
        <Button startIcon={<FileCopyIcon />} className={STYLES.Button}>
          {t('copy')}
        </Button>
      </CopyToClipboard>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        TransitionComponent={SlideTransition}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{t('url_copied')}</span>}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Paper>
  );
};

ShareUrl.propTypes = {
  url: PropTypes.string.isRequired,
  drawType: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

export default withTranslation('ShareUrl')(withTracking(ShareUrl));
