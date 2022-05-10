import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {

  constructor() { }

  getFavoriteSongs(){
    return [
      {"Id" : 1, "Name":"AEIOU", "Band": "Seven Phoenix"},
      {"Id" : 2, "Name":"BANKROLL", "Band": "Bockhamption ft. A$AP Rocky, A$AP Ferg"},
      {"Id" : 3, "Name":"Deweloper", "Band": "Tymek"},
      {"Id" : 4, "Name":"ULTRA VIOLET", "Band": "Thouxanbanfauni"}
      {"Id" : 5, "Name":"CIGARETTES", "Band": "Amir Obe"}
      {"Id" : 6, "Name":"Ugh! -Dooqu Remix", "Band": "dwilly, Dooqu"}
      {"Id" : 7, "Name":"80s", "Band": "Tymek"}
      {"Id" : 8, "Name":"Textacy", "Band": "Dion Timmer"}
    ];
  }
}
