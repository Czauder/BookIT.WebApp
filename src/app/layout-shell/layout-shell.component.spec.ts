import { createHostComponentFactory, SpectatorWithHost, SpectatorHost, createHostFactory } from '@ngneat/spectator';

import { LayoutShellComponent } from './layout-shell.component';

describe('LayoutShellComponent', () => {
  let spectator: SpectatorHost<LayoutShellComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: LayoutShellComponent,
    declarations: [],
    imports: [],
    providers: []
  });

  beforeEach(() => {
    spectator = createComponent<LayoutShellComponent>('<app-layout-shell></app-layout-shell>')
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});


