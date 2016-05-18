import React from 'react';
import { Link } from 'react-router';

import Basura from '../../../components/Basura';

import clasificaciones from './clasificaciones';

import earth from '../../../resources/svg/earth.svg';
import s from './Clasificacion.scss';

class Clasificacion extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <h1>¿Te gustan las basuras?</h1>
        <h2>Seguro que no</h2>
        <h3>¡Pero a ellos si!</h3>

        {
         clasificaciones.map(clasificacion => {
          return <Basura key={clasificacion.color} color={clasificacion.color}>
                  {clasificacion.texto}
                </Basura>
         })
        }

        <Link to='/zonas'>Zonas</Link>

      </div>
    );
  }
}

module.exports = Clasificacion;
