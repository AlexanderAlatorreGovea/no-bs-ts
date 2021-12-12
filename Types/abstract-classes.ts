// abstract takes away the ability to instantiate the class
// it acts like a template for an actual class
// abstract shares common behaver but cannot be instantiated
// abstract classes have a lot of implementation that is shared
// but only needs to be overwritten by sub classes
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Haduken";
  }
  get name(): string {
    return "Ryu";
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
ryu.fight();

interface Alex {
  name: string;
  lastName: string;
}

const returnObject = <T>(name: string, lastName: string): Alex => {
  return {
    name,
    lastName,
  };
};

returnObject<Alex>("alex", "govea");
