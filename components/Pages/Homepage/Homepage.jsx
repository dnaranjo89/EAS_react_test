import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import DrawCard from '../../DrawCard/DrawCard.jsx';
import DrawGroup from './DrawGroup.jsx';
import Page from '../../Page/Page.jsx';
import randomNumberIcon from './random_number.png';
import randomItemIcon from './random_item.png';
import arrowIcon from './arrow.svg';
import groupsIcon from './groups.svg';
import coinIcon from './coin.svg';
import randomLetterIcon from './random_letter.png';
import diceIcon from './dice.svg';
import linkSetsIcon from './link_sets.png';
import raffleIcon from './raffle.svg';

import STYLES from './Homepage.module.scss';

const HomePage = () => {
  const { t } = useTranslation('Homepage');
  return t('draw_title_raffle');
};

HomePage.propTypes = {};

export default HomePage;
