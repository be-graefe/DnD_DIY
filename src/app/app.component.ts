import {Component, OnInit} from '@angular/core';
import {DndCharacter} from "./dndcharacter";
import {DndCharacterService} from "./dndcharacter.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DnD_DIY';
  public dndCharacters: DndCharacter[];
  public isCardHovered: boolean = false;
  public tempCharacter: DndCharacter;

  constructor(private characterService: DndCharacterService) {}

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (response: DndCharacter[]) => {
        this.dndCharacters = response;
      }
    );
  }

  public getCharacterSheet(character: DndCharacter): void {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onMouseOverCard(character: DndCharacter): void {
    this.tempCharacter = character;
    this.isCardHovered = true;
  }

  toggleMenu(): void {
    document.body.classList.toggle('menu-open');
  }

  addCharacter(addForm: NgForm) {

  }
}
