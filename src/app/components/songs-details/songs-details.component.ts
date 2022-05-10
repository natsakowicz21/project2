import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { FavoriteSongsService } from 'src/app/services/favorite-songs.service';


@Component({
  selector: 'app-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.css']
})
export class SongsDetailsComponent implements OnInit {
  
  public favoriteSongs:Song[] = [];
  
  constructor(
    private _favoriteSongsService: FavoriteSongsService
  ) {}

  ngOnInit(): void {
    this.getFavoriteSongs();
  }

  getFavoriteSongs() {
    this.favoriteSongs = this._favoriteSongsService.getFavoriteSongs();
  }

}
