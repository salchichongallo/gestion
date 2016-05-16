import React from 'react';
import { render } from 'react-dom';
// See https://github.com/reactjs/react-router/blob/master/docs/guides/MinimizingBundleSize.md
import { Router, hashHistory, match } from 'react-router';

import GeneralStyles from './scss/index.scss';

import routes from './routes';

match({history: hashHistory, routes: routes}, (error, redirectLocation, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById('app'));
});
