import { UserActionTypes } from "../actions/actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST:
        case UserActionTypes.CREATE_USER_REQUEST:
        case UserActionTypes.DELETE_USER_REQUEST:
        case UserActionTypes.UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            };
        case UserActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload],
                error: null
            };
        case UserActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload),
                error: null
            };
        case UserActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
                error: null
            };
        case UserActionTypes.FETCH_USER_FAILURE:
        case UserActionTypes.CREATE_USER_FAILURE:
        case UserActionTypes.DELETE_USER_FAILURE:
        case UserActionTypes.UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
