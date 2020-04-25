import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import MuiButton from '@material-ui/core/Button';

const ButtonLink = React.forwardRef(({ href, hrefAs, children, ...rest }, ref) => (
  <NextLink ref={ref} href={href} as={hrefAs}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a {...rest}>{children}</a>
  </NextLink>
));

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  hrefAs: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonLink.defaultProps = {
  hrefAs: null,
};

const Button = ({ children, ...rest }) => (
  <MuiButton component={ButtonLink} {...rest}>
    {children}
  </MuiButton>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
