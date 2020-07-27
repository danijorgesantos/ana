
import { createSelector, createFeatureSelector } from '@ngrx/store';

// export interface FeatureState {
//     counter: number;
// }

// export interface AppState {
//     feature: FeatureState;
// }

// export const selectFeature = (state: AppState) => state.feature;

// export const selectFeatureCount = createSelector(
//     selectFeature,
//     (state: FeatureState) => state.counter
// );

export const selectCounterState = createFeatureSelector<any>('counter');

export const selectCountState = createSelector(
    selectCounterState,
    (state: any) => state.count
);
