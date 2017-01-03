import { browserHistory } from 'react-router';
import Routes from './router/routes';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('js-content')
);
