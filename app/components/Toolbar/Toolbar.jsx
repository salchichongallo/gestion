import React from 'react';
import { Link } from 'react-router';

import s from './Toolbar.scss';
import earth from '../../resources/svg/earth.svg';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div>
          <Link to='/'>
            <img className={s.logo} src={earth} />

            <span className={s.title}>SGCA</span>
          </Link>

          <span className={s.subtitle}>{this.props.subtitle}</span>


          <Link to={this.props.link}>
            <i className="material-icons">{this.props.icon}</i>
          </Link>
        </div>
      </div>
    );
  }
}
