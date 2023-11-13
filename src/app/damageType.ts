import {Weapon} from "./weapon";
import {Spell} from "./spell";

export interface DamageType {
id: number;
  name: string;
  spells: Spell[];
  weapons: Weapon[];
}
