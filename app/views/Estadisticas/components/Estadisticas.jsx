import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';

import s from './Estadisticas.scss';

import imagen from './estadisticas.png';

class Estadisticas extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Toolbar link='/conciencia' subtitle="Estadísticas" icon='home' />

          <img src={imagen} />
      </div>
    );
  }
}

module.exports = Estadisticas;
