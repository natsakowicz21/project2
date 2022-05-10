import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor() { }

  getFavoriteMovies(){
    return [
       {"Id" : 1, "Title":"The Bad Guys", "Year": "2022"},
      {"Id" : 2, "Title":"Big Hero 6", "Year": "2014"},
      {"Id" : 3, "Title":"Inception", "Year": "2010"},
      {"Id" : 4, "Title":"Mindhunters", "Year": "2017"},
      {"Id" : 5, "Title":"Better Call Saul", "Year": "2020"},
      {"Id" : 6, "Title":"Breaking Bad", "Year": "2013"},
      {"Id" : 7, "Title":"The Imitation Game", "Year": "2014"},
      {"Id" : 8, "Title":"Inventing Anna", "Year": "2022"}
    ];
  }
}
