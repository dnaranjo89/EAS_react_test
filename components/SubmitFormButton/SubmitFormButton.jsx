import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames/bind';
import STYLES from './SubmitFormButton.module.scss';
import { ValidationContext } from '../FormValidation/ValidationProvider.jsx';

const c = classNames.bind(STYLES);
const SubmitFormButton = ({ label, onClick: handleSubmitButtonClick, ...rest }) => {
  const { handleFormSubmit } = useContext(ValidationContext);
  const handleSubmitClick = event => {
    handleSubmitButtonClick(event);
    handleFormSubmit(event);
  };
  return (
    <div className={c('SubmitFormButton')}>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleSubmitClick}
        data-testid="SubmitFormButton"
        {...rest}
      >
        {label}
      </Button>
    </div>
  );
};

SubmitFormButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SubmitFormButton.defaultProps = {
  onClick: () => {},
};

export default SubmitFormButton;
