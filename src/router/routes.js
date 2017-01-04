import React from 'react';
import { Router, Route } from 'react-router';

import Index from '../views/Index';
import InformationContainer from '../views/container/InformationContainer';
import NotFound from '../views/NotFound';

const Routes = (props) => ( 
  <Router {...props}>
    <Route path="/" component={Index} />
    <Route path="/watch/:videoID" component={InformationContainer} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;