import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteWebsitesService {

  constructor() { }

  getFavoriteWebsites(){
    return [
      {"Id" : 1, "Name":"Apple", "Url": "https://www.apple.com/"},
      {"Id" : 2, "Name":"Microsoft", "Url": "https://www.microsoft.com/"},
      {"Id" : 3, "Name":"Angular", "Url": "https://www.angular.io/"},
      {"Id" : 4, "Name":"Nodejs", "Url": "https://www.nodejs.org/"}
    ];
  }
}
