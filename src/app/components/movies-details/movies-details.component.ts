import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { FavoriteMoviesService } from 'src/app/services/favorite-movies.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  public favoriteMovies:Movie[] = [];
  
  constructor(
    private _favoriteMoviesService: FavoriteMoviesService
  ) {}

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies() {
    this.favoriteMovies = this._favoriteMoviesService.getFavoriteMovies();
  }

}
