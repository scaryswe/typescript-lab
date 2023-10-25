import { Kaiju, KaijuType } from "./example-8";

interface Robot extends Kaiju {
  name: string;
  power: number;
  type: KaijuType;
}

// Giant Robot class
class GiantRobot extends Kaiju implements Robot {
  constructor(name: string, power: number, type: KaijuType) {
    super(name, power, type);
  }
}

const biggieSmalls = new GiantRobot("Biggie Smalls", 100, KaijuType.Flying);
console.log(biggieSmalls.describe());
