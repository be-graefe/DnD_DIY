import {DndCharacter} from "./dndcharacter";

export interface User {
    id: number;
    name: string;
    password: string;
    dndCharacters: DndCharacter[];
}
