import React from 'react';
import { Link } from 'react-router';

import earth from '../../../resources/svg/triste.svg';
import s from './Triste.scss';

class Triste extends React.Component {

  render() {
    return (
      <div className={s.root}>

        <object type="image/svg+xml" data={earth}></object>

        <h1>¡Que triste!</h1>

        <h2>Parece que no te gusta ver el mundo limpio</h2>
        <h3>¿Por qúe lo haces?</h3>

        <Link to="/clasificacion">
          <paper-fab color="rojo" raised class={s.button}></paper-fab>
        </Link>

        <h3>Presiona para concientizarte</h3>
      </div>
    );
  }
}

module.exports = Triste;
