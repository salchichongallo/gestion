import React from 'react';
import { Link } from 'react-router';

import earth from '../../../resources/svg/earth.svg';
import s from '../../Triste/components/Triste.scss';

class Triste extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <object type="image/svg+xml" data={earth}></object>
        <h1>¡Genial!</h1>

        <h2>Parece que te gusta ver el mundo limpio</h2>
        <h3>¿Qúe haces para preservarlo?</h3>

        <Link to="/">
          <paper-fab color="verde" raised class={s.button}></paper-fab>
        </Link>

        <h3>Presiona para concientizarte</h3>
      </div>
    );
  }
}

module.exports = Triste;
