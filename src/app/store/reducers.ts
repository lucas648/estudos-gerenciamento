import { increment, decrement } from './actions';
import { createReducer, on } from '@ngrx/store';

const INITIAL_STATE = {
    counter: 0
}

export const reducer = createReducer(
  INITIAL_STATE,
  on(increment, state=>({ ...state, counter: state.counter + 1 })),
  on(decrement, state=>({ ...state, counter: state.counter - 1 }))
)