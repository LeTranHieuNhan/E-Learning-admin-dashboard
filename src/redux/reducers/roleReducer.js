// src/reducers/roleReducer.js

import {
  ADD_ROLE,
  DELETE_ROLE,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS, UPDATE_ROLE
} from "../actions/roleActions";

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        roles: action.payload,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_ROLE:
      return {
        ...state,
        roles: [...state.roles, action.payload],
      };
    case DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter(role => role.id !== action.payload),
      };
    case UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map(role =>
          role.id === action.payload.id ? action.payload : role
        ),
      };
    default:
      return state;
  }
};

export default roleReducer;
