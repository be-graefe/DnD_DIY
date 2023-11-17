import {Component, OnInit} from '@angular/core';
import {DndCharacter} from "./dndcharacter";
import {DndCharacterService} from "./dndcharacter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DnD_DIY';
  public dndCharacters: DndCharacter[];

  constructor(private characterService: DndCharacterService) {}

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (response: DndCharacter[]) => {
        this.dndCharacters = response;
      }
    );
  }

  public getCharacterSheet(id: number): void {

  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
