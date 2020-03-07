import { createFeatureSelector } from '@ngrx/store';

import { AppState, appKey } from '../store';

export const selectFeature = createFeatureSelector<AppState>(appKey);
