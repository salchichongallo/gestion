import React from 'react';
import s from './Icon.scss';

export default class Icon extends React.Component {
  render() {
    return (
      <i className='material-icons'>
        {this.props.name}
      </i>
    );
  }
}
