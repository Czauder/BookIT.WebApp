import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesBooksComponent } from './favorites-books.component';

describe('FavoritesBooksComponent', () => {
  let component: FavoritesBooksComponent;
  let fixture: ComponentFixture<FavoritesBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
