import React from 'react';
import { Link } from 'react-router';

import s from './Demo.scss';
import tree from './tree.svg';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <header className={s.demo}>
          Página demo, <Link to="/">regresar</Link>
        </header>

        <div className={s.center}>
          <img src={tree} alt="Tree" />
        </div>
      </div>
    );
  }
}

module.exports = Demo;
