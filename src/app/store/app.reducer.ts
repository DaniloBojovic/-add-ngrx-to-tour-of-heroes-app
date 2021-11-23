import { Action, createReducer, on } from '@ngrx/store';
import { Hero } from '../hero';
import * as AppActions from './app.actions';

export interface AppState {
  heroes: Hero[];
}

const initialState: AppState = { heroes: [] };

const appReducer = createReducer(
  initialState,
  on(AppActions.addHero, (state, hero) => ({
    ...state,
    heroes: [hero, ...state.heroes],
  })),
  on(AppActions.removeHero, (state, hero) => {
    return {
      ...state,
      heroes: state.heroes.filter((hero) => {
        return hero.id !== hero.id;
      }),
    };
  })
);

export function reducer(state: AppState = initialState, action: Action) {
  console.log('state', state);
  console.log('action', action);
  return appReducer(state, action);
}
