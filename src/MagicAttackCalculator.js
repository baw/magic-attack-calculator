/* @flow */

class MagicAttackCalculator {
  int: number;
  baseAttack: number;
  magicAttack: number;
  masteryPercentage: number;
  element: string;
  elementalWeapon: boolean;
  elementAmplification: boolean;

  calculate() {
    //(Magic²/1000 + Magic * Mastery * 0.9)/30 + INT/200) * Basic Attack * Amp * Elemental Wand Bonus
    //=(magicAttack^2/1000+magicAttack*(mastery/100)*0.9)/30+int/200)*baseAttack*1.35*1.25
    //=((magicAttack^2/1000+magicAttack)/30+int/200)*basicAttack*1.35*1.25

    let magicAttackSquared = this.magicAttack * this.magicAttack;
    let low = (((magicAttackSquared / 1000 + this.magicAttack * (this.masteryPercentage / 100) * 0.9)) / 30 + this.int / 200) * this.baseAttack
    let high = ((magicAttackSquared / 1000 + this.magicAttack) / 30 + (this.int / 200)) * this.baseAttack

    if (this.elementAmplification) {
      low *= 1.35;
      high *= 1.35;
    }

    if (this.elementalWeapon) {
      low *= 1.25;
      high *= 1.25;
    }

    return {
      normal: { low, high },
      strong: { low: low * 1.5, high: high * 1.5 },
      weak: { low: low * 0.5, high: high * 0.5 }
    }
  }
}


export default new MagicAttackCalculator();
