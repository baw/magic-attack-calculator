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
      <div>
        <label>{ this.props.label }</label>
        <input type="checkbox" onChange={ onChangeEventCreater(this.props.onChange) }/>
      </div>
    )
  }
}

export default CheckBoxWithLabel;
