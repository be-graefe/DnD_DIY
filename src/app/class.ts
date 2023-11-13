import {DndCharacter} from "./dndcharacter";

export interface Class {
  id: number;
  name: string;
  dndCharacters: DndCharacter[];
}
