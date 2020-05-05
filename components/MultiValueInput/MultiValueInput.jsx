import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withTheme, styled } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import classnames from 'classnames/bind';
import STYLES from './MultiValueInput.module.scss';

const c = classnames.bind(STYLES);

class MultiValueInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
    this.inputRef = React.createRef();
  }

  onCurrentValueChange = e => {
    const { delimiters } = this.props;
    const { value } = e.target;
    const regexFromMyArray = new RegExp(delimiters.join('|\\'), 'gi');
    if (regexFromMyArray.test(value)) {
      const values = value
        .split(regexFromMyArray)
        .map(val => val.trim())
        .filter(Boolean);
      this.addValues(values);
    } else {
      this.setState({
        currentValue: e.target.value,
      });
    }
  };

  addInputValue = () => {
    const { currentValue } = this.state;
    if (currentValue) {
      const { delimiters } = this.props;
      const regexFromMyArray = new RegExp(delimiters.join('|\\'), 'gi');
      const values = currentValue
        .split(regexFromMyArray)
        .map(val => val.trim())
        .filter(Boolean);
      this.addValues(values);
    }
  };

  onValueDelete = valueToDelete => {
    const { value: values, name, onChange } = this.props;
    const indexToDelete = values.indexOf(valueToDelete);
    const clonedValues = values.slice();
    clonedValues.splice(indexToDelete, 1);
    const event = { target: { name, value: clonedValues } };
    onChange(event);
  };

  addValues = newValues => {
    const { value: values, name, onChange } = this.props;
    const event = { target: { name, value: values.concat(newValues) } };
    onChange(event);
    this.setState({ currentValue: '' });
  };

  handleKeyPress = e => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      this.addInputValue();
      e.preventDefault();
    }
  };

  handleDivClick = () => {
    // The input is in reality quite small and doesn't have visual boundaries
    // For that reason we will focus the input as soon as the div is clicked
    this.inputRef.current.focus();
  };

  onBlur = () => {
    this.addInputValue();
  };

  render() {
    const { name } = this.props;
    const {
      // If we don't supply an id, we will use the field name as id
      // This improves accessibility (by having all fields tied their labels)
      id = name,
      value: values,
      label,
      messageEmpty,
      placeholder,
      helperText,
      fullWidth,
      theme,
      error,
      'data-testid': dataTestId,
      className,
      inputProps,
      InputProps,
      FormHelperTextProps,
      ...rest
    } = this.props;
    const { delimiters, onChange, ...extra } = rest;
    const { currentValue } = this.state;
    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = label && id ? `${id}-label` : undefined;
    const MyInputLabel = styled(InputLabel)({
      ...theme.typography.h3,
      top: 0,
      left: 0,
      position: 'relative',
      transform: 'initial',
    });
    return (
      <FormControl error={error} fullWidth={fullWidth} data-testid={dataTestId} margin="normal">
        <MyInputLabel htmlFor={id} id={inputLabelId} className={c('MultiValueInput__label')}>
          {label}
        </MyInputLabel>
        <div
          role="presentation"
          className={c('MultiValueInput__border', { 'MultiValueInput__border--error': error })}
          onClick={this.handleDivClick}
        >
          <div className={c('MultiValueInput__itemsList')}>
            {values.map(value => (
              <Chip
                onClick={e => {
                  // Stop the input from being focused when a Chip is clicked
                  e.stopPropagation();
                }}
                key={Math.random()}
                label={value}
                onDelete={this.onValueDelete}
              />
            ))}{' '}
            <Input
              id={id}
              onChange={this.onCurrentValueChange}
              type="text"
              value={currentValue}
              placeholder={!values.length ? placeholder : null}
              className={c('MultiValueInput__input', className)}
              disableUnderline
              onKeyDown={this.handleKeyPress}
              onBlur={this.onBlur}
              inputProps={{
                ...inputProps,
                autoComplete: 'off',
                ref: this.inputRef,
                'data-hj-whitelist': true,
              }}
              {...InputProps}
              {...extra}
            />
          </div>
        </div>
        {helperText && (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        )}
        <Typography color="textSecondary" variant="caption" />
      </FormControl>
    );
  }
}

MultiValueInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  messageEmpty: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  fullWidth: PropTypes.bool,
  delimiters: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  'data-testid': PropTypes.string,
  error: PropTypes.bool,
  inputProps: PropTypes.shape({}),
  InputProps: PropTypes.shape({}),
  FormHelperTextProps: PropTypes.shape({}),
  theme: PropTypes.shape({
    typography: PropTypes.shape({
      h3: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

MultiValueInput.defaultProps = {
  id: undefined,
  delimiters: [','],
  placeholder: null,
  helperText: null,
  fullWidth: false,
  value: [],
  className: '',
  'data-testid': '',
  inputProps: {},
  InputProps: {},
  FormHelperTextProps: {},
  error: false,
};

export default withTheme(MultiValueInput);
