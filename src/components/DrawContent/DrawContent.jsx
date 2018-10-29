import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';

import TransparentPanel from '../TransparentPanel/TransparentPanel';
import STYLES from './DrawContent.scss';

const c = classNames.bind(STYLES);

const DrawContent = ({ title, footer, children }) => (
  <TransparentPanel noPadding>
    <div>
      {title && (
        <div>
          <Typography
            variant="display2"
            align={'center'}
            data-component={'PublishedRandomNumberPage__Title'}
          >
            {title}
          </Typography>
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className={c('DrawContent__footer')}>
          <section>{footer}</section>
        </div>
      )}
    </div>
  </TransparentPanel>
);

DrawContent.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
};

DrawContent.defaultProps = {
  title: null,
  footer: null,
};

export default DrawContent;
