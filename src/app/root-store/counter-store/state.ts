import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Joke } from '../../models';

export const featureAdapter: EntityAdapter<
  Joke
> = createEntityAdapter<Joke>({
  selectId: model => model.id,
  sortComparer: (a: Joke, b: Joke): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Joke> {
  count?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    count: 0
  }
);
