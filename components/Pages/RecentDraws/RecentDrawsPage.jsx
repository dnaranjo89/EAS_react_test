import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useTranslation from 'next-translate/useTranslation';
import withTracking from '../../../hocs/withTracking.jsx';
import STYLES from './RecentDrawsPage.module.scss';
import Page from '../../Page/Page.jsx';
import RecentDraws from '../../../services/recentDraws';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import RecentDrawsTable from './RecentDrawsTable.jsx';

const c = classnames.bind(STYLES);

const RecentDrawsPage = props => {
  const { track } = props;
  const { t } = useTranslation('RecentDraws');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrawId, setSelectedDrawId] = useState(null);

  const handleDrawClick = () => {
    track({
      mp: {
        name: `Link to recent draw`,
      },
      ga: { action: 'Link to recent draw', category: 'Recent draw' },
    });
  };

  const handleClickRemove = drawId => {
    setIsModalOpen(true);
    if (drawId) {
      setSelectedDrawId(drawId);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClearRecentDraws = () => {
    RecentDraws.clear();
    handleClose();
  };

  const handleRemoveRecentDraw = drawId => {
    RecentDraws.removeDraw(drawId);
    handleClose();
  };

  const recentDraws = RecentDraws.getAll();
  const listEmpty = !recentDraws.length;
  const draws = recentDraws.map(draw => ({
    ...draw,
    scheduleDate: moment.unix(draw.scheduleDate).format('LLL'),
  }));
  return (
    <Page
      noIndex
      htmlTitle={t('html_title')}
      pageType="Recent draws"
      contentClassName={c('RecentDrawsPage')}
    >
      <DrawHeading title={t('page_title')} />
      {listEmpty ? (
        <Typography variant="body2">{t('empty_list')}</Typography>
      ) : (
        <>
          <RecentDrawsTable
            draws={draws}
            handleClickRemove={handleClickRemove}
            handleDrawClick={handleDrawClick}
          />
          <div className={STYLES.buttons}>
            <Button variant="contained" onClick={() => handleClickRemove()}>
              {t('delete_recent_raffles_button_label')}
            </Button>
          </div>
          <Dialog
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="clear-history"
            aria-describedby="dialog-clear-history"
          >
            <DialogTitle id="alert-dialog-title">
              {selectedDrawId
                ? t('delete_recent_draw_modal_title')
                : t('delete_all_recent_draws_modal_title')}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-clear-history">
                {selectedDrawId
                  ? t('delete_recent_draw_modal_content')
                  : t('delete_all_recent_draws_modal_content')}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                {t('delete_all_recent_draws_modal_cancel')}
              </Button>
              <Button
                onClick={
                  selectedDrawId
                    ? () => handleRemoveRecentDraw(selectedDrawId)
                    : handleClearRecentDraws
                }
                color="primary"
              >
                {selectedDrawId
                  ? t('delete_recent_draw_modal_confirm')
                  : t('delete_all_recent_draws_modal_confirm')}
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Page>
  );
};

RecentDrawsPage.propTypes = {
  track: PropTypes.func.isRequired,
};

export default withTracking(RecentDrawsPage);
