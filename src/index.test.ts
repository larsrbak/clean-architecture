import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior, Weapon } from "./interfaces";

describe("", function() {
  beforeEach(function() {
    myContainer.snapshot();

    myContainer.unbind(TYPES.Weapon);
    myContainer.bind<Weapon>(TYPES.Weapon).toConstantValue({
      hit() {
        return "mocked cut!";
      }
    });
  });

  afterEach(function() {
    myContainer.restore();
  });

  it("should inject dependencies", function() {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);
    expect(ninja.fight()).toEqual("mocked cut!"); // true
    expect(ninja.sneak()).toEqual("hit!"); // true
  });
});
