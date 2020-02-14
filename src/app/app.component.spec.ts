import { createHostFactory, SpectatorHost, mockProvider } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './user-access/services/authentication.service';

describe('AppComponent', () => {
  let spectator: SpectatorHost<AppComponent>;
  const createComponent = createHostFactory({
    detectChanges: false,
    component: AppComponent,
    declarations: [],
    imports: [],
    providers: [mockProvider(ToastrService), mockProvider(AuthenticationService)]
  });

  beforeEach(() => {
    spectator = createComponent<AppComponent>(`<app-root></app-root>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});