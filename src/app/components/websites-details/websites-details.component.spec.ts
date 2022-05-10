import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesDetailsComponent } from './websites-details.component';

describe('WebsitesDetailsComponent', () => {
  let component: WebsitesDetailsComponent;
  let fixture: ComponentFixture<WebsitesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
