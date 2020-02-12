import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesBooksLibraryComponent } from './favorites-books-library.component';

describe('FavoritesBooksLibraryComponent', () => {
  let component: FavoritesBooksLibraryComponent;
  let fixture: ComponentFixture<FavoritesBooksLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesBooksLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesBooksLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
