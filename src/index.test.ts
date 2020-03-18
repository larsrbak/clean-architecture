import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

it('should inject dependencies', function () {
    expect(ninja.fight()).toEqual("cut!"); // true
    expect(ninja.sneak()).toEqual("hit!"); // true
});
