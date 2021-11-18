import { createAction } from '@ngrx/store'
import { actionTypes } from './enums';

export const decrement = createAction(
    actionTypes.Decrement,
)

export const increment = createAction(
    actionTypes.Increment
)
