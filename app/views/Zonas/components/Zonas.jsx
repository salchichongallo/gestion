import React from 'react';

import Toolbar from '../../../components/Toolbar';

import imagen from './zonas.png';
import s from './Zonas.scss';

class Zonas extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <Toolbar link='/encuesta' subtitle="Zonas y frecuencias de recolección" icon="trending_up" />

        <img src={imagen} />
      </div>
    );
  }
}

module.exports = Zonas;
