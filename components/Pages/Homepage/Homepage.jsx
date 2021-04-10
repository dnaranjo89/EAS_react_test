import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import DrawCard from '../../DrawCard/DrawCard.jsx';
import Page from '../../Page/Page.jsx';
import randomNumberIcon from './random_number.png';
import randomItemIcon from './random_item.png';
import arrowIcon from './arrow.svg';
import groupsIcon from './groups.svg';
import coinIcon from './coin.svg';
import randomLetterIcon from './random_letter.png';
import diceIcon from './dice.svg';
import linkSetsIcon from './link_sets.png';
import tournamentIcon from './tournament.png';
import raffleIcon from './raffle.svg';
import Principle from './Principle.jsx';
// import secretSantaIcon from './secret_santa.svg';
import easyIcon from './principle_easy.svg';
import freeIcon from './principle_free.svg';
import fastIcon from './principle_fast.svg';
import STYLES from './Homepage.module.scss';

const HomePage = () => {
  const { t } = useTranslation('Homepage');
  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      contentClassName={STYLES.container}
      pageType="Homepage"
    >
      <Typography variant="h1" align="center">
        {t('choose_raffle')}
      </Typography>
      <div className={STYLES.draws}>
        <div>
          <DrawCard icon={raffleIcon} href="/raffles">
            {t('draw_title_raffle')}
          </DrawCard>
          <DrawCard icon={groupsIcon} href="/groups">
            {t('draw_title_groups_generator')}
          </DrawCard>
          <DrawCard icon={randomItemIcon} href="/item">
            {t('draw_title_random_item')}
          </DrawCard>
          <DrawCard icon={linkSetsIcon} href="/sets">
            {t('draw_title_link_sets')}
          </DrawCard>
          <DrawCard icon={diceIcon} href="/dice" prefetch={false}>
            {t('draw_title_roll_dice')}
          </DrawCard>
        </div>
        <div>
          <DrawCard icon={randomNumberIcon} href="/number">
            {t('draw_title_random_number')}
          </DrawCard>
          <DrawCard icon={randomLetterIcon} href="/letter">
            {t('draw_title_random_letter')}
          </DrawCard>
          <DrawCard icon={coinIcon} href="coin/" prefetch={false}>
            {t('draw_title_flip_coin')}
          </DrawCard>
          <DrawCard icon={arrowIcon} href="/spinner" prefetch={false}>
            {t('draw_title_spin_arrow')}
          </DrawCard>
          <DrawCard
            legacy
            icon={tournamentIcon}
            href="https://echaloasuerte.com/draw/new/tournament/"
          >
            {t('draw_title_tournament')}
          </DrawCard>
          {/* TODO When adding Secret Santa, remember to remove `noindex` */}
          {/* <DrawCard icon={secretSantaIcon} href="/secret-santa">
            {t('draw_title_secret_santa')}
          </DrawCard> */}
        </div>
      </div>
      <div className={STYLES.principles}>
        <Principle
          image={easyIcon}
          imageAlt={t('principle_easy')}
          title={t('principle_easy')}
          description={t('principle_easy_description')}
        />
        <Principle
          image={fastIcon}
          imageAlt={t('principle_fast')}
          title={t('principle_fast')}
          description={t('principle_fast_description')}
        />
        <Principle
          image={freeIcon}
          imageAlt={t('principle_free')}
          title={t('principle_free')}
          description={t('principle_free_description')}
        />
      </div>
    </Page>
  );
};
HomePage.propTypes = {};

export default HomePage;
