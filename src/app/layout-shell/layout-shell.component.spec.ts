import { createHostComponentFactory, SpectatorWithHost } from '@ngneat/spectator';

import { LayoutShellComponent } from './layout-shell.component';

describe('LayoutShellComponent', () => {
  let spectator: SpectatorWithHost<LayoutShellComponent>;
  const createComponent = createHostComponentFactory({
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


