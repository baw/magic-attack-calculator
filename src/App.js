/* @flow */

import React from 'react';
import './App.css';

import CheckBoxWithLabel from './components/CheckBoxWithLabel';
import NumberTextBoxWithLabel from './components/NumberTextBoxWithLabel';
import SelectBoxWithLabel from './components/SelectBoxWithLabel';

import config from './config';
import magicAttackCalculator from './MagicAttackCalculator';
import { onChangeUpdaterCreator } from './util';

let App = () => {
  return (
    <div className='App'>
      <NumberTextBoxWithLabel label={ config.totalIntLabel } onChange={ onChangeUpdaterCreator("int") }/>
      <NumberTextBoxWithLabel label={ config.totalMagicAttackLabel } onChange={ onChangeUpdaterCreator('magicAttack') } />
      <NumberTextBoxWithLabel label={ config.totalBaseAttackLabel } onChange={ onChangeUpdaterCreator('baseAttack') } />
      <NumberTextBoxWithLabel
        label={ config.totalMasteryPercentLabel }
        min={ config.totalMasteryPercentMin }
        max={ config.totalMasteryPercentMax }
        onChange={ onChangeUpdaterCreator('masteryPercentage') }
      />
      <SelectBoxWithLabel label={ config.elementStrengthsLabel } optionValues={ config.elementStrengthsValue } onChange={ onChangeUpdaterCreator('element') } />
      <CheckBoxWithLabel label={ config.elementalWeaponLabel } onChange={ onChangeUpdaterCreator('elementalWeapon') } />
      <CheckBoxWithLabel label={ config.elementAmplificationLabel } onChange={ onChangeUpdaterCreator('elementAmplification') } />

      <input type='submit' onClick={ function () { console.log(magicAttackCalculator.calculate()); } } value="Calculate" />
    </div>
  );
};

export default App;
