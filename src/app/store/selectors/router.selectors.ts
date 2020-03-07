import { createSelector } from '@ngrx/store';

import { selectFeature } from '.';



export const selectRouterState = createSelector(selectFeature, state => state.RouterState);

export const selectRouteParams = createSelector(
  selectRouterState,
  state => (state && state.state && state.state.params) || {}
);

export const selectRoute = createSelector(selectRouterState, state => (state && state.state) || {});

export const selectRouteParam = createSelector(
  selectRouteParams,
  (params, props) => params[props.select]
);

export const selectUrl = createSelector(selectRoute, state => state.url || '');

export const selectUrlStartWith = createSelector(selectUrl, (url: string, props) => url.startsWith(props.url) || false);

