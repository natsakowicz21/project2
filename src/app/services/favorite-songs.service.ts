import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSongsService {

  constructor() { }

  getFavoriteSongs(){
    return [
      {"Id" : 1, "Name":"Comfortably Numb", "Band": "Pink Floyd"},
      {"Id" : 2, "Name":"Hey You", "Band": "Pink Floyd"},
      {"Id" : 3, "Name":"Time", "Band": "Pink Floyd"},
      {"Id" : 4, "Name":"Money", "Band": "Pink Floyd"}
    ];
  }
}
