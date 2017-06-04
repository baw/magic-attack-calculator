/* @flow */

import React, { Component } from 'react';
import { onChangeEventCreater } from '../util';

class CheckBoxWithLabel extends Component {
  props: {
    label: string,
    onChange: (value: boolean | number | string) => void
  }

  render() {
    return (
      <tr>
        <td><label>{ this.props.label }</label></td>
        <td><input type="checkbox" onChange={ onChangeEventCreater(this.props.onChange) }/></td>
      </tr>
    )
  }
}

export default CheckBoxWithLabel;
