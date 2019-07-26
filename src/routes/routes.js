import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../views/home/home';
import SigninPage from '../views/authentications/signin';
import SignupPage from '../views/authentications/signup';
import EventListPage from '../views/events/events';
import DashboardPage from '../views/dashboard/dashboard';
import AboutPage from '../views/about/about';

const Routes = props => {
  return (
    <div id="router">
      <main className="container">
        <Switch>
          <Redirect from='/' to='/login' exact />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/login' component={SigninPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/events' component={EventListPage} />
        </Switch>
      </main>
    </div>
  )
}

export default Routes;
