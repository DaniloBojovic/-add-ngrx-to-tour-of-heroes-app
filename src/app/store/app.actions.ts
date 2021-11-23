import { createAction, props } from '@ngrx/store';
import { Hero } from './../hero';

export const addHero = createAction('[Heroes] Add Hero', props<Hero>());
export const removeHero = createAction('[Heroes] Remove Hero', props<Hero>());
