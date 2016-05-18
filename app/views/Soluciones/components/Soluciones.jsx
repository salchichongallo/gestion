import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';
import s from './Solucion.scss';

import a from './soluciones.png';

class Soluciones extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Toolbar link='/conciencia' subtitle="Soluciones" icon='tag_faces' />

        <img src={a} />

      </div>
    );
  }
}

module.exports = Soluciones;
