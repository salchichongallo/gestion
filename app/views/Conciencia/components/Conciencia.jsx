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

        <h2>Ya no hay excusas</h2>

        <Link to="imagenes">
          <paper-fab color="verde" raised class={s.button}></paper-fab>
        </Link>

        <h3>Presiona para concientizarte</h3>
      </div>
    );
  }
}

module.exports = Conciencia;
