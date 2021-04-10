import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import MuiButton from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton';

// For some reason, refs are not being passed down to this component
// even when using `React.forwardRef`
// eslint-disable-next-line react/prefer-stateless-function
class ButtonLink extends Component {
  render() {
    const { href, hrefAs, prefetch, children, ...rest } = this.props;
    return (
      <NextLink href={href} as={hrefAs} prefetch={prefetch}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a {...rest}>{children}</a>
      </NextLink>
    );
  }
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  hrefAs: PropTypes.string,
  children: PropTypes.node.isRequired,
  prefetch: PropTypes.bool,
};

ButtonLink.defaultProps = {
  hrefAs: null,
  prefetch: true,
};

const Button = ({ children, ...rest }) => (
  <MuiButton component={ButtonLink} {...rest}>
    {children}
  </MuiButton>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export const IconButton = ({ children, ...rest }) => (
  <MuiIconButton component={ButtonLink} {...rest}>
    {children}
  </MuiIconButton>
);
IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
