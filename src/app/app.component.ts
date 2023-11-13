import {Component, OnInit} from '@angular/core';
import {DndCharacter} from "./dndcharacter";
import {DndCharacterService} from "./dndcharacter.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DnD_DIY';
  public dndcharacters: DndCharacter[];

  constructor(private characterService: DndCharacterService) {}

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (response: DndCharacter[]) => {
        this.dndcharacters = response;
      },
    (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
