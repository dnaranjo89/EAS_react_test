import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';
import SocialShareButton from './SocialShareButton.jsx';
import ShareUrl from '../ShareUrl/ShareUrl.jsx';
import STYLES from './ShareButtons.scss';

const c = classnames.bind(STYLES);

const availableShareButtons = ['facebook', 'twitter', 'telegram', 'whatsapp', 'email', 'url'];

const ShareButtons = ({ sectionTitle, drawType, url, types }) => (
  <div className={c('ShareButtons')}>
    {sectionTitle && (
      <Typography variant="subtitle2" align="center">
        {sectionTitle}
      </Typography>
    )}
    {types
      .filter(type => availableShareButtons.indexOf(type) >= 0)
      .map(type =>
        type === 'url' ? (
          <ShareUrl key={type} url={url} drawType={drawType} />
        ) : (
          <SocialShareButton key={type} url={url} drawType={drawType} socialType={type} />
        ),
      )}
  </div>
);

ShareButtons.propTypes = {
  sectionTitle: PropTypes.string,
  drawType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string),
};
ShareButtons.defaultProps = {
  sectionTitle: '',
  types: ['facebook', 'twitter', 'telegram', 'whatsapp'],
};

export default ShareButtons;
