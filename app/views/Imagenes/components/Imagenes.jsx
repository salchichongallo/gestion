import React from 'react';
import { Link } from 'react-router';

import Toolbar from '../../../components/Toolbar';

import s from './Imagenes.scss';
import images from './images.js';

class Imagenes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      malas: 0,
      buenas: 0,
      seleccionadas: 0,
      totalImagenes: images.length,
    }
  }

  _calcularSeleccionadas() {
    let seleccionadas = this.state.buenas + this.state.malas;
    this.setState({seleccionadas});
  }

  _acumular(contamina) {
    if (this.state.seleccionadas < this.state.totalImagenes) {
      if (contamina) {
        this.setState({malas: this.state.malas+1} , this._calcularSeleccionadas);
      } else {
        this.setState({buenas: this.state.buenas+1}, this._calcularSeleccionadas);
      }
    } else {
      console.log('Total seleccionadas llena');
    }
  }

  render() {
    return (
      <div className={s.root}>

        <Toolbar subtitle="Selecciona la imagen que más te guste" />

        <main>
          <div>Buenas: {this.state.buenas}</div>
          <div>Malas: {this.state.malas}</div>
          <div>Total seleccionadas: {this.state.seleccionadas}</div>
          <div>Total imagenes: {this.state.totalImagenes}</div>

          {
            images.map(img => {
              return (
                <iron-image onClick={this._acumular.bind(this, img.contamina)}
                  data-contamina={s.contamina} class={s.imagen}
                  src={img.src} title={img.title}
                  preload fade sizin="contain"
                  key={img.title}>

                </iron-image>
              )
            })
          }
        </main>
      </div>
    );
  }
}

module.exports = Imagenes;
