import {DndCharacter} from "./dndcharacter";
import {DamageType} from "./damageType";

export interface Spell {
    id: number;
    name: string;
    tier: number;
    damage: string;
    description: string;
    learnedBy: DndCharacter[];
    spellDamageType: DamageType;
}
