import { CourseSessionActionTypes } from "../actions/actionTypes";

const initialState = {
    sessions: [],
    loading: false,
    error: null,
};

const courseSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CourseSessionActionTypes.FETCH_SESSIONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CourseSessionActionTypes.FETCH_SESSIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                sessions: action.payload,
            };
        case CourseSessionActionTypes.FETCH_SESSIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CourseSessionActionTypes.CREATE_SESSION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CourseSessionActionTypes.CREATE_SESSION_SUCCESS:
            return {
                ...state,
                loading: false,
                sessions: [...state.sessions, action.payload],
            };
        case CourseSessionActionTypes.CREATE_SESSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CourseSessionActionTypes.UPDATE_SESSION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CourseSessionActionTypes.UPDATE_SESSION_SUCCESS:
            return {
                ...state,
                loading: false,
                sessions: state.sessions.map(session =>
                    session.id === action.payload.id ? action.payload : session
                ),
            };
        case CourseSessionActionTypes.UPDATE_SESSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CourseSessionActionTypes.DELETE_SESSION_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CourseSessionActionTypes.DELETE_SESSION_SUCCESS:
            return {
                ...state,
                loading: false,
                sessions: state.sessions.filter(session => session.id !== action.payload),
            };
        case CourseSessionActionTypes.DELETE_SESSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                sessions: action.payload,
            };
        case CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default courseSessionReducer;
