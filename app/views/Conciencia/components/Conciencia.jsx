import React from 'react';
import { Link } from 'react-router';

import earth from '../../../resources/svg/earth.svg';
import s from './Conciencia.scss';

class Conciencia extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <object type="image/svg+xml" data={earth}></object>
        <h1>SGCA</h1>

        <h2 className={s.texto}>
          Ya no hay excusas
          <br />
          <span className={s.verde}>El cambio está en tí</span>
          <br />
          Tu comunidad, Medellín y el mundo
          <br />
          <span className={s.verde}>Cuentan con vos</span>
        </h2>

        <Link to="/">
          <paper-fab color="verde" raised class={s.button}></paper-fab>
        </Link>

        <h3>Inicio</h3>
      </div>
    );
  }
}

module.exports = Conciencia;
