import {Component, OnInit} from '@angular/core';
import {DndCharacter} from "../dndcharacter";
import {DndCharacterService} from "../dndcharacter.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dndCharacters: DndCharacter[];
  public isCardHovered: boolean = false;
  public tempCharacter: DndCharacter;

  constructor(private characterService: DndCharacterService,
              private router: Router,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      (response: DndCharacter[]) => {
        this.dndCharacters = response;
      }
    );
  }

  public getCharacterSheet(character: DndCharacter): void {
    this.cookieService.set('selectedCharacter', JSON.stringify(character));
    this.router.navigate(['/charactersheet']);
  }

  onMouseOverCard(character: DndCharacter): void {
    this.tempCharacter = character;
    this.isCardHovered = true;
  }

  toggleMenu(addForm: NgForm): void {
    document.body.classList.toggle('menu-open');
    addForm.reset();
  }

  addCharacter(addForm: NgForm) {
    addForm.value.currentHitPoints = addForm.value.maxHitPoints;
    this.characterService.addCharacter(addForm.value).subscribe(
      (response : DndCharacter) => {
        console.log(response);
        this.getCharacters();
        addForm.reset();
      }
    );
  }

  deleteCharacter(character: DndCharacter) {
    this.characterService.deleteCharacter(character.id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCharacters();
      }
    );
  }
}
