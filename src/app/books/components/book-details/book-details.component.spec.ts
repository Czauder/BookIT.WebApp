import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let spectator: SpectatorWithHost<BookDetailsComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: BookDetailsComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<BookDetailsComponent>(`<app-book-details></app-book-details>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
