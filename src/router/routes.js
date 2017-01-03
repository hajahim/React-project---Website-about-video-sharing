import React from 'react';
import { Router, Route } from 'react-router';

import Index from '../views/Index';
import Information from '../views/Information';
import NotFound from '../views/NotFound';

const Routes = (props) => ( 
  <Router {...props}>
    <Route path="/" component={Index} />
    <Route path="/watch/:videoID" component={Information} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;