import { TestBed } from '@angular/core/testing';

import { FavoriteSongsService } from './favorite-songs.service';

describe('FavoriteSongsService', () => {
  let service: FavoriteSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
