import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteWebsitesService {

  constructor() { }

  getFavoriteWebsites(){
    return [
      {"Id" : 1, "Name":"Find the Invisible Cow", "Url": "https://findtheinvisiblecow.com/"},
      {"Id" : 2, "Name":"Staggering Beauty", "Url": "http://www.staggeringbeauty.com/"},
      {"Id" : 3, "Name":"Scream Into The Void", "Url": "https://screamintothevoid.com/"},
      {"Id" : 4, "Name":"Shady URL", "Url": "http://www.shadyurl.com/create.php"}
    ];
  }
}
