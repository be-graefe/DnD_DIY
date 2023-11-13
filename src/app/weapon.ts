import {DamageType} from "./damageType";
import {DndCharacter} from "./dndcharacter";

export interface Weapon {
    id: number;
    name: string;
    damage: string;
    description: string;
    damageType: DamageType;
    learnedBy: DndCharacter[];
}
