import {AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DndCharacterService} from "../dndcharacter.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {DndCharacter} from "../dndcharacter";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-charactersheet',
  templateUrl: './charactersheet.component.html',
  styleUrls: ['./charactersheet.component.css']
})
export class CharactersheetComponent implements AfterViewInit, OnInit, OnChanges {
  public dndCharacter: DndCharacter;

  constructor(private characterService: DndCharacterService,
              private router: Router,
              private cookieService: CookieService,
              private cdr: ChangeDetectorRef) {

  }

  public updateCharacter(updateForm: NgForm): void {
    updateForm.value.id = this.dndCharacter.id;
    this.characterService.updateCharacters(updateForm.value).subscribe(
      (response: DndCharacter) => {
        console.log(response);
        this.router.navigate(['']);
      }
    );
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    const storedCharacter = this.cookieService.get('selectedCharacter');
    if (storedCharacter) {
      this.dndCharacter = JSON.parse(storedCharacter);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dndCharacter']) {
      this.cdr.detectChanges();
    }
  }
}
