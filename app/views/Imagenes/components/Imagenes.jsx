import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';
import GrupoContainer from '../../../components/GrupoContainer';

import s from './Imagenes.scss';
import images from './images.js';

class Imagenes extends React.Component {
  constructor(props) {
    super(props);

    this.acumular = this.acumular.bind(this);

    this.state = {
      acum: 1,
      malas: 0,
      buenas: 0,
      seleccionadas: 0,
      total: images.length / 2,
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
    this.setState({seleccionadas}, this._siguientePagina);
  }

  _siguientePagina() {
    if (this.state.total === this.state.seleccionadas) {
      if (this.state.buenas >= this.state.malas) {
        window.location.href = '#/genial';
      } else {
        window.location.href = '#/triste';
      }
    }

    this._mostrarImagenes();
  }

  _toggleClass(referencia) {
    let ref = this.refs[referencia];

    if (! ref) {return }

    let primero = ReactDOM.findDOMNode(ref);
    primero.classList.toggle(s.activo);
  }

  _mostrarImagenes() {
    if (this.state.acum !== 1) {
      this._toggleClass(this.state.acum - 1);
    }

    this._toggleClass(this.state.acum);

    this.setState({acum: this.state.acum + 1});
  }

  componentDidMount() {
    this._mostrarImagenes();
  }

  render() {
    var size = 2;
    var acum = 0;
    var grupos = [];

    for (var i=0; i < images.length; i+=size) {
      let grupo = images.slice(i, i+size);
      grupos.push(grupo);
    }

    // <div>Buenas: {this.state.buenas}</div>
    // <div>Malas: {this.state.malas}</div>
    // <div>Total seleccionadas: {this.state.seleccionadas}</div>
    // <div>Total imagenes: {this.state.total}</div>

    return (
      <div className={s.root}>
        <Toolbar subtitle="Selecciona la imagen que más te guste" />

        <main>
          { grupos.map(grupo => {
              acum = acum + 1;
              return <GrupoContainer ref={acum} key={acum} siguiente={this._siguientePagina.bind(this)} onClick={this.acumular} imagenes={grupo} />
            })
          }
        </main>
      </div>
    );
  }
}

module.exports = Imagenes;
