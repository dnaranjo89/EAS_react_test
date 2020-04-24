import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import classnames from 'classnames/bind';
import withTracking from '../withTracking/withTracking.jsx';

import STYLES from './SocialShareButton.scss';

const c = classnames.bind(STYLES);

const SocialButton = ({ socialType, size, ...buttonProps }) => {
  switch (socialType) {
    case 'whatsapp':
      return (
        <WhatsappShareButton {...buttonProps}>
          <WhatsappIcon size={size} />
        </WhatsappShareButton>
      );
    case 'facebook':
      return (
        <FacebookShareButton {...buttonProps}>
          <FacebookIcon size={size} />
        </FacebookShareButton>
      );
    case 'twitter':
      return (
        <TwitterShareButton {...buttonProps}>
          <TwitterIcon size={size} />
        </TwitterShareButton>
      );

    case 'telegram':
      return (
        <TelegramShareButton {...buttonProps}>
          <TelegramIcon size={size} />
        </TelegramShareButton>
      );
    case 'email':
      return (
        <EmailShareButton {...buttonProps}>
          <EmailIcon size={size} />
        </EmailShareButton>
      );
    default:
      return null;
  }
};

SocialButton.propTypes = {
  url: PropTypes.string.isRequired,
  socialType: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string.isRequired,
  beforeOnClick: PropTypes.func.isRequired,
};

SocialButton.defaultProps = {
  size: 32,
};

const SocialShareButton = ({ url, drawType, socialType, track }) => (
  <SocialButton
    beforeOnClick={() =>
      track({
        mp: { name: `Social Share Draw - ${drawType}`, properties: { socialType, drawType } },
        ga: { category: drawType, action: 'Social Share Draw', label: socialType },
      })
    }
    url={url}
    socialType={socialType}
    className={c('SocialShareButton')}
    additionalProps={{ 'data-testid': `SocialButton__${socialType}` }}
  />
);

SocialShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  drawType: PropTypes.string.isRequired,
  socialType: PropTypes.string.isRequired,
  track: PropTypes.func.isRequired,
};

export default withTracking(SocialShareButton);
