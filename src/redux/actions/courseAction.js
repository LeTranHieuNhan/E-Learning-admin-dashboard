// courseActions.js
import axios from 'axios';
import {CourseActionTypes} from "./actionTypes";

const API_URL = 'http://localhost:8080/api/v1';
const getToken = () => localStorage.getItem('token');

// Fetch Course Actions
export const fetchCourseRequest = () => ({
    type: CourseActionTypes.FETCH_COURSE_REQUEST,
});

export const fetchCourseSuccess = (courses) => ({
    type: CourseActionTypes.FETCH_COURSE_SUCCESS,
    payload: courses,
});

export const fetchCourseFailure = (error) => ({
    type: CourseActionTypes.FETCH_COURSE_FAILURE,
    payload: error,
});

export const fetchCourses = () => {
    return async (dispatch) => {
        dispatch(fetchCourseRequest());
        try {
            const token = getToken();
            const response = await axios.get(`${API_URL}/courses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(fetchCourseSuccess(response.data));
        } catch (error) {
            dispatch(fetchCourseFailure(error.message));
        }
    };
};

// Create Course Actions
export const createCourseRequest = () => ({
    type: CourseActionTypes.CREATE_COURSE_REQUEST,
});

export const createCourseSuccess = (course) => ({
    type: CourseActionTypes.CREATE_COURSE_SUCCESS,
    payload: course,
});

export const createCourseFailure = (error) => ({
    type: CourseActionTypes.CREATE_COURSE_FAILURE,
    payload: error,
});

export const createCourse = (course) => {
    return async (dispatch) => {
        dispatch(createCourseRequest());
        try {
            const token = getToken();
            const response = await axios.post(`${API_URL}/courses`, course, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(createCourseSuccess(response.data));
        } catch (error) {
            dispatch(createCourseFailure(error.message));
        }
    };
};

// Delete Course Actions
export const deleteCourseRequest = () => ({
    type: CourseActionTypes.DELETE_COURSE_REQUEST,
});

export const deleteCourseSuccess = (courseId) => ({
    type: CourseActionTypes.DELETE_COURSE_SUCCESS,
    payload: courseId,
});

export const deleteCourseFailure = (error) => ({
    type: CourseActionTypes.DELETE_COURSE_FAILURE,
    payload: error,
});

export const deleteCourse = (courseId) => {
    return async (dispatch) => {
        dispatch(deleteCourseRequest());
        try {
            const token = getToken();
            await axios.delete(`${API_URL}/courses/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(deleteCourseSuccess(courseId));
        } catch (error) {
            dispatch(deleteCourseFailure(error.message));
        }
    };
};

// Update Course Actions
export const updateCourseRequest = () => ({
    type: CourseActionTypes.UPDATE_COURSE_REQUEST,
});

export const updateCourseSuccess = (course) => ({
    type: CourseActionTypes.UPDATE_COURSE_SUCCESS,
    payload: course,
});

export const updateCourseFailure = (error) => ({
    type: CourseActionTypes.UPDATE_COURSE_FAILURE,
    payload: error,
});

export const updateCourse = (course) => {
    return async (dispatch) => {
        dispatch(updateCourseRequest());
        try {
            const token = getToken();
            const response = await axios.put(`${API_URL}/courses/${course.id}`, course, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(updateCourseSuccess(response.data));
        } catch (error) {
            dispatch(updateCourseFailure(error.message));
        }
    };
};
