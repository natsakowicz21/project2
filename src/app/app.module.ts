import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { WebsitesComponent } from './components/websites/websites.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongsDetailsComponent } from './components/songs-details/songs-details.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { WebsitesDetailsComponent } from './components/websites-details/websites-details.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    MoviesComponent,
    WebsitesComponent,
    SongsComponent,
    SongsDetailsComponent,
    NotFoundComponent,
    WebsitesDetailsComponent,
    MoviesDetailsComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: EmptyComponent},
      {path: 'songs', component: SongsComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'websites', component: WebsitesComponent},
      {path: '**', pathMatch: 'full', component: NotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
