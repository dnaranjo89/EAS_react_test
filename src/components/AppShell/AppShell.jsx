import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import DrawPage, { urls } from '../DrawPage/DrawPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import STYLES from './AppShell.scss';

const c = className => STYLES[className];

const AppShell = () => (
  <div className={c('AppShell')}>
    <Header />
    <div className={c('AppShell__content')}>
      <Switch>
        <Route exact path="/" component={props => <HomePage {...props} />} />
        <Route exact path="/about" component={About} />
        <Route path={urls} component={props => <DrawPage {...props} />} />
        <Route render={() => <div>Not found</div>} />
      </Switch>
    </div>
    <Footer />
  </div>
);

AppShell.propTypes = {};

export default AppShell;
