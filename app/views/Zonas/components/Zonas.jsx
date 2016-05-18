import React from 'react';

import Toolbar from '../../../components/Toolbar';

import a from './zonas.png';
import b from './2.png';
import c from './3.png';
import d from './4.png';
import e from './5.png';

import s from './Zonas.scss';

class Zonas extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <Toolbar link='/encuesta' subtitle="Zonas y frecuencias de recolección" icon="trending_up" />

        <iron-image src={a} preload fade className={s.zonas}></iron-image>
        <iron-image src={b} preload fade className={s.zonas}></iron-image>
        <iron-image src={c} preload fade className={s.zonas}></iron-image>
        <iron-image src={d} preload fade className={s.zonas}></iron-image>
        <iron-image src={e} preload fade className={s.zonas}></iron-image>

      </div>
    );
  }
}

module.exports = Zonas;
