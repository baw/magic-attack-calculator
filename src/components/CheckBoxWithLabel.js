/* @flow */

import React, { Component } from 'react';
import { onChangeEventCreater } from '../util';

class CheckBoxWithLabel extends Component {
  props: {
    label: string,
    onChange: (value: boolean | number | string) => void
  }

  render() {
    let id = this.props.label;
    return (
      <tr>
        <td><label htmlFor={ id }>{ this.props.label }</label></td>
        <td><input id={ id } onChange={ onChangeEventCreater(this.props.onChange) } type="checkbox"/></td>
      </tr>
    )
  }
}

export default CheckBoxWithLabel;
