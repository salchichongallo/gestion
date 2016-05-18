import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Home from './views/Home';

export default {
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: {
        component: Home
      },
      childRoutes: [
        require('./views/Imagenes'),
        require('./views/Triste'),
        require('./views/Genial'),
        require('./views/Clasificacion'),
        require('./views/Conciencia'),
        require('./views/Encuesta'),
        require('./views/Estadisticas'),
        require('./views/Zonas'),
        require('./views/Soluciones'),
      ]
    }
  ]
}
