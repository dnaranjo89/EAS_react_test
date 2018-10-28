import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classnames from 'classnames/bind';

import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Typographies from '../Pages/Typographies/Typographies';
import STYLES from './AppShell.scss';

import PublishedRandomNumberPageContainer from '../Pages/RandomNumber/PublishedRandomNumberPageContainer';
import PublishedGroupsGeneratorPageContainer from '../Pages/GroupsGenerator/PublishedGroupsGeneratorPageContainer';
import RafflePageContainer from '../Pages/RafflePage/RafflePageContainer';
import PublishedRafflePageContainer from '../Pages/RafflePage/PublishedRafflePageContainer';
import RandomNumberPageContainer from '../Pages/RandomNumber/RandomNumberPageContainer';
import GroupsGeneratorPageContainer from '../Pages/GroupsGenerator/GroupsGeneratorPageContainer';
import FacebookLoginRafflePageContainer from '../Pages/FacebookLoginRaffle/FacebookLoginRafflePageContainer';
import PublishedFacebookLoginRafflePageContainer from '../Pages/FacebookLoginRaffle/PublishedFacebookLoginRafflePageContainer';
import FacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/FacebookPhotoRafflePageContainer';
import PublishedFacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/PublishedFacebookPhotoRafflePageContainer';
import LetterDrawPageContainer from '../Pages/LetterDrawPage/LetterDrawPageContainer';
import SpinArrowPageContainer from '../Pages/SpinArrowPage/SpinArrowPageContainer';
import FlipCoinPageContainer from '../Pages/FlipCoinPage/FlipCoinPageContainer';

const c = classnames.bind(STYLES);

const AppShell = () => (
  <div className={c('AppShell')}>
    <Header />
    <Switch>
      <Route exact path="/" component={props => <HomePage {...props} />} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/typography" component={Typographies} />

      <Route exact path="/groups" component={GroupsGeneratorPageContainer} />
      <Route
        exact
        path="/groups/public"
        component={props => <GroupsGeneratorPageContainer isPublic {...props} />}
      />
      <Route exact path="/groups/:drawId" component={PublishedGroupsGeneratorPageContainer} />

      <Route exact path="/number" component={RandomNumberPageContainer} />
      <Route
        exact
        path="/number/public"
        component={props => <RandomNumberPageContainer isPublic {...props} />}
      />
      <Route exact path="/number/:drawId" component={PublishedRandomNumberPageContainer} />

      <Route exact path="/raffle" component={props => <RafflePageContainer {...props} />} />
      <Route path="/raffle/:drawId" component={PublishedRafflePageContainer} />

      <Route exact path="/facebook_photo" component={FacebookPhotoRafflePageContainer} />
      <Route path="/facebook_photo/:drawId" component={PublishedFacebookPhotoRafflePageContainer} />

      <Route exact path="/facebook_login" component={FacebookLoginRafflePageContainer} />
      <Route path="/facebook_login/:drawId" component={PublishedFacebookLoginRafflePageContainer} />

      <Route exact path="/letter" component={LetterDrawPageContainer} />

      <Route exact path="/flip-a-coin" component={FlipCoinPageContainer} />

      <Route exact path="/arrow" component={SpinArrowPageContainer} />

      <Route render={() => <div>Not found</div>} />
    </Switch>
    <Footer />
  </div>
);

AppShell.propTypes = {};

export default AppShell;
