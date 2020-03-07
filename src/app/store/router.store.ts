import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export const routerKey = 'RouterState';

export interface ParamsRouterState {
  url: string;
  params: Params;
  queryParams: Params;
}

export class ParamsSerializer implements RouterStateSerializer<ParamsRouterState> {
  public serialize(routerState: RouterStateSnapshot): ParamsRouterState {
    let route = routerState.root;
    let { params, queryParams } = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
      params = { ...params, ...route.params };
      queryParams = { ...queryParams, ...route.queryParams };
    }

    return { url: routerState.url, params, queryParams };
  }
}
