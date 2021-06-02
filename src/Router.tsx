import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { Home } from '../src/templates/index';

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
    </Switch>
  );
};

export default Router;
