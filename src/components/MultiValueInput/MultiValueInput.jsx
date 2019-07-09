import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField.jsx';

import MultiValueDisplay from '../MultiValueDisplay/MultiValueDisplay.jsx';

class MultiValueInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
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

  render() {
    const {
      value: values,
      labelDisplayList,
      messageEmpty,
      'data-testid': dataComponent,
      ...rest
    } = this.props;
    const { delimiters, onChange, ...extra } = rest;
    const { currentValue } = this.state;
    return (
      <div data-testid={dataComponent}>
        <TextField
          onChange={this.onCurrentValueChange}
          type="text"
          margin="normal"
          value={currentValue}
          {...extra}
          inputProps={{ ...extra.inputProps, 'data-hj-whitelist': true }}
        />
        <MultiValueDisplay
          label={labelDisplayList}
          values={values}
          messageEmpty={messageEmpty}
          allowDelete
          onDelete={this.onValueDelete}
        />
      </div>
    );
  }
}

MultiValueInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelDisplayList: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  messageEmpty: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  delimiters: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  'data-testid': PropTypes.string,
};

MultiValueInput.defaultProps = {
  delimiters: ['Enter', ','],
  value: [],
  'data-testid': '',
};

export default MultiValueInput;
