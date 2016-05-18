import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';

import s from './Encuesta.scss';

class Encuesta extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Toolbar link="/estadisticas" subtitle="Veamos que tan bien vas" icon='trending_up' />

          <iframe className={s.iframe} src="https://docs.google.com/forms/d/1NjOS_iuSaXazebiVX7w-CgzMIKxNBz-oRfKrBDjTKXo/viewform?embedded=true#start=embed" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
      </div>
    );
  }
}

module.exports = Encuesta;
