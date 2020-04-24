import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import MuiButton from '@material-ui/core/Button';

const ButtonLink = React.forwardRef(({ className, href, hrefAs, children }, ref) => (
  <NextLink ref={ref} href={href} as={hrefAs}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={className}>{children}</a>
  </NextLink>
));

const Button = ({ children, ...rest }) => (
  <MuiButton component={ButtonLink} {...rest}>
    {children}
  </MuiButton>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
