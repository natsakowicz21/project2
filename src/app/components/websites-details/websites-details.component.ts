import { Component, OnInit } from '@angular/core';
import { FavoriteWebsitesService } from '../../services/favorite-websites.service';
import { Website } from '../../interfaces/website';

@Component({
  selector: 'app-websites-details',
  templateUrl: './websites-details.component.html',
  styleUrls: ['./websites-details.component.css']
})
export class WebsitesDetailsComponent implements OnInit {

  public favoriteWebsites:Website[] = [];
  
  constructor(
    private _favoriteWebsitesService: FavoriteWebsitesService
  ) {}

  ngOnInit(): void {
    this.getFavoriteWebsites();
  }

  getFavoriteWebsites() {
    this.favoriteWebsites = this._favoriteWebsitesService.getFavoriteWebsites();
  }

}
