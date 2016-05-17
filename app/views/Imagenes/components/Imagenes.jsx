import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';
import Imagen from '../../../components/Imagen';

import s from './Imagenes.scss';
import images from './images.js';

class Imagenes extends React.Component {
  constructor(props) {
    super(props);

    this.acumular = this.acumular.bind(this);

    this.state = {
      malas: 0,
      buenas: 0,
      seleccionadas: 0,
      total: images.length,
    }
  }

  acumular(sumar, contamina) {
    var changes = {};

    if (contamina) {
      if (sumar)
        changes = {malas: this.state.malas+1};
      else
        changes = {malas: this.state.malas-1};
    } else {
      if (sumar)
        changes = {buenas: this.state.buenas+1};
      else
        changes = {buenas: this.state.buenas-1};
    }
    this.setState(changes, this._recalculo);
  }

  _recalculo() {
    let seleccionadas = this.state.buenas + this.state.malas;
    this.setState({seleccionadas}, this._comprobarSeleccionadas);
  }

  _comprobarSeleccionadas() {
    if (this.state.total === this.state.seleccionadas) {
      console.log('Iguales');
    }
  }
          // <div>Buenas: {this.state.buenas}</div>
          // <div>Malas: {this.state.malas}</div>
          // <div>Total seleccionadas: {this.state.seleccionadas}</div>
          // <div>Total imagenes: {this.state.total}</div>

  render() {
    return (
      <div className={s.root}>

        <Toolbar subtitle="Selecciona la imagen que más te guste" />

        <main>

          { images.map(img => {
              return <Imagen onClick={this.acumular} key={img.title} {...img} />
            })
          }
        </main>
      </div>
    );
  }
}

module.exports = Imagenes;
