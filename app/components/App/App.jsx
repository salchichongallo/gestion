import React from 'react';

import s from './App.scss';

export default class App extends React.Component {
  render() {
    var slideInDownAnimation = `${s.header} animated slideInDown`;
    var slideInUpAnimation = `${s.app} animated slideInUp`;
    var fadeAnimation = `${s.fade} animated fadeIn`;

    return (
      <div>
        <header className={slideInDownAnimation}></header>

        <div className={s.container}>
          <paper-material elevation='2' class={slideInUpAnimation} animated>
            <div className={fadeAnimation}>
              {this.props.children}
            </div>
          </paper-material>
        </div>

      </div>
    );
  }
}
