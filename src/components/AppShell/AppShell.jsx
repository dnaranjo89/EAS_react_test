import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classnames from 'classnames/bind';

import HomePage from '../Pages/HomePage/HomePage.jsx';
// import AboutPage from '../Pages/AboutPage/AboutPage.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
// import Typographies from '../Pages/Typographies/Typographies.jsx';
import STYLES from './AppShell.scss';
// import config from '../../config/config';

import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import RecentDraws from '../Pages/RecentDraws/RecentDrawsPage.jsx';
// import PublishedRandomNumberPageContainer from '../Pages/RandomNumber/PublishedRandomNumberPageContainer.jsx';
import PublishedGroupsGeneratorPageContainer from '../Pages/GroupsGenerator/PublishedGroupsGeneratorPageContainer.jsx';
// import RafflePageContainer from '../Pages/RafflePage/RafflePageContainer.jsx';
// import PublishedRafflePageContainer from '../Pages/RafflePage/PublishedRafflePageContainer.jsx';
// import RandomNumberPageContainer from '../Pages/RandomNumber/RandomNumberPageContainer.jsx';
import GroupsGeneratorPageContainer from '../Pages/GroupsGenerator/GroupsGeneratorPageContainer.jsx';
// import FacebookLoginRafflePageContainer from '../Pages/FacebookLoginRaffle/FacebookLoginRafflePageContainer.jsx';
// import PublishedFacebookLoginRafflePageContainer from '../Pages/FacebookLoginRaffle/PublishedFacebookLoginRafflePageContainer.jsx';
// import FacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/FacebookPhotoRafflePageContainer.jsx';
// import PublishedFacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/PublishedFacebookPhotoRafflePageContainer.jsx';
// import LetterDrawPageContainer from '../Pages/LetterDrawPage/LetterDrawPageContainer.jsx';
// import SpinArrowPageContainer from '../Pages/SpinArrowPage/SpinArrowPageContainer.jsx';
import FlipCoinPageContainer from '../Pages/FlipCoinPage/FlipCoinPageContainer.jsx';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage.jsx';

const c = classnames.bind(STYLES);

const guidRegex = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}';

const AppShell = () => (
  <div className={c('AppShell')}>
    <Header />
    <Switch>
      <Route exact path="/" component={props => <HomePage {...props} />} />

      {/* To be removed once we can confirm that this url is no longer used */}
      <Route
        exact
        path="/draw/new/groups/:isPublic(shared)?"
        component={GroupsGeneratorPageContainer}
      />
      <Route exact path="/groups/:isPublic(public)?" component={GroupsGeneratorPageContainer} />
      <Route
        exact
        path={`/groups/:drawId(${guidRegex})`}
        component={PublishedGroupsGeneratorPageContainer}
      />

      <Route exact path="/draw/new/coin" component={FlipCoinPageContainer} />

      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/recent" component={RecentDraws} />
      {/* <Route exact path="/number" component={RandomNumberPageContainer} />
      <Route
        exact
        path="/number/public"
        component={props => <RandomNumberPageContainer isPublic {...props} />}
      />
      <Route exact path="/number/:drawId" component={PublishedRandomNumberPageContainer} />

      <Route exact path="/raffle" component={props => <RafflePageContainer {...props} />} />
      <Route path="/raffle/:drawId" component={PublishedRafflePageContainer} />

      <Route exact path="/arrow" component={SpinArrowPageContainer} /> */}

      {/* <Route exact path="/facebook_photo" component={FacebookPhotoRafflePageContainer} />
      <Route path="/facebook_photo/:drawId" component={PublishedFacebookPhotoRafflePageContainer} />
      <Route exact path="/facebook_login" component={FacebookLoginRafflePageContainer} />
      <Route path="/facebook_login/:drawId" component={PublishedFacebookLoginRafflePageContainer} />
      <Route exact path="/letter" component={LetterDrawPageContainer} /> */}

      {/* <Route exact path="/about" component={AboutPage} />

      {config.environment === 'local' && (
        <Route exact path="/typography" component={Typographies} />
      )} */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

AppShell.propTypes = {};

export default AppShell;
