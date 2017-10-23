import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './EasButton.scss';

const cssModules = (styles = {}) =>
  className => (styles[className] ? styles[className] : className);

const getClassName = cssModules(STYLES);


const EasButton = (props) => {
  const {
    children,
    href,
    className,
    onClick,
    disabled,
    submit,
    secondary,
    selected,
    destructive,
    featured,
    large,
    link,
    iconOnly,
    ...rest
  } = props;

  const classNames = [getClassName('bpk-button')];

  if (secondary) { classNames.push(getClassName('bpk-button--secondary')); }
  if (destructive) { classNames.push(getClassName('bpk-button--destructive')); }
  if (selected) { classNames.push(getClassName('bpk-button--selected')); }
  if (large) { classNames.push(getClassName('bpk-button--large')); }
  if (link) { classNames.push(getClassName('bpk-button--link')); }
  if (featured) { classNames.push(getClassName('bpk-button--featured')); }
  if (iconOnly) { classNames.push(getClassName(large ? 'bpk-button--large-icon-only' : 'bpk-button--icon-only')); }
  if (className) { classNames.push(className); }

  const classNameFinal = classNames.join(' ');

  if (href) {
    return (
      <a href={href} className={classNameFinal} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  // Due to React bug in Chrome, the onClick event fires even if the button is disabled.
  // Pull request is being worked on (as of 2016-12-22): https://github.com/facebook/react/pull/8329
  const onClickWrapper = onClick ? (...args) => {
    if (!disabled) {
      onClick(...args);
    }
  } : null;

  const buttonType = submit ? 'submit' : 'button';

  return (
    <button type={buttonType} disabled={disabled} className={classNameFinal} onClick={onClickWrapper} {...rest}>
      {children}
    </button>
  );
};

EasButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  secondary: PropTypes.bool,
  selected: PropTypes.bool,
  destructive: PropTypes.bool,
  large: PropTypes.bool,
  link: PropTypes.bool,
  iconOnly: PropTypes.bool,
  featured: PropTypes.bool,
};

EasButton.defaultProps = {
  href: null,
  className: null,
  disabled: false,
  onClick: null,
  submit: false,
  secondary: false,
  selected: false,
  destructive: false,
  large: false,
  link: false,
  iconOnly: false,
  featured: false,
};


export default EasButton;
