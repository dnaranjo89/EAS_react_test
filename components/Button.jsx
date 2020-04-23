import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import MuiButton from '@material-ui/core/Button';

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <NextLink href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </NextLink>
);

const RouterButton = ({ children, ...rest }) => (
  <MuiButton component={ButtonLink} {...rest}>
    {children}
  </MuiButton>
);
RouterButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterButton;
