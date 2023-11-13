import {DndCharacter} from "./dndcharacter";

export interface Language {
  id: number;
  name: string;
  learnedBy: DndCharacter[];
}
