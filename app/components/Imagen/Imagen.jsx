import React from 'react';
import classNames from 'classnames/bind';

import s from './Imagen.scss';

var cx = classNames.bind(s);

export default class Imagen extends React.Component {
  constructor(props) {
    super(props);

    this._toggle = this._toggle.bind(this);

    this.state = {
      selected: false
    }
  }

  _toggle(e) {
    this.setState({selected: !this.state.selected});
    this.props.onClick(!this.state.selected, this.props.contamina);
  }

  render() {
    let estilos = cx({
      root: true,
      buena: this.state.selected && !this.props.contamina,
      mala: this.state.selected && this.props.contamina
    });

    return (
      <div className={estilos} onClick={this._toggle}>
        <div className={s.seleccionada}>
          <paper-ripple></paper-ripple>
        </div>
        <iron-image class={s.imagen} refs={this.props.title}
          src={this.props.src} preload
          fade sizing='cover'>
        </iron-image>
      </div>
    );
  }
}
