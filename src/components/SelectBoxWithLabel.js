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
    let id = this.props.label;
    return (
      <tr>
        <td><label htmlFor={ id }>{ this.props.label }</label></td>
        <td><select defaultValue={ this.props.optionValues[ this.props.defualtOptionIndex ] } id={ id } onChange={ onChangeEventCreater(this.props.onChange) }>
          {this.props.optionValues.map(function (name: string, index: number) {
            return <option key={name} value={name}>{name}</option>;
          })}
        </select></td>
      </tr>
    );
  }
}

export default SelectBoxWithLabel;
