import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import Paper from '@material-ui/core/Paper';

import { withTranslation } from '../../../i18n';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';

import withTracking from '../../../hocs/withTracking.jsx';
import DiceTable from './three/DiceTable.jsx';
import TextField from '../../TextField.jsx';

import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import STYLES from './DicePage.module.scss';
import diceOgImage from './dice_og_image.png';
import { ANALYTICS_TYPE_DICE } from '../../../constants/analyticsTypes';

import { isServer } from '../../../utils';

const MAX_NUMBER_DICE = 20;
const ValidatedTextField = withFieldValidation(TextField);

const generateDice = (activeDice, numDice) => {
  const newDice = {};
  for (let i = 0; i < numDice; i += 1) {
    const randomId = uuidv4();
    newDice[randomId] = {
      id: randomId,
      actions: {
        roll: null,
        hide: null,
      },
      result: null,
      active: i < activeDice,
    };
  }
  return newDice;
};

const getResultLabel = result => {
  switch (result) {
    case undefined:
      return '?';
    case null:
      return '-';
    default:
      return result;
  }
};

const DicePageContainer = ({ t, track }) => {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [dice, setDice] = useState(generateDice(numberOfDice, MAX_NUMBER_DICE));

  const diceList = Object.values(dice);

  const activeDice = diceList.filter(die => die.active);

  const setupActions = (id, roll, hide) => {
    setDice(prevDice => ({ ...prevDice, [id]: { ...prevDice[id], actions: { roll, hide } } }));
  };

  const handleDiceResult = (id, result) => {
    setDice(prevDice => ({ ...prevDice, [id]: { ...prevDice[id], result } }));
  };

  function handleRollDice() {
    track({
      mp: { name: `Toss - ${ANALYTICS_TYPE_DICE}`, properties: { drawType: ANALYTICS_TYPE_DICE } },
      ga: { action: 'Toss', category: ANALYTICS_TYPE_DICE },
    });
    setDice(prevDice =>
      Object.values(prevDice).reduce((acc, current) => {
        acc[current.id] = { ...current, result: null };
        return acc;
      }, {}),
    );
    Object.values(dice).forEach(({ active, actions }) => {
      if (active) {
        actions.roll();
      } else {
        actions.hide();
      }
    });
  }

  const handleNumDiceChange = numDice => {
    setDice(prevDice => {
      const diceArray = Object.values(prevDice);

      for (let i = 0; i < MAX_NUMBER_DICE; i += 1) {
        diceArray[i].result = null;
        if (i < numDice) {
          diceArray[i].active = true;
        } else {
          diceArray[i].active = false;
        }
      }

      return diceArray.reduce((acc, current) => {
        acc[current.id] = { ...current };
        return acc;
      }, {});
    });
    setNumberOfDice(numDice);
  };

  const allDiceAreReady = activeDice.every(die => die.actions.roll);
  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      pageType="Roll Dice"
      contentClassName={STYLES.container}
      ogImage={diceOgImage}
    >
      <DrawHeading title={t('page_title')} />
      <ValidationProvider
        onSubmit={e => {
          e.preventDefault();
          handleRollDice(dice);
        }}
      >
        <ValidatedTextField
          name="numberOfResults"
          label={t('field_label_number_of_dice')}
          placeholder="1"
          onChange={e => handleNumDiceChange(e.target.value)}
          value={numberOfDice}
          margin="normal"
          type="number"
          validators={[
            { rule: 'required', value: true },
            { rule: 'min', value: 1, message: t('error_field_message_min_results', { min: 1 }) },
            {
              rule: 'max',
              value: MAX_NUMBER_DICE,
              message: t('error_field_message_max_results', { max: MAX_NUMBER_DICE }),
            },
          ]}
        />

        <SubmitFormButton label={t('roll')} disabled={!allDiceAreReady} />
      </ValidationProvider>
      <div className={STYLES.table}>
        {!isServer && (
          <DiceTable
            dice={Object.values(dice)}
            setupActions={setupActions}
            onResult={handleDiceResult}
          />
        )}
      </div>

      <Typography id="resultLabel" variant="h2" align="center" />
      <div>
        {activeDice.map(({ id, result }) => (
          <Paper key={id} className={STYLES.card} elevation={2}>
            <Typography className={STYLES.result} variant="body1" align="center">
              {getResultLabel(result)}
            </Typography>
          </Paper>
        ))}
        {activeDice.length > 1 && (
          <Typography className={STYLES.result} variant="body1" align="center">
            {t('total')} {activeDice.reduce((acc, b) => acc + (b.result || 0), 0)}
          </Typography>
        )}
      </div>
    </Page>
  );
};

DicePageContainer.propTypes = {
  t: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

export default withTracking(withTranslation('DrawDice')(DicePageContainer));
