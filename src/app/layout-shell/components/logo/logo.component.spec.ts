import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let spectator: SpectatorWithHost<LogoComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: LogoComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<LogoComponent>(`<app-logo></app-logo>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
