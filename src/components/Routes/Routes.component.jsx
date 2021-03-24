import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from '../../pages/Favorites/Favorites.page';
import HomePage from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/video/:id">
          <VideoDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
