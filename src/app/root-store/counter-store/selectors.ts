
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<any>('counter');

export const selectCountState = createSelector(
    selectCounterState,
    (state: any) => state.count
);
