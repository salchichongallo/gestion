import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Home from './views/Home';
import Demo from './views/Demo';

export default {
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: {
        component: Home
      },
      childRoutes: [
        require('./views/Demo'),
        require('./views/Imagenes'),
        require('./views/Triste'),
        require('./views/Clasificacion'),
      ]
    }
  ]
}
