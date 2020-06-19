import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withTranslation } from '../../../i18n';
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
// import diceIcon from './dice.svg';
// import cardsIcon from './cards.svg';
// import tournamentIcon from './tournament.png';
// import associateItemsIcon from './associate_items.png';

// import likeIcon from './like.jpg';
import raffleIcon from './raffle.svg';

import STYLES from './Homepage.module.scss';

const c = classNames.bind(STYLES);

const HomePage = ({ t }) => (
  <Page
    htmlTitle={t('html_title')}
    htmlDescription={t('html_description')}
    contentClassName={c('HomePage')}
    pageType="Homepage"
  >
    <div className={c('HomePage__container')}>
      <DrawGroup title={t('section_title_online_raffles')}>
        <DrawCard icon={raffleIcon} href="/raffles">
          {t('draw_title_raffle')}
        </DrawCard>
        <DrawCard icon={groupsIcon} href="/groups">
          {t('draw_title_groups_generator')}
        </DrawCard>
        <DrawCard icon={randomItemIcon} href="/item">
          {t('draw_title_random_item')}
        </DrawCard>
        {/*
          </div>
          <Typography variant="h1"> {t('section_title_simple_draws')}</Typography>
          <div className={c('HomePage__draw-chips-group')}>

        </div> */}
        <DrawCard icon={randomNumberIcon} href="/number">
          {t('draw_title_random_number')}
        </DrawCard>
        <DrawCard icon={randomLetterIcon} href="/letter">
          {t('draw_title_random_letter')}
        </DrawCard>
        <DrawCard icon={randomItemIcon} href="https://echaloasuerte.com/draw/new/item/" legacy>
          {t('draw_title_random_item')}
        </DrawCard>
        {/* <DrawCard icon={tournamentIcon} href="https://echaloasuerte.com/draw/new/tournament/">
          {t('draw_title_tournament')}
        </DrawCard> */}
      </DrawGroup>
      <DrawGroup title={t('simple_draws')}>
        <DrawCard icon={coinIcon} href="coin/">
          {t('draw_title_flip_coin')}
        </DrawCard>
        <DrawCard icon={arrowIcon} href="/spinner">
          {t('draw_title_spin_arrow')}
        </DrawCard>
        <DrawCard icon={diceIcon} href="/dice">
          {t('draw_title_roll_dice')}
        </DrawCard>
        {/* <DrawCard icon={cardsIcon} href="https://echaloasuerte.com/draw/new/cards/">
          {t('draw_title_pick_card')}
        </DrawCard>
        <DrawCard icon={randomNumberIcon} href="https://echaloasuerte.com/draw/new/number/">
          {t('draw_title_random_number')}
        </DrawCard>
        <DrawCard icon={associateItemsIcon} href="https://echaloasuerte.com/draw/new/link_sets/">
          {t('draw_title_associate_items')}
        </DrawCard>
*/}
      </DrawGroup>
      {/* <DrawCard icon={likeIcon} href="/facebook_photo">
        {t('draw_title_facebook_photo')}
      </DrawCard> */}
    </div>
  </Page>
);

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('Homepage')(HomePage);
