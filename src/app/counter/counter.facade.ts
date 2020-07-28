import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectCountState } from '../root-store/counter-store/selectors';
import { Increment, Decrement, Reset } from '../root-store/counter-store/actions';

@Injectable()
export class CounterFacade {
    selectedCount$ = this.store.select(selectCountState);

    constructor(
        private store: Store<any>
        ) { }

    Increment() {
        this.store.dispatch(new Increment());
    }

    Decrement() {
        this.store.dispatch(new Decrement());
    }

    Reset() {
        this.store.dispatch(new Reset());
    }
}
