/* @flow */

import React, { Component } from 'react';
import { onChangeEventCreater } from '../util';

class NumberTextBoxWithLabel extends Component {
  props: {
    label: string,
    max: number,
    min: number,
    onChange: (value: boolean | number | string) => void
  }

  static defaultProps = {
    min: 0,
    max: 999
  }

  render() {
    return (
      <tr className="text-bow-with-label">
        <td><label>{this.props.label}</label></td>
        <td><input type="number" min={this.props.min} max={this.props.max} onChange={ onChangeEventCreater(this.props.onChange) }/></td>
      </tr>
    );
  }
}

export default NumberTextBoxWithLabel;
