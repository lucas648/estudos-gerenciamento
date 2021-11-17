import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, createAction, createReducer, on, props } from '@ngrx/store'

enum actionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement'
}


export const decrement = createAction(
    actionTypes.Decrement,
)

export const increment = createAction(
    actionTypes.Increment
)

const INITIAL_STATE = {
  counter: 0
}



export const reducer = createReducer(
  INITIAL_STATE,
  on(increment, state=>({ ...state, counter: state.counter + 1 })),
  on(decrement, state=>({ ...state, counter: state.counter - 1 }))
)