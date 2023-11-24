import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DndCharacter } from './dndcharacter';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DndCharacterService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<DndCharacter[]> {
    return this.http.get<DndCharacter[]>(`${this.apiServerUrl}/character/all`);
  }

  public addCharacter(dndcharacter: DndCharacter): Observable<DndCharacter> {
    return this.http.post<DndCharacter>(`${this.apiServerUrl}/character/add`, dndcharacter);
  }

  public updateCharacters(dndcharacter: DndCharacter): Observable<DndCharacter> {
    return this.http.put<DndCharacter>(`${this.apiServerUrl}/character/update`, dndcharacter);
  }

  public deleteCharacter(dndcharacterId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/character/delete/${dndcharacterId}`);
  }
}
