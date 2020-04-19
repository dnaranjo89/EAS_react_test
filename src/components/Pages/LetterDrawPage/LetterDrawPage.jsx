import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { withTranslation } from '../../i18n';
import STYLES from './LetterDrawPage.module.scss';

const c = classnames.bind(STYLES);
class LetterDrawPage extends React.Component {
  state = {};

  handleDateChange = () => {};

  render() {
    return (
      <div className={c('LetterDrawPage', 'LetterDrawPage__tails')}>
        <div className={c('LetterDrawPage__side', 'LetterDrawPage__side--a')} />
        <div className={c('LetterDrawPage__side', 'LetterDrawPage__side--b')} />
      </div>
    );
  }
}

LetterDrawPage.propTypes = {
  values: PropTypes.shape({
    numberOfLetters: PropTypes.number.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withTranslation('LetterDrawPage')(LetterDrawPage);
