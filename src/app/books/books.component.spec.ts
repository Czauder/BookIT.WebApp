import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { BooksComponent } from './books.component';


describe('BooksComponent', () => {
  let spectator: SpectatorWithHost<BooksComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: BooksComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<BooksComponent>(`<app-books></app-books>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
