import { TestBed } from '@angular/core/testing';

import { FavoriteWebsitesService } from './favorite-websites.service';

describe('FavoriteWebsitesService', () => {
  let service: FavoriteWebsitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteWebsitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
