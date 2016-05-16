import React from 'react';

import s from './Basura.scss';

export default class Basura extends React.Component {
  render() {
    let demo = `${s.icono} material-icons`;
    return (
      <div className={s.root} color={this.props.color}>
        <i className={demo}>delete</i>
        {this.props.children}
      </div>
    );
  }
}
