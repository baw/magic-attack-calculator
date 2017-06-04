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
      <div className="text-bow-with-label">
        <label>{this.props.label}</label>
        <input type="number" min={this.props.min} max={this.props.max} onChange={ onChangeEventCreater(this.props.onChange) }/>
      </div>
    );
  }
}

export default NumberTextBoxWithLabel;
