import {Component} from '@angular/core';
import {DndCharacterService} from "../dndcharacter.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {DndCharacter} from "../dndcharacter";

@Component({
  selector: 'app-charactersheet',
  templateUrl: './charactersheet.component.html',
  styleUrls: ['./charactersheet.component.css']
})
export class CharactersheetComponent {
  public dndCharacter: DndCharacter;

  constructor(private characterService: DndCharacterService,
              private router: Router,
              private cookieService: CookieService) {
    const storedCharacter = this.cookieService.get('selectedCharacter');
    if (storedCharacter) {
      this.dndCharacter = JSON.parse(storedCharacter);
    } else {
      this.router.navigate(['/not-found']);
    }
  }
}
