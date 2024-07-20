// src/reducers/userReducer.js

import {UserActionTypes} from "../actions/actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST:
        case UserActionTypes.CREATE_USER_REQUEST:
        case UserActionTypes.DELETE_USER_REQUEST:
        case UserActionTypes.UPDATE_USER_REQUEST:
        case UserActionTypes.ASSIGN_ROLE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case UserActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload],
            };
        case UserActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload),
            };
        case UserActionTypes.UPDATE_USER_SUCCESS:
        case UserActionTypes.ASSIGN_ROLE_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case UserActionTypes.FETCH_USER_FAILURE:
        case UserActionTypes.CREATE_USER_FAILURE:
        case UserActionTypes.DELETE_USER_FAILURE:
        case UserActionTypes.UPDATE_USER_FAILURE:
        case UserActionTypes.ASSIGN_ROLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
