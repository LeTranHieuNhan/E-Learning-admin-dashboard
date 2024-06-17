// categoryReducer.js

import { CategoryActionTypes } from "../actions/actionTypes";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_REQUEST:
    case CategoryActionTypes.FETCH_CATEGORY_BY_ID_REQUEST:
    case CategoryActionTypes.CREATE_CATEGORY_REQUEST:
    case CategoryActionTypes.DELETE_CATEGORY_REQUEST:
    case CategoryActionTypes.UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case CategoryActionTypes.FETCH_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        categories: [action.payload],
        loading: false,
      };
    case CategoryActionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      };
    case CategoryActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
        loading: false,
      };
    case CategoryActionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.id ? action.payload : category
        ),
        loading: false,
      };
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
    case CategoryActionTypes.FETCH_CATEGORY_BY_ID_FAILURE:
    case CategoryActionTypes.CREATE_CATEGORY_FAILURE:
    case CategoryActionTypes.DELETE_CATEGORY_FAILURE:
    case CategoryActionTypes.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
