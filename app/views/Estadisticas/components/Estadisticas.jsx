import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';

import s from './Estadisticas.scss';

class Estadisticas extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Toolbar subtitle="Selecciona la imagen que más te guste" />

        <main>

        </main>
      </div>
    );
  }
}

module.exports = Estadisticas;
