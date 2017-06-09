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
    let id = this.props.label;
    return (
      <tr className="text-bow-with-label">
        <td><label htmlFor={ id }>{this.props.label}</label></td>
        <td><input id={ id } min={this.props.min} max={this.props.max} onChange={ onChangeEventCreater(this.props.onChange) } type="number" /></td>
      </tr>
    );
  }
}

export default NumberTextBoxWithLabel;
