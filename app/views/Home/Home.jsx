import React from 'react';
import { Link } from 'react-router';

import Button from '../../components/Button';

import s from './Home.scss';
import earth from '../../resources/svg/earth.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <img src={earth} alt="Earth" />
        <h1>SGCA</h1>

        <h2>Sistema de gestión de conciencia ambiental</h2>

        <Link to="imagenes">
          <paper-fab color="verde" raised class={s.button}></paper-fab>
        </Link>

        <h3>Presiona para concientizarte</h3>
      </div>
    );
  }
}
