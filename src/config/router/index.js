import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './publicRoute';
import DetailMovie from '../../page/detail';
import Home from '../../page/home'
import Search from '../../page/search';
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute search={false} exact path="/" component={Home} />
        <PublicRoute search={false} exact path="/search" component={Search} />
        <PublicRoute search={true} exact path="/:id" component={DetailMovie} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
