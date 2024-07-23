import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions';

const initialState = {
  items: [],
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index ? action.payload.item : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default crudReducer;
