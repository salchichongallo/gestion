import React from 'react';

import Imagen from '../Imagen';

import s from './GrupoContainer.scss';

export default class GrupoContainer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.relative}>
          { this.props.imagenes.map(img => {
              return <Imagen onClick={this.props.onClick} key={img.title} {...img} />
            })
          }
        </div>
      </div>
    )
  }
}
