import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let spectator: SpectatorHost<SignUpComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: SignUpComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<SignUpComponent>(`<app-sign-up></app-sign-up>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
