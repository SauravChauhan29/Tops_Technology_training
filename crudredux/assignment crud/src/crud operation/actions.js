// actions.js
// import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const updateItem = (index, item) => ({
  type: UPDATE_ITEM,
  payload: { index, item },
});

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  payload: index,
});
