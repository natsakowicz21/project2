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
    ];
  }
}
