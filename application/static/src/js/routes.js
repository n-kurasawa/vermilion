import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AppHandler from './components/AppHandler.jsx';
import AdminAppHandler from './components/AdminAppHandler.jsx';
import HomeHandler from './components/HomeHandler.jsx';

export default (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="home" path="/" handler={HomeHandler} >
      <Route name="admin" path="/admin" handler={AdminAppHandler} />
    </Route>
    <Redirect from="*" to="home" />
  </Route>
);
