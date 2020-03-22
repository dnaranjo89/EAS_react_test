import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classnames from 'classnames/bind';

import HomePage from '../Pages/HomePage/HomePage.jsx';
// import AboutPage from '../Pages/AboutPage/AboutPage.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Typographies from '../Pages/Typographies/Typographies.jsx';
import STYLES from './AppShell.scss';
// import config from '../../config/config';

import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import RecentDraws from '../Pages/RecentDraws/RecentDrawsPage.jsx';
import PublishedRandomNumberPageContainer from '../Pages/RandomNumber/PublishedRandomNumberPageContainer.jsx';
import PublishedGroupsGeneratorPage from '../Pages/GroupsGenerator/PublishedGroupsGeneratorPage.jsx';
import RandomNumberPageContainer from '../Pages/RandomNumber/RandomNumberPageContainer.jsx';
import GroupsGeneratorPageContainer from '../Pages/GroupsGenerator/GroupsGeneratorPageContainer.jsx';
import FacebookRafflePageContainer from '../Pages/FacebookRaffle/FacebookRafflePageContainer.jsx';
import PublishedFacebookRafflePage from '../Pages/FacebookRaffle/PublishedFacebookRafflePage.jsx';
// import FacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/FacebookPhotoRafflePageContainer.jsx';
// import PublishedFacebookPhotoRafflePageContainer from '../Pages/FacebookPhotoRaffle/PublishedFacebookPhotoRafflePageContainer.jsx';
// import LetterDrawPageContainer from '../Pages/LetterDrawPage/LetterDrawPageContainer.jsx';
import SpinArrowPageContainer from '../Pages/SpinArrowPage/SpinArrowPageContainer.jsx';
import FlipCoinPageContainer from '../Pages/FlipCoinPage/FlipCoinPageContainer.jsx';
import RafflePageContainer from '../Pages/Raffle/RafflePageContainer.jsx';
import PublishedRafflePage from '../Pages/Raffle/PublishedRafflePage.jsx';
import RafflesPage from '../Pages/Raffles/RafflesPage.jsx';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage.jsx';
import SuccessfullyCreatedDraw from '../Pages/SuccessfullyCreatedDraw/SuccessfullyCreatedDraw.jsx';

const c = classnames.bind(STYLES);

const guidRegex = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}';

const AppShell = () => (
  <div className={c('AppShell')}>
    <Header />
    <Switch>
      <Route exact path="/" component={props => <HomePage {...props} />} />

      {/* Groups */}
      <Route exact path="/groups/:isPublic(public)?" component={GroupsGeneratorPageContainer} />
      <Route
        exact
        path={`/groups/:drawId(${guidRegex})`}
        component={PublishedGroupsGeneratorPage}
      />

      {/* Raffles section */}
      <Route exact path="/raffles" component={RafflesPage} />

      {/* Raffle */}
      <Route exact path="/raffle/:isPublic(public)?" component={RafflePageContainer} />
      <Route exact path={`/raffle/:drawId(${guidRegex})`} component={PublishedRafflePage} />

      {/* Facebook */}
      <Route exact path="/facebook" component={FacebookRafflePageContainer} />
      <Route
        exact
        path={`/facebook/:drawId(${guidRegex})`}
        component={PublishedFacebookRafflePage}
      />

      {/* Random Numbers */}
      <Route exact path="/number/:isPublic(public)?" component={RandomNumberPageContainer} />
      <Route exact path="/number/:drawId" component={PublishedRandomNumberPageContainer} />

      <Route exact path="/coin" component={FlipCoinPageContainer} />
      <Route exact path="/spinner" component={SpinArrowPageContainer} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route exact path="/recent" component={RecentDraws} />
      <Route
        exact
        path={`/:drawType(groups|raffle|facebook)/:drawId(${guidRegex})/success`}
        component={SuccessfullyCreatedDraw}
      />

      {/* <Route exact path="/facebook_photo" component={FacebookPhotoRafflePageContainer} />
      <Route path="/facebook_photo/:drawId" component={PublishedFacebookPhotoRafflePageContainer} />
      <Route exact path="/letter" component={LetterDrawPageContainer} /> */}
      {/* <Route exact path="/about" component={AboutPage} /> */}

      {/* {config.environment === 'local' && ( */}
      <Route exact path="/typography" component={Typographies} />
      {/* )} */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

AppShell.propTypes = {};

export default AppShell;
