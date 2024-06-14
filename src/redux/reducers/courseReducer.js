// courseReducer.js

import {CourseActionTypes} from "../actions/actionTypes";

const initialState = {
    courses: [],
    loading: false,
    error: null,
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case CourseActionTypes.FETCH_COURSE_REQUEST:
        case CourseActionTypes.CREATE_COURSE_REQUEST:
        case CourseActionTypes.DELETE_COURSE_REQUEST:
        case CourseActionTypes.UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case CourseActionTypes.FETCH_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: action.payload,
            };

        case CourseActionTypes.CREATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: [...state.courses, action.payload],
            };

        case CourseActionTypes.DELETE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: state.courses.filter(course => course.id !== action.payload),
            };

        case CourseActionTypes.UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                courses: state.courses.map(course =>
                    course.id === action.payload.id ? action.payload : course
                ),
            };

        case CourseActionTypes.FETCH_COURSE_FAILURE:
        case CourseActionTypes.CREATE_COURSE_FAILURE:
        case CourseActionTypes.DELETE_COURSE_FAILURE:
        case CourseActionTypes.UPDATE_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default courseReducer;
