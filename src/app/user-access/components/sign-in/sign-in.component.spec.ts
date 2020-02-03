import { SpectatorWithHost, createHostComponentFactory } from '@ngneat/spectator';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let spectator: SpectatorWithHost<SignInComponent>;
  const createComponent = createHostComponentFactory({
    detectChanges: false,
    component: SignInComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<SignInComponent>(`<app-sign-in></app-sign-in>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
