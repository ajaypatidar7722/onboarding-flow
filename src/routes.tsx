/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import OnboardingStep from './containers/OnboardingStep';

const Routes = () => (
  <Switch>
    <Route path="/onboarding/:stepNumber" component={OnboardingStep} />
    <Redirect from="*" to="/onboarding/1" />
  </Switch>
);

export default Routes;
