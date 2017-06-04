/* @flow */

import React, { Component } from 'react';
import './DamageDisplay.css';

import type { Damage } from '../MagicAttackCalculator';

let DamageDisplayUnit = ({label, low, high }) => {
  return (
    <tr>
      <td>{ label }</td>
      <td>{ low }</td>
      <td>{ high }</td>
    </tr>
  );
}

class DamageDisplay extends Component {
  props: {
    damage: Damage
  }

  render() {
    return (
      <div className='DamageDisplay'>
        <p>Damage:</p>
        <table className='DamageDisplay-table'>
          <thead>
            <tr>
              <td></td>
              <td>Low</td>
              <td>High</td>
            </tr>
          </thead>

          <tbody>
            <DamageDisplayUnit label='Normal' low={ this.props.damage.normal.low } high={ this.props.damage.normal.high }/>
            <DamageDisplayUnit label='Strong' low={ this.props.damage.strong.low } high={ this.props.damage.strong.high }/>
            <DamageDisplayUnit label='Weak' low={ this.props.damage.weak.low } high={ this.props.damage.weak.high }/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DamageDisplay;
