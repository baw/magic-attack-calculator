/* @flow */

import React, { Component } from 'react';
import { onChangeEventCreater } from '../util';

class SelectBoxWithLabel extends Component {
  props: {
    defualtOptionIndex: number,
    label: string,
    optionValues: Array<string>,
    onChange: (value: boolean | number | string) => void
  }

  static defaultProps = {
    defualtOptionIndex: 0,
    onChange: (value) => undefined
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <select defaultValue={ this.props.optionValues[ this.props.defualtOptionIndex ] } onChange={ onChangeEventCreater(this.props.onChange) }>
          {this.props.optionValues.map(function (name: string, index: number) {
            return <option key={name} value={name}>{name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default SelectBoxWithLabel;
