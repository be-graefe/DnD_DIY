import {DndCharacter} from "./dndcharacter";

export interface Race {
    id: number;
    name: string;
    dndCharacters: DndCharacter[];
}
