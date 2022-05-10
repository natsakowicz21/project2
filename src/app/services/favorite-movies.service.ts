import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor() { }

  getFavoriteMovies(){
    return [
      {"Id" : 1, "Title":"The Northman", "Year": "2022"},
      {"Id" : 2, "Title":"he Batman", "Year": "2022"},
      {"Id" : 3, "Title":"The Unbearable Weight of Massive Talent", "Year": "2022"},
      {"Id" : 4, "Title":"Everything Everywhere All at Once", "Year": "2022"},
      {"Id" : 5, "Title":"Fantastic Beasts: The Secrets of Dumbledore", "Year": "2022"},
      {"Id" : 6, "Title":"Morbius", "Year": "2022"},
      {"Id" : 7, "Title":"The Bad Guys", "Year": "2022"},
      {"Id" : 8, "Title":"Uncharted", "Year": "2022"}
    ];
  }
}
