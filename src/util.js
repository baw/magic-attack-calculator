/* @flow */

import { magicAttackCalculator } from './MagicAttackCalculator';

function onChangeEventCreater(cb: (value: boolean | number | string) => void) {
  return function onChange(event: SyntheticEvent) {
    let target = event.target;
    if (target instanceof window.HTMLInputElement) {
      let value = target.type === 'checkbox' ? target.checked : target.value;

      if (target.type === 'number') {
        value = parseInt(value, 10);
      }

      cb(value);
    }
  };
};

function onChangeUpdaterCreator(key: string) {
    return function (value: boolean | number | string) {
      magicAttackCalculator[key] = value;
    }
}

export {
  onChangeEventCreater,
  onChangeUpdaterCreator
}
